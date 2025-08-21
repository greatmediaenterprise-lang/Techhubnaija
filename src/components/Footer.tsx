import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">TechHub Naija</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nigeria's premier destination for authentic tech products. 
              Quality guaranteed, fast delivery, expert support.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shop</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Laptops & Computers
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Smartphones & Tablets  
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Cameras & Photography
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Network Equipment
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Accessories
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Help Center
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Track Your Order
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Return Policy
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Warranty Info
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 802 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@techhubnaija.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Victoria Island, Lagos, Nigeria</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="text-sm" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 TechHub Naija. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Button variant="ghost" size="sm" className="h-auto p-0">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="h-auto p-0">
              Terms of Service
            </Button>
            <Button variant="ghost" size="sm" className="h-auto p-0">
              Cookies
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;