import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>TechHub Naija Terms of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using TechHub Naija's website and services, you agree to be bound 
                  by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Products and Services</h2>
                <p className="text-muted-foreground">
                  TechHub Naija is an e-commerce platform specializing in technology products including 
                  laptops, smartphones, computers, cameras, network equipment, musical instruments, 
                  software, and streaming devices. All products are subject to availability.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• You must provide accurate and complete information</li>
                  <li>• You are responsible for maintaining account security</li>
                  <li>• You must be 18+ years old to create an account</li>
                  <li>• One account per person is allowed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Orders and Payment</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All prices are in Nigerian Naira (₦)</li>
                  <li>• Payment is required at time of purchase</li>
                  <li>• We reserve the right to cancel orders for any reason</li>
                  <li>• Bank transfers and mobile payments are accepted</li>
                  <li>• Delivery is available within Lagos and nationwide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Return and Refund Policy</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 7-day return policy for unused items</li>
                  <li>• Items must be in original packaging</li>
                  <li>• Customer pays return shipping costs</li>
                  <li>• Refunds processed within 5-7 business days</li>
                  <li>• Software and digital products are non-returnable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Warranty</h2>
                <p className="text-muted-foreground">
                  New products come with manufacturer warranty. Used and refurbished items have 
                  limited warranty as specified in product descriptions. TechHub Naija facilitates 
                  warranty claims but is not directly responsible for manufacturer warranty terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Prohibited Uses</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fraudulent or unauthorized purchases</li>
                  <li>• Reselling products for commercial purposes</li>
                  <li>• Creating false accounts or reviews</li>
                  <li>• Attempting to hack or disrupt our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  TechHub Naija's liability is limited to the purchase price of products. We are not 
                  responsible for indirect, incidental, or consequential damages arising from product use.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Customer Support</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>For questions or support, contact us:</p>
                  <p>WhatsApp: +234 816 577 2892</p>
                  <p>Email: hello@techhubnaija.com</p>
                  <p>Location: Victoria Island, Lagos, Nigeria</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Continued use of our 
                  services constitutes acceptance of updated terms.
                </p>
              </section>

              <div className="text-center pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Effective Date: January 2025 | © 2025 TechHub Naija. All rights reserved.
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

export default Terms;