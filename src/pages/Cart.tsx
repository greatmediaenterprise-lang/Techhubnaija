import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { allProducts } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, loading, removeFromCart, updateQuantity } = useCart();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-4">Sign in to view your cart</h2>
          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          Loading cart...
        </div>
        <Footer />
      </div>
    );
  }

  const cartProducts = items.map(item => {
    const product = allProducts.find(p => p.id === item.product_id);
    return { ...item, product };
  }).filter(item => item.product);

  const total = cartProducts.reduce((sum, item) => sum + (item.product!.price * item.quantity), 0);

  const handleCheckout = () => {
    toast({
      title: "Coming Soon!",
      description: "Checkout functionality will be available soon. For now, please contact us on WhatsApp: +234 816 577 2892"
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Add some products to get started</p>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <Badge variant="secondary">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={item.product!.image} 
                      alt={item.product!.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        {item.product!.name}
                      </h3>
                      <p className="text-lg font-bold text-primary">
                        ₦{item.product!.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Secure checkout powered by TechHub Naija
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;