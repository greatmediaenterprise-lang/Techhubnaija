import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Headphones, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import laptopImage from "@/assets/laptop-gaming.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                🔥 New Arrivals - Up to 40% Off
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Tech That 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Powers</span>
                <br />Your Dreams
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover premium laptops, smartphones, cameras, and tech accessories. 
                Fast delivery across Nigeria with authentic products and warranty.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base px-8"
                onClick={() => navigate("/?category=all#products")}
              >
                Shop Now
                <Zap className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8"
                onClick={() => navigate("/?deals=true#products")}
              >
                View Deals
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">Lagos & Abuja</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">2 Year Warranty</p>
                  <p className="text-xs text-muted-foreground">All products</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">Expert help</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-tech-orange/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-tech-orange" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Fast Setup</p>
                  <p className="text-xs text-muted-foreground">Ready to use</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={laptopImage} 
                alt="Premium Gaming Laptop"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-medium z-20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <div>
                  <p className="text-xs font-medium text-foreground">Live</p>
                  <p className="text-xs text-muted-foreground">1,247 shopping now</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-medium z-20">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="text-lg font-bold text-foreground">₦450,000</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl -rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;