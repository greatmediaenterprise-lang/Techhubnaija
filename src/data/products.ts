import laptopImage from "@/assets/laptop-gaming.jpg";
import iphoneImage from "@/assets/iphone-latest.jpg";
import cameraImage from "@/assets/camera-dslr.jpg";
import routerImage from "@/assets/router-wireless.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "HP Pavilion Gaming Laptop 15.6\" - Intel Core i7, 16GB RAM, 512GB SSD, RTX 3060",
    price: 850000,
    originalPrice: 1200000,
    image: laptopImage,
    rating: 4.5,
    reviews: 234,
    badge: "Hot Deal",
    inStock: true,
    category: "laptops"
  },
  {
    id: "2", 
    name: "iPhone 15 Pro Max 256GB - Natural Titanium, 48MP Camera, A17 Pro Chip",
    price: 1450000,
    image: iphoneImage,
    rating: 4.8,
    reviews: 567,
    badge: "New",
    inStock: true,
    category: "phones"
  },
  {
    id: "3",
    name: "Canon EOS R6 Mark II Mirrorless Camera with 24-105mm Lens - Professional Photography",
    price: 2100000,
    originalPrice: 2500000,
    image: cameraImage,
    rating: 4.7,
    reviews: 89,
    inStock: true,
    category: "cameras"
  },
  {
    id: "4",
    name: "TP-Link Archer AX6000 WiFi 6 Router - Dual Band Gigabit Wireless Internet Router",
    price: 75000,
    originalPrice: 95000,
    image: routerImage,
    rating: 4.3,
    reviews: 156,
    badge: "Best Seller",
    inStock: true,
    category: "network"
  },
  {
    id: "5",
    name: "Dell XPS 13 Plus Laptop 13.4\" - Intel Core i5, 8GB RAM, 256GB SSD, Windows 11",
    price: 650000,
    image: laptopImage,
    rating: 4.4,
    reviews: 198,
    inStock: true,
    category: "laptops"
  },
  {
    id: "6",
    name: "Samsung Galaxy S24 Ultra 512GB - Phantom Black, 200MP Camera, S Pen Included",
    price: 1250000,
    originalPrice: 1400000,
    image: iphoneImage,
    rating: 4.6,
    reviews: 423,
    badge: "Limited",
    inStock: false,
    category: "phones"
  },
  {
    id: "7",
    name: "Sony Alpha A7 IV Full-Frame Mirrorless Camera Body - 33MP, 4K Video Recording",
    price: 1800000,
    image: cameraImage,
    rating: 4.8,
    reviews: 67,
    badge: "Pro Choice",
    inStock: true,
    category: "cameras"
  },
  {
    id: "8",
    name: "ASUS ROG Strix WiFi 6E Gaming Router - AX11000 Tri-Band with Mobile Game Mode",
    price: 120000,
    image: routerImage,
    rating: 4.5,
    reviews: 92,
    inStock: true,
    category: "network"
  }
];

export const categories = [
  { id: "laptops", name: "Laptops", count: products.filter(p => p.category === "laptops").length },
  { id: "phones", name: "Smartphones", count: products.filter(p => p.category === "phones").length },
  { id: "cameras", name: "Cameras", count: products.filter(p => p.category === "cameras").length },
  { id: "network", name: "Network Equipment", count: products.filter(p => p.category === "network").length },
];