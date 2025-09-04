import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>TechHub Naija Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This includes your name, email address, 
                  phone number, shipping address, and payment information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Process and fulfill your orders</li>
                  <li>• Communicate with you about your purchases</li>
                  <li>• Provide customer support</li>
                  <li>• Send promotional emails (with your consent)</li>
                  <li>• Improve our products and services</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  except as described in this policy. We may share your information with trusted partners 
                  who assist us in operating our website and conducting business.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and serve personalized advertisements through Google Ads. 
                  You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Google Ads</h2>
                <p className="text-muted-foreground">
                  Our website displays advertisements through Google AdSense. Google may use cookies 
                  to serve ads based on your prior visits to our website or other websites. You can 
                  opt out of personalized advertising by visiting Google's Ad Settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, 
                  no internet transmission is completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>TechHub Naija</strong></p>
                  <p>Location: Victoria Island, Lagos, Nigeria</p>
                  <p>WhatsApp: +234 816 577 2892</p>
                  <p>Email: hello@techhubnaija.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Updates to Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. Changes will be posted on 
                  this page with an updated revision date.
                </p>
              </section>

              <div className="text-center pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Last updated: January 2025 | © 2025 TechHub Naija. All rights reserved.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;