import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
}

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge,
  inStock 
}: ProductCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = async () => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add items to your cart",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    try {
      await addToCart(id);
      toast({
        title: "Added to cart!",
        description: `${name} has been added to your cart`
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
      <Link to={`/product/${id}`} className="block">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {badge && (
                <Badge variant="destructive" className="text-xs">
                  {badge}
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="default" className="bg-success text-white text-xs">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-4 space-y-3">
            <h3 className="font-semibold text-foreground line-clamp-2 text-sm leading-tight">
              {name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">
                ₦{price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₦{originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between">
              <span className={`text-xs font-medium ${inStock ? 'text-success' : 'text-destructive'}`}>
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
      
      <div className="p-4 pt-0">
        <Button 
          size="sm" 
          disabled={!inStock || loading}
          className="w-full"
          onClick={handleAddToCart}
        >
          {loading ? (
            "Adding..."
          ) : (
            <>
              <ShoppingCart className="w-3 h-3 mr-1" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;