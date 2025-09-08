import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/d7f9ae98-f4a1-4d06-a817-8cbc162336ec.png" 
                alt="TechHub Naija Logo" 
                className="w-8 h-8"
              />
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
              <Link to="/?category=laptops">
                <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                  Laptops & Computers
                </Button>
              </Link>
              <Link to="/?category=phones">
                <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                  Smartphones & Tablets  
                </Button>
              </Link>
              <Link to="/?category=cameras">
                <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                  Cameras & Photography
                </Button>
              </Link>
              <Link to="/?category=network">
                <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                  Network Equipment
                </Button>
              </Link>
              <Link to="/?category=accessories">
                <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground">
                  Accessories
                </Button>
              </Link>
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

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact & Support</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 816 577 2892</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@techhubnaija.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Victoria Island, Lagos, Nigeria</span>
              </div>
              <div className="mt-4">
                <a 
                  href="https://wa.me/2348165772892" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                  WhatsApp Support
                </a>
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
            © 2025 TechHub Naija. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy">
              <Button variant="ghost" size="sm" className="h-auto p-0">
                Privacy Policy
              </Button>
            </Link>
            <Link to="/terms">
              <Button variant="ghost" size="sm" className="h-auto p-0">
                Terms of Service
              </Button>
            </Link>
            <Link to="/cookies">
              <Button variant="ghost" size="sm" className="h-auto p-0">
                Cookies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;