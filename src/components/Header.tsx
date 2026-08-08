import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const CATEGORY_LINKS = [
  { id: "laptops", label: "Laptops" },
  { id: "phones", label: "Phones" },
  { id: "computers", label: "Computers" },
  { id: "network", label: "Network Equipment" },
  { id: "cameras", label: "Cameras" },
];

const Header = () => {
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}#products`);
      setMenuOpen(false);
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category}#products`);
    setMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/d7f9ae98-f4a1-4d06-a817-8cbc162336ec.png" 
              alt="TechHub Naija Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-foreground">TechHub Naija</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search for laptops, phones, cameras..." 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Button variant="ghost" size="sm" onClick={signOut} className="hidden md:flex">
                  <User className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
                <Link to="/cart">
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                    {totalItems > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 px-1 min-w-[20px] h-5">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" size="sm" className="hidden md:flex">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button variant="ghost" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                  </Button>
                </Link>
              </>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-1">
            {CATEGORY_LINKS.map((c) => (
              <Button
                key={c.id}
                variant="ghost"
                size="sm"
                className="justify-start text-muted-foreground hover:text-foreground"
                onClick={() => handleCategoryClick(c.id)}
              >
                {c.label}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="justify-start text-success hover:text-success/80"
              onClick={() => {
                navigate("/?deals=true#products");
                setMenuOpen(false);
              }}
            >
              Deals
            </Button>
            <div className="border-t border-border mt-2 pt-2">
              {user ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    signOut();
                    setMenuOpen(false);
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Link to="/auth" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        )}

        {/* Categories Navigation */}
        <nav className="hidden md:flex items-center gap-6 mt-4 pt-4 border-t border-border">
          {CATEGORY_LINKS.map((c) => (
            <Button
              key={c.id}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => handleCategoryClick(c.id)}
            >
              {c.label}
            </Button>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-success hover:text-success/80"
            onClick={() => navigate("/?deals=true#products")}
          >
            Deals
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;