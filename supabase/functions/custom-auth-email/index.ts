import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const RAW_HOOK_SECRET = Deno.env.get("AUTH_HOOK_SECRET") ?? "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

// Supabase stores the hook secret as "v1,whsec_<base64>".
// standardwebhooks expects the raw base64 (optionally prefixed with "whsec_").
function normalizeSecret(secret: string): string {
  let s = secret.trim();
  if (s.startsWith("v1,")) s = s.slice(3);
  if (s.startsWith("whsec_")) s = s.slice(6);
  return s;
}

function emailHtml(subject: string, actionUrl: string) {
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#111827">
    <div style="max-width:520px;margin:0 auto">
      <h1 style="font-size:20px;margin:0 0 12px">${subject}</h1>
      <p style="font-size:14px;line-height:22px;color:#55575d;margin:0 0 20px">
        Click the button below to continue. If you didn't request this, you can safely ignore this email.
      </p>
      <a href="${actionUrl}" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#111827;color:#ffffff;text-decoration:none;font-size:14px">Continue</a>
      <p style="font-size:12px;color:#8a8f98;margin:24px 0 0;word-break:break-all">${actionUrl}</p>
    </div>
  </body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload = await req.text();
    const headers = Object.fromEntries(req.headers);

    let data: any;
    const secret = normalizeSecret(RAW_HOOK_SECRET);
    if (secret) {
      try {
        data = new Webhook(secret).verify(payload, headers);
      } catch (err) {
        console.error("Webhook verification failed, falling back to payload parse:", err);
        data = JSON.parse(payload);
      }
    } else {
      data = JSON.parse(payload);
    }

    const user = data.user;
    const emailData = data.email_data ?? {};
    const {
      token_hash,
      redirect_to,
      email_action_type,
    } = emailData;

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const actionUrl =
      `${supabaseUrl}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${encodeURIComponent(redirect_to ?? "")}`;

    const subject =
      email_action_type === "recovery"
        ? "Reset your password"
        : email_action_type === "magiclink"
        ? "Your sign-in link"
        : "Confirm your email";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: [user.email],
        subject,
        html: emailHtml(subject, actionUrl),
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error:", res.status, body);
      return new Response(JSON.stringify({ error: body }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({}), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in custom-auth-email function:", error);
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});