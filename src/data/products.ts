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
  description?: string;
  brand?: string;
  specifications?: string[];
}

export const products: Product[] = [
  // BUDGET LAPTOPS (150k-400k)
  {
    id: "1",
    name: "HP Laptop 15.6\" - Intel Celeron, 4GB RAM, 500GB HDD (Used)",
    price: 150000,
    originalPrice: 200000,
    image: laptopImage,
    rating: 3.8,
    reviews: 45,
    badge: "Used Deal",
    inStock: true,
    category: "laptops"
  },
  {
    id: "2",
    name: "Dell Inspiron 15 3000 - Intel Pentium, 4GB RAM, 1TB HDD (Refurbished)",
    price: 180000,
    originalPrice: 250000,
    image: laptopImage,
    rating: 4.0,
    reviews: 67,
    badge: "Refurbished",
    inStock: true,
    category: "laptops"
  },
  {
    id: "3",
    name: "Lenovo IdeaPad 1 14\" - AMD A6, 4GB RAM, 64GB eMMC (New)",
    price: 220000,
    image: laptopImage,
    rating: 4.2,
    reviews: 89,
    badge: "New",
    inStock: true,
    category: "laptops"
  },
  {
    id: "4",
    name: "ASUS VivoBook 15.6\" - Intel Celeron N4020, 4GB RAM, 128GB SSD (New)",
    price: 280000,
    image: laptopImage,
    rating: 4.1,
    reviews: 123,
    inStock: true,
    category: "laptops"
  },
  {
    id: "5",
    name: "Acer Aspire 5 15.6\" - AMD Ryzen 3, 8GB RAM, 256GB SSD (New)",
    price: 350000,
    originalPrice: 420000,
    image: laptopImage,
    rating: 4.3,
    reviews: 156,
    badge: "Hot Deal",
    inStock: true,
    category: "laptops"
  },

  // GAMING & HIGH-END LAPTOPS
  {
    id: "6",
    name: "HP Pavilion Gaming 15.6\" - Intel Core i7, 16GB RAM, 512GB SSD, RTX 3060",
    price: 850000,
    originalPrice: 1200000,
    image: laptopImage,
    rating: 4.5,
    reviews: 234,
    badge: "Gaming Beast",
    inStock: true,
    category: "laptops"
  },
  {
    id: "7",
    name: "Dell XPS 13 Plus 13.4\" - Intel Core i5, 8GB RAM, 256GB SSD, Windows 11",
    price: 650000,
    image: laptopImage,
    rating: 4.4,
    reviews: 198,
    inStock: true,
    category: "laptops"
  },
  {
    id: "8",
    name: "MacBook Air M2 13.6\" - 8GB RAM, 256GB SSD, Space Gray",
    price: 1450000,
    image: laptopImage,
    rating: 4.8,
    reviews: 345,
    badge: "Premium",
    inStock: true,
    category: "laptops"
  },

  // SMARTPHONES
  {
    id: "9", 
    name: "iPhone 15 Pro Max 256GB - Natural Titanium, 48MP Camera, A17 Pro Chip",
    price: 1450000,
    image: iphoneImage,
    rating: 4.8,
    reviews: 567,
    badge: "Latest",
    inStock: true,
    category: "phones"
  },
  {
    id: "10",
    name: "Samsung Galaxy S24 Ultra 512GB - Phantom Black, 200MP Camera, S Pen",
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
    id: "11",
    name: "iPhone 13 128GB - Blue, Dual Camera (Used - Excellent)",
    price: 450000,
    originalPrice: 600000,
    image: iphoneImage,
    rating: 4.5,
    reviews: 234,
    badge: "Used Deal",
    inStock: true,
    category: "phones"
  },
  {
    id: "12",
    name: "Google Pixel 8 Pro 256GB - Obsidian, Magic Eraser, AI Photography",
    price: 780000,
    image: iphoneImage,
    rating: 4.7,
    reviews: 178,
    badge: "AI Camera",
    inStock: true,
    category: "phones"
  },

  // DESKTOP COMPUTERS
  {
    id: "13",
    name: "HP Pavilion Desktop - Intel i5, 8GB RAM, 1TB HDD, Windows 11",
    price: 420000,
    image: laptopImage,
    rating: 4.2,
    reviews: 89,
    inStock: true,
    category: "computers"
  },
  {
    id: "14",
    name: "Dell OptiPlex 7090 SFF - Intel i7, 16GB RAM, 512GB SSD (Business)",
    price: 680000,
    image: laptopImage,
    rating: 4.6,
    reviews: 67,
    badge: "Business",
    inStock: true,
    category: "computers"
  },
  {
    id: "15",
    name: "Custom Gaming PC - AMD Ryzen 7, RTX 4070, 32GB RAM, 1TB NVMe",
    price: 1800000,
    image: laptopImage,
    rating: 4.9,
    reviews: 23,
    badge: "Custom Built",
    inStock: true,
    category: "computers"
  },

  // CAMERAS & CAMCORDERS
  {
    id: "16",
    name: "Canon EOS R6 Mark II Mirrorless - 24-105mm Lens, Professional Photography",
    price: 2100000,
    originalPrice: 2500000,
    image: cameraImage,
    rating: 4.7,
    reviews: 89,
    badge: "Pro Choice",
    inStock: true,
    category: "cameras"
  },
  {
    id: "17",
    name: "Sony Alpha A7 IV Full-Frame - 33MP, 4K Video Recording",
    price: 1800000,
    image: cameraImage,
    rating: 4.8,
    reviews: 67,
    badge: "4K Video",
    inStock: true,
    category: "cameras"
  },
  {
    id: "18",
    name: "Canon VIXIA HF R800 Camcorder - Full HD, 57x Advanced Zoom",
    price: 280000,
    image: cameraImage,
    rating: 4.3,
    reviews: 145,
    inStock: true,
    category: "cameras"
  },
  {
    id: "19",
    name: "Sony FX30 Cinema Camera - 4K 120p, S-Cinetone, Professional",
    price: 3200000,
    image: cameraImage,
    rating: 4.9,
    reviews: 34,
    badge: "Cinema Pro",
    inStock: true,
    category: "cameras"
  },

  // LIVE STREAMING DEVICES
  {
    id: "20",
    name: "Elgato Stream Deck MK.2 - 15 LCD Keys, Live Content Creator",
    price: 180000,
    image: laptopImage,
    rating: 4.6,
    reviews: 234,
    badge: "Streamer Pick",
    inStock: true,
    category: "streaming"
  },
  {
    id: "21",
    name: "ATEM Mini Pro ISO - 4 HDMI Live Production Switcher",
    price: 650000,
    image: laptopImage,
    rating: 4.8,
    reviews: 78,
    badge: "Pro Streaming",
    inStock: true,
    category: "streaming"
  },
  {
    id: "22",
    name: "Rode PodMic USB - Broadcast Quality Dynamic Microphone",
    price: 320000,
    image: laptopImage,
    rating: 4.7,
    reviews: 156,
    inStock: true,
    category: "streaming"
  },

  // MUSICAL INSTRUMENTS
  {
    id: "23",
    name: "Yamaha PSR-E373 Keyboard - 61 Keys, Touch Response, 622 Voices",
    price: 95000,
    image: laptopImage,
    rating: 4.5,
    reviews: 89,
    badge: "Beginner",
    inStock: true,
    category: "music"
  },
  {
    id: "24",
    name: "Roland FP-30X Digital Piano - 88 Weighted Keys, Bluetooth",
    price: 450000,
    image: laptopImage,
    rating: 4.8,
    reviews: 67,
    badge: "Professional",
    inStock: true,
    category: "music"
  },
  {
    id: "25",
    name: "Focusrite Scarlett 2i2 - USB Audio Interface, Studio Recording",
    price: 85000,
    image: laptopImage,
    rating: 4.6,
    reviews: 234,
    inStock: true,
    category: "music"
  },

  // KONTAKT PLUGINS & SOFTWARE
  {
    id: "26",
    name: "Native Instruments Komplete 14 Standard - Music Production Suite",
    price: 280000,
    image: laptopImage,
    rating: 4.9,
    reviews: 45,
    badge: "Software",
    inStock: true,
    category: "software"
  },
  {
    id: "27",
    name: "Ableton Live 11 Suite - Digital Audio Workstation (DAW)",
    price: 320000,
    image: laptopImage,
    rating: 4.8,
    reviews: 78,
    badge: "Producer Choice",
    inStock: true,
    category: "software"
  },

  // NETWORK EQUIPMENT
  {
    id: "28",
    name: "TP-Link Archer AX6000 WiFi 6 Router - Dual Band Gigabit",
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
    id: "29",
    name: "ASUS ROG Strix WiFi 6E Gaming Router - AX11000 Tri-Band",
    price: 120000,
    image: routerImage,
    rating: 4.5,
    reviews: 92,
    badge: "Gaming",
    inStock: true,
    category: "network"
  },
  {
    id: "30",
    name: "Netgear Nighthawk Pro Gaming XR500 - Anti-Lag Gaming Router",
    price: 95000,
    image: routerImage,
    rating: 4.4,
    reviews: 123,
    inStock: true,
    category: "network"
  }
];

export const categories = [
  { id: "laptops", name: "Laptops", count: products.filter(p => p.category === "laptops").length },
  { id: "phones", name: "Smartphones", count: products.filter(p => p.category === "phones").length },
  { id: "computers", name: "Desktop PCs", count: products.filter(p => p.category === "computers").length },
  { id: "cameras", name: "Cameras", count: products.filter(p => p.category === "cameras").length },
  { id: "streaming", name: "Live Streaming", count: products.filter(p => p.category === "streaming").length },
  { id: "music", name: "Musical Instruments", count: products.filter(p => p.category === "music").length },
  { id: "software", name: "Software & Plugins", count: products.filter(p => p.category === "software").length },
  { id: "network", name: "Network Equipment", count: products.filter(p => p.category === "network").length },
];