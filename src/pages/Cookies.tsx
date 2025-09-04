import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Cookie Policy</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>TechHub Naija Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience and enable certain 
                  functionality on our site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Essential Cookies:</strong> Required for basic site functionality like login and cart management</li>
                  <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li>• <strong>Advertising Cookies:</strong> Used to display relevant ads through Google AdSense</li>
                  <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Google Ads and AdSense</h2>
                <p className="text-muted-foreground">
                  Our website displays advertisements through Google AdSense. Google may use cookies 
                  to serve ads based on your prior visits to our website or other websites on the Internet. 
                  These cookies enable Google and its partners to serve ads to you based on your visit 
                  to our site and/or other sites on the Internet.
                </p>
                <p className="text-muted-foreground mt-2">
                  You may opt out of personalized advertising by visiting 
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {" "}Google's Ads Settings
                  </a> or by visiting 
                  <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {" "}www.aboutads.info
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>We may also use third-party services that set cookies:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Google Analytics:</strong> For website traffic analysis</li>
                    <li>• <strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                    <li>• <strong>Payment Processors:</strong> For secure payment processing</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Managing Your Cookie Preferences</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>You can control and manage cookies in several ways:</p>
                  <ul className="space-y-1">
                    <li>• Browser settings: Most browsers allow you to refuse or delete cookies</li>
                    <li>• Google Ad Settings: Control personalized ads from Google</li>
                    <li>• Opt-out tools: Use industry opt-out tools for advertising cookies</li>
                  </ul>
                  <p className="mt-3">
                    Please note that disabling certain cookies may affect website functionality 
                    and your user experience.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Types of Data Collected</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• IP address and location information</li>
                  <li>• Browser type and version</li>
                  <li>• Pages visited and time spent on site</li>
                  <li>• Referring website information</li>
                  <li>• Device and screen information</li>
                  <li>• Shopping cart contents and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Cookie Consent</h2>
                <p className="text-muted-foreground">
                  By continuing to use our website, you consent to our use of cookies as described 
                  in this policy. We may display a cookie notice on your first visit to inform you 
                  about our cookie usage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>If you have questions about our cookie policy, contact us:</p>
                  <p><strong>TechHub Naija</strong></p>
                  <p>WhatsApp: +234 816 577 2892</p>
                  <p>Email: hello@techhubnaija.com</p>
                  <p>Location: Victoria Island, Lagos, Nigeria</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this cookie policy from time to time to reflect changes in 
                  technology, legislation, or our business practices. Please check this page 
                  regularly for updates.
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

export default Cookies;