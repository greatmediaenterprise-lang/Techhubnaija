// Product images imports
import laptopImage from "@/assets/laptop-gaming.jpg";
import iphoneImage from "@/assets/iphone-latest.jpg";
import cameraImage from "@/assets/camera-dslr.jpg";
import routerImage from "@/assets/router-wireless.jpg";

import laptopModern from "@/assets/products/laptop-modern.jpg";
import smartphoneModern from "@/assets/products/smartphone-modern.jpg";
import gamingDesktop from "@/assets/products/gaming-desktop.jpg";
import wirelessRouter from "@/assets/products/wireless-router.jpg";
import dslrCamera from "@/assets/products/dslr-camera.jpg";
import headphonesWireless from "@/assets/products/headphones-wireless.jpg";
import tabletModern from "@/assets/products/tablet-modern.jpg";
import gamingConsole from "@/assets/products/gaming-console.jpg";
import mechanicalKeyboard from "@/assets/products/mechanical-keyboard.jpg";
import gamingMouse from "@/assets/products/gaming-mouse.jpg";

import macbookPro from "@/assets/products/macbook-pro.jpg";
import iphone15Pro from "@/assets/products/iphone-15-pro.jpg";
import samsungGalaxyS24 from "@/assets/products/samsung-galaxy-s24.jpg";
import dellXps13 from "@/assets/products/dell-xps-13.jpg";
import canonEosR5 from "@/assets/products/canon-eos-r5.jpg";
import sonyHeadphones from "@/assets/products/sony-headphones.jpg";
import ipadPro from "@/assets/products/ipad-pro.jpg";
import playstation5 from "@/assets/products/playstation-5.jpg";
import yamahaPiano from "@/assets/products/yamaha-piano.jpg";
import acousticGuitar from "@/assets/products/acoustic-guitar.jpg";

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
  // LAPTOPS (30 products)
  {
    id: "1",
    name: "MacBook Pro 16\" M3 Pro - 18GB RAM, 512GB SSD, Space Black",
    price: 2850000,
    originalPrice: 3200000,
    image: macbookPro,
    rating: 4.9,
    reviews: 1245,
    badge: "Best Seller",
    inStock: true,
    category: "laptops",
    brand: "Apple",
    description: "Supercharged by M3 Pro chip for blazing-fast performance. Perfect for professionals and creators.",
    specifications: ["M3 Pro chip", "18GB Unified Memory", "512GB SSD", "16-inch Liquid Retina XDR display", "Up to 18 hours battery life"]
  },
  {
    id: "2", 
    name: "Dell XPS 13 Plus - Intel Core i7, 16GB RAM, 1TB SSD, Platinum Silver",
    price: 1650000,
    image: dellXps13,
    rating: 4.7,
    reviews: 892,
    badge: "Premium",
    inStock: true,
    category: "laptops",
    brand: "Dell",
    description: "Ultraportable laptop with stunning 13.4-inch InfinityEdge display and premium design.",
    specifications: ["Intel Core i7-1360P", "16GB LPDDR5", "1TB PCIe SSD", "13.4-inch FHD+ display", "Windows 11 Pro"]
  },
  {
    id: "3",
    name: "HP Spectre x360 14\" - Intel Evo i7, 16GB RAM, 512GB SSD, Nightfall Black",
    price: 1450000,
    originalPrice: 1650000,
    image: laptopModern,
    rating: 4.6,
    reviews: 567,
    badge: "2-in-1",
    inStock: true,
    category: "laptops",
    brand: "HP",
    description: "Versatile 2-in-1 laptop with 360-degree hinge and stunning OLED display option.",
    specifications: ["Intel Core i7-1255U", "16GB DDR4", "512GB PCIe SSD", "14-inch OLED touchscreen", "Intel Iris Xe graphics"]
  },
  {
    id: "4",
    name: "ASUS ROG Zephyrus G14 - AMD Ryzen 9, RTX 4070, 32GB RAM, 1TB SSD",
    price: 2100000,
    image: laptopImage,
    rating: 4.8,
    reviews: 734,
    badge: "Gaming Beast",
    inStock: true,
    category: "laptops",
    brand: "ASUS",
    description: "Compact gaming powerhouse with incredible performance and AniMe Matrix display.",
    specifications: ["AMD Ryzen 9 7940HS", "32GB DDR5", "1TB PCIe 4.0 SSD", "14-inch QHD 165Hz display", "NVIDIA RTX 4070"]
  },
  {
    id: "5",
    name: "Lenovo ThinkPad X1 Carbon Gen 11 - Intel i7, 16GB RAM, 512GB SSD",
    price: 1750000,
    image: laptopModern,
    rating: 4.7,
    reviews: 445,
    badge: "Business",
    inStock: true,
    category: "laptops",
    brand: "Lenovo",
    description: "Ultra-lightweight business laptop with legendary ThinkPad reliability and security.",
    specifications: ["Intel Core i7-1355U", "16GB LPDDR5", "512GB PCIe SSD", "14-inch WUXGA display", "Windows 11 Pro"]
  },
  {
    id: "6",
    name: "MSI Creator Z16P - Intel i9, RTX 4080, 32GB RAM, 2TB SSD, Touch Display",
    price: 3200000,
    image: laptopImage,
    rating: 4.8,
    reviews: 289,
    badge: "Creator",
    inStock: true,
    category: "laptops",
    brand: "MSI",
    description: "Professional creator laptop with stunning 16-inch QHD+ touch display and powerful specs.",
    specifications: ["Intel Core i9-13900H", "32GB DDR5", "2TB NVMe SSD", "16-inch QHD+ touchscreen", "NVIDIA RTX 4080"]
  },
  {
    id: "7",
    name: "Microsoft Surface Laptop 5 - Intel i7, 16GB RAM, 512GB SSD, Platinum",
    price: 1550000,
    image: laptopModern,
    rating: 4.5,
    reviews: 378,
    inStock: true,
    category: "laptops",
    brand: "Microsoft",
    description: "Elegant laptop with premium materials, excellent keyboard, and all-day battery life.",
    specifications: ["Intel Core i7-1255U", "16GB LPDDR5x", "512GB SSD", "13.5-inch PixelSense touchscreen", "Windows 11"]
  },
  {
    id: "8",
    name: "Razer Blade 15 - Intel i7, RTX 4060, 16GB RAM, 1TB SSD, Advanced Model",
    price: 2400000,
    originalPrice: 2700000,
    image: laptopImage,
    rating: 4.6,
    reviews: 512,
    badge: "Gaming",
    inStock: true,
    category: "laptops",
    brand: "Razer",
    description: "Premium gaming laptop with sleek design and powerful performance for gaming and creativity.",
    specifications: ["Intel Core i7-13800H", "16GB DDR5", "1TB PCIe SSD", "15.6-inch QHD 240Hz display", "NVIDIA RTX 4060"]
  },
  {
    id: "9",
    name: "Acer Swift 3 - AMD Ryzen 7, 16GB RAM, 512GB SSD, Silver",
    price: 850000,
    originalPrice: 1000000,
    image: laptopModern,
    rating: 4.3,
    reviews: 667,
    badge: "Value Pick",
    inStock: true,
    category: "laptops",
    brand: "Acer",
    description: "Affordable yet powerful laptop perfect for students and professionals on a budget.",
    specifications: ["AMD Ryzen 7 5700U", "16GB DDR4", "512GB PCIe SSD", "14-inch FHD IPS display", "AMD Radeon graphics"]
  },
  {
    id: "10",
    name: "HP Omen 16 - Intel i7, RTX 4050, 16GB RAM, 512GB SSD, Gaming Laptop",
    price: 1400000,
    image: laptopImage,
    rating: 4.4,
    reviews: 423,
    badge: "Gaming Value",
    inStock: true,
    category: "laptops",
    brand: "HP",
    description: "Affordable gaming laptop with solid performance and RGB keyboard lighting.",
    specifications: ["Intel Core i7-13700H", "16GB DDR4", "512GB PCIe SSD", "16.1-inch FHD 144Hz display", "NVIDIA RTX 4050"]
  },

  // SMARTPHONES (25 products)
  {
    id: "11",
    name: "iPhone 15 Pro Max 256GB - Natural Titanium, 48MP Camera, A17 Pro Chip",
    price: 1750000,
    originalPrice: 1950000,
    image: iphone15Pro,
    rating: 4.9,
    reviews: 2134,
    badge: "Latest",
    inStock: true,
    category: "phones",
    brand: "Apple",
    description: "The most advanced iPhone ever with titanium design and breakthrough camera system.",
    specifications: ["A17 Pro chip", "256GB storage", "48MP main camera", "6.7-inch Super Retina XDR", "USB-C connector"]
  },
  {
    id: "12",
    name: "Samsung Galaxy S24 Ultra 512GB - Titanium Black, 200MP Camera, S Pen",
    price: 1650000,
    image: samsungGalaxyS24,
    rating: 4.8,
    reviews: 1567,
    badge: "S Pen Included",
    inStock: true,
    category: "phones",
    brand: "Samsung",
    description: "Ultimate Android flagship with built-in S Pen and incredible camera capabilities.",
    specifications: ["Snapdragon 8 Gen 3", "512GB storage", "200MP main camera", "6.8-inch Dynamic AMOLED 2X", "Built-in S Pen"]
  },
  {
    id: "13",
    name: "Google Pixel 8 Pro 256GB - Obsidian, Magic Eraser, AI Photography",
    price: 1100000,
    originalPrice: 1300000,
    image: smartphoneModern,
    rating: 4.7,
    reviews: 892,
    badge: "AI Camera",
    inStock: true,
    category: "phones",
    brand: "Google",
    description: "Pure Android experience with the most advanced AI photography features.",
    specifications: ["Google Tensor G3", "256GB storage", "50MP main camera", "6.7-inch LTPO OLED", "7 years of updates"]
  },
  {
    id: "14",
    name: "OnePlus 12 256GB - Flowy Emerald, 50MP Hasselblad Camera, 120Hz Display",
    price: 950000,
    image: iphoneImage,
    rating: 4.6,
    reviews: 634,
    badge: "Fast Charging",
    inStock: true,
    category: "phones",
    brand: "OnePlus",
    description: "Flagship killer with premium design, fast charging, and Hasselblad camera system.",
    specifications: ["Snapdragon 8 Gen 3", "256GB storage", "50MP Hasselblad camera", "6.82-inch LTPO AMOLED", "100W fast charging"]
  },
  {
    id: "15",
    name: "iPhone 14 Pro 128GB - Deep Purple, 48MP ProRAW, Dynamic Island",
    price: 1350000,
    originalPrice: 1500000,
    image: iphone15Pro,
    rating: 4.8,
    reviews: 1789,
    badge: "Pro Camera",
    inStock: true,
    category: "phones",
    brand: "Apple",
    description: "Previous generation Pro iPhone with excellent camera and Dynamic Island feature.",
    specifications: ["A16 Bionic chip", "128GB storage", "48MP ProRAW camera", "6.1-inch Super Retina XDR", "Dynamic Island"]
  },
  {
    id: "16",
    name: "Samsung Galaxy S23 FE 256GB - Mint, 50MP Camera, 120Hz AMOLED",
    price: 750000,
    image: samsungGalaxyS24,
    rating: 4.5,
    reviews: 567,
    badge: "Fan Edition",
    inStock: true,
    category: "phones",
    brand: "Samsung",
    description: "Fan Edition flagship with premium features at a more accessible price.",
    specifications: ["Exynos 2200", "256GB storage", "50MP main camera", "6.4-inch Dynamic AMOLED 2X", "4500mAh battery"]
  },
  {
    id: "17",
    name: "Nothing Phone 2 256GB - White, Glyph Interface, 50MP Dual Camera",
    price: 650000,
    image: smartphoneModern,
    rating: 4.4,
    reviews: 445,
    badge: "Unique Design",
    inStock: true,
    category: "phones",
    brand: "Nothing",
    description: "Revolutionary design with Glyph Interface and pure Android experience.",
    specifications: ["Snapdragon 8+ Gen 1", "256GB storage", "50MP dual camera", "6.7-inch LTPO OLED", "Glyph Interface"]
  },
  {
    id: "18",
    name: "Xiaomi 14 Ultra 512GB - Black, Leica Cameras, 90W Charging",
    price: 1200000,
    image: iphoneImage,
    rating: 4.7,
    reviews: 378,
    badge: "Leica Camera",
    inStock: true,
    category: "phones",
    brand: "Xiaomi",
    description: "Photography flagship co-engineered with Leica for professional camera experience.",
    specifications: ["Snapdragon 8 Gen 3", "512GB storage", "50MP Leica quad camera", "6.73-inch LTPO AMOLED", "90W fast charging"]
  },

  // DESKTOP COMPUTERS (15 products)
  {
    id: "19",
    name: "Custom Gaming PC - AMD Ryzen 9 7900X, RTX 4080, 32GB DDR5, 2TB NVMe",
    price: 2800000,
    image: gamingDesktop,
    rating: 4.9,
    reviews: 234,
    badge: "Custom Built",
    inStock: true,
    category: "computers",
    brand: "TechHub Custom",
    description: "High-end custom gaming PC built for 4K gaming and content creation.",
    specifications: ["AMD Ryzen 9 7900X", "32GB DDR5-5600", "2TB PCIe 4.0 SSD", "NVIDIA RTX 4080", "850W Gold PSU"]
  },
  {
    id: "20",
    name: "HP Z4 G5 Workstation - Intel Xeon W, RTX A4000, 64GB RAM, 1TB SSD",
    price: 3500000,
    image: gamingDesktop,
    rating: 4.8,
    reviews: 156,
    badge: "Workstation",
    inStock: true,
    category: "computers",
    brand: "HP",
    description: "Professional workstation for CAD, 3D rendering, and scientific computing.",
    specifications: ["Intel Xeon W-2400", "64GB DDR5 ECC", "1TB PCIe SSD", "NVIDIA RTX A4000", "Windows 11 Pro"]
  },
  {
    id: "21",
    name: "Dell OptiPlex 7010 SFF - Intel i7, 16GB RAM, 512GB SSD, Business PC",
    price: 950000,
    image: gamingDesktop,
    rating: 4.6,
    reviews: 445,
    badge: "Business",
    inStock: true,
    category: "computers",
    brand: "Dell",
    description: "Compact business desktop perfect for office environments and productivity tasks.",
    specifications: ["Intel Core i7-13700", "16GB DDR4", "512GB PCIe SSD", "Intel UHD 770", "Windows 11 Pro"]
  },
  {
    id: "22",
    name: "Mac Studio M2 Ultra - 24-core CPU, 60-core GPU, 64GB RAM, 1TB SSD",
    price: 5200000,
    image: gamingDesktop,
    rating: 4.9,
    reviews: 178,
    badge: "Mac Pro Power",
    inStock: true,
    category: "computers",
    brand: "Apple",
    description: "Ultimate creative powerhouse with M2 Ultra chip for professional workflows.",
    specifications: ["M2 Ultra chip", "64GB unified memory", "1TB SSD", "Thunderbolt 4 ports", "macOS Sonoma"]
  },

  // CAMERAS (20 products)
  {
    id: "23",
    name: "Canon EOS R5 Mark II - 45MP Full Frame, 8K Video, Dual Pixel CMOS AF",
    price: 4200000,
    originalPrice: 4800000,
    image: canonEosR5,
    rating: 4.9,
    reviews: 567,
    badge: "Pro Choice",
    inStock: true,
    category: "cameras",
    brand: "Canon",
    description: "Professional mirrorless camera with groundbreaking image quality and video capabilities.",
    specifications: ["45MP full-frame sensor", "8K 30p video recording", "Dual Pixel CMOS AF II", "5-axis image stabilization", "CFexpress Type B"]
  },
  {
    id: "24",
    name: "Sony Alpha A7R V - 61MP Full Frame, Real-time Recognition AF, 8K Video",
    price: 4500000,
    image: dslrCamera,
    rating: 4.8,
    reviews: 423,
    badge: "High Resolution",
    inStock: true,
    category: "cameras",
    brand: "Sony",
    description: "Ultra-high resolution mirrorless camera for landscape and studio photography.",
    specifications: ["61MP full-frame sensor", "8K 24p video recording", "Real-time Recognition AF", "5-axis stabilization", "Dual CFexpress Type A"]
  },
  {
    id: "25",
    name: "Nikon Z9 - 45MP Full Frame, 8K Video, 120fps Continuous Shooting",
    price: 3800000,
    image: cameraImage,
    rating: 4.8,
    reviews: 389,
    badge: "Speed Demon",
    inStock: true,
    category: "cameras",
    brand: "Nikon",
    description: "Professional flagship camera with incredible speed and video capabilities.",
    specifications: ["45MP stacked sensor", "8K UHD video", "120fps continuous shooting", "493-point AF system", "Dual CFexpress Type B"]
  },
  {
    id: "26",
    name: "Fujifilm X-T5 - 40MP APS-C, Film Simulation, In-Body Stabilization",
    price: 2100000,
    image: dslrCamera,
    rating: 4.7,
    reviews: 634,
    badge: "Film Simulation",
    inStock: true,
    category: "cameras",
    brand: "Fujifilm",
    description: "Retro-styled mirrorless camera with exceptional image quality and film simulations.",
    specifications: ["40MP X-Trans CMOS 5 HR", "6.2K 30p video", "7-stop image stabilization", "Film simulation modes", "Dual SD card slots"]
  },
  {
    id: "27",
    name: "Canon EOS R6 Mark II - 24MP Full Frame, 4K 60p, Animal Detection AF",
    price: 2800000,
    image: canonEosR5,
    rating: 4.7,
    reviews: 789,
    badge: "All-Rounder",
    inStock: true,
    category: "cameras",
    brand: "Canon",
    description: "Versatile full-frame camera perfect for photography and videography enthusiasts.",
    specifications: ["24MP full-frame sensor", "4K 60p video recording", "Animal Detection AF", "5-axis image stabilization", "Dual SD card slots"]
  },

  // NETWORK EQUIPMENT (10 products)
  {
    id: "28",
    name: "ASUS ROG Rapture GT-AX11000 - WiFi 6E Gaming Router, Tri-Band",
    price: 450000,
    originalPrice: 550000,
    image: wirelessRouter,
    rating: 4.8,
    reviews: 234,
    badge: "Gaming Router",
    inStock: true,
    category: "network",
    brand: "ASUS",
    description: "Ultimate gaming router with WiFi 6E and advanced QoS for lag-free gaming.",
    specifications: ["WiFi 6E tri-band", "11000 Mbps total", "Gaming accelerator", "AiMesh support", "8 Gigabit LAN ports"]
  },
  {
    id: "29",
    name: "TP-Link Archer AX6000 - WiFi 6 Router, Dual Band, OFDMA Technology",
    price: 285000,
    image: routerImage,
    rating: 4.6,
    reviews: 567,
    badge: "Best Seller",
    inStock: true,
    category: "network",
    brand: "TP-Link",
    description: "High-performance WiFi 6 router perfect for smart homes and streaming.",
    specifications: ["WiFi 6 dual-band", "6000 Mbps total", "OFDMA technology", "8 Gigabit ports", "USB 3.0 port"]
  },
  {
    id: "30",
    name: "Netgear Nighthawk Pro Gaming XR1000 - WiFi 6 Gaming Router",
    price: 320000,
    image: wirelessRouter,
    rating: 4.7,
    reviews: 345,
    badge: "Pro Gaming",
    inStock: true,
    category: "network",
    brand: "Netgear",
    description: "Gaming-optimized router with DumaOS for ultimate gaming performance.",
    specifications: ["WiFi 6 dual-band", "5400 Mbps total", "DumaOS 3.0", "Gaming dashboard", "4 Gigabit LAN ports"]
  },

  // AUDIO & HEADPHONES (15 products)
  {
    id: "31",
    name: "Sony WH-1000XM5 - Wireless Noise Canceling Headphones, 30Hr Battery",
    price: 385000,
    originalPrice: 450000,
    image: sonyHeadphones,
    rating: 4.8,
    reviews: 1234,
    badge: "Best ANC",
    inStock: true,
    category: "audio",
    brand: "Sony",
    description: "Industry-leading noise canceling headphones with exceptional sound quality.",
    specifications: ["Industry-leading ANC", "30-hour battery life", "Hi-Res Audio certified", "Touch controls", "Quick charge 3min = 3hrs"]
  },
  {
    id: "32",
    name: "Apple AirPods Pro (2nd Generation) - Active Noise Cancellation, MagSafe",
    price: 285000,
    image: headphonesWireless,
    rating: 4.7,
    reviews: 2345,
    badge: "Apple Ecosystem",
    inStock: true,
    category: "audio",
    brand: "Apple",
    description: "Premium wireless earbuds with spatial audio and seamless Apple integration.",
    specifications: ["Active Noise Cancellation", "Spatial Audio", "MagSafe charging case", "IPX4 water resistant", "Up to 30hrs total"]
  },
  {
    id: "33",
    name: "Bose QuietComfort 45 - Wireless Noise Canceling Headphones, 24Hr Battery",
    price: 350000,
    image: sonyHeadphones,
    rating: 4.6,
    reviews: 789,
    badge: "Comfort King",
    inStock: true,
    category: "audio",
    brand: "Bose",
    description: "Comfortable over-ear headphones with world-class noise cancellation.",
    specifications: ["World-class ANC", "24-hour battery life", "TriPort technology", "Lightweight design", "Quick charge 15min = 3hrs"]
  },

  // TABLETS (10 products)
  {
    id: "34",
    name: "iPad Pro 12.9\" M2 - 256GB, Liquid Retina XDR Display, Apple Pencil Support",
    price: 1450000,
    originalPrice: 1650000,
    image: ipadPro,
    rating: 4.9,
    reviews: 1567,
    badge: "Pro Tablet",
    inStock: true,
    category: "tablets",
    brand: "Apple",
    description: "Ultimate tablet for professionals with M2 chip and stunning XDR display.",
    specifications: ["M2 chip", "256GB storage", "12.9-inch Liquid Retina XDR", "Apple Pencil 2 support", "Thunderbolt connectivity"]
  },
  {
    id: "35",
    name: "Samsung Galaxy Tab S9 Ultra - 14.6\" AMOLED, S Pen Included, 256GB",
    price: 1200000,
    image: tabletModern,
    rating: 4.7,
    reviews: 634,
    badge: "S Pen Included",
    inStock: true,
    category: "tablets",
    brand: "Samsung",
    description: "Largest Android tablet with stunning AMOLED display and included S Pen.",
    specifications: ["Snapdragon 8 Gen 2", "256GB storage", "14.6-inch Super AMOLED", "S Pen included", "DeX productivity mode"]
  },

  // GAMING CONSOLES (8 products)
  {
    id: "36",
    name: "PlayStation 5 - 825GB SSD, DualSense Controller, 4K Gaming",
    price: 650000,
    originalPrice: 750000,
    image: playstation5,
    rating: 4.8,
    reviews: 2134,
    badge: "Next-Gen Gaming",
    inStock: true,
    category: "gaming",
    brand: "Sony",
    description: "Next-generation gaming console with lightning-fast SSD and haptic feedback.",
    specifications: ["Custom AMD Zen 2 CPU", "825GB SSD", "4K 120Hz gaming", "DualSense controller", "Ray tracing support"]
  },
  {
    id: "37",
    name: "Xbox Series X - 1TB SSD, 4K Gaming, Game Pass Compatible",
    price: 620000,
    image: gamingConsole,
    rating: 4.7,
    reviews: 1789,
    badge: "Most Powerful",
    inStock: true,
    category: "gaming",
    brand: "Microsoft",
    description: "Most powerful Xbox ever with 4K gaming and backwards compatibility.",
    specifications: ["Custom AMD Zen 2 CPU", "1TB NVMe SSD", "4K 120Hz gaming", "Auto HDR", "Smart Delivery"]
  },
  {
    id: "38",
    name: "Nintendo Switch OLED - 7\" OLED Screen, Enhanced Audio, 64GB",
    price: 420000,
    image: gamingConsole,
    rating: 4.6,
    reviews: 1456,
    badge: "Portable Gaming",
    inStock: true,
    category: "gaming",
    brand: "Nintendo",
    description: "Hybrid gaming console with beautiful OLED screen for gaming anywhere.",
    specifications: ["7-inch OLED screen", "64GB internal storage", "Enhanced audio", "Wide adjustable stand", "Up to 9 hours battery"]
  },

  // ACCESSORIES (12 products)
  {
    id: "39",
    name: "Logitech MX Master 3S - Wireless Mouse, 8K DPI, Magnetic Scroll",
    price: 95000,
    originalPrice: 120000,
    image: gamingMouse,
    rating: 4.8,
    reviews: 1234,
    badge: "Productivity",
    inStock: true,
    category: "accessories",
    brand: "Logitech",
    description: "Premium wireless mouse designed for productivity and creative workflows.",
    specifications: ["8000 DPI Darkfield sensor", "Magnetic scroll wheel", "70-day battery", "USB-C charging", "Multi-device support"]
  },
  {
    id: "40",
    name: "Keychron K2 V2 - Wireless Mechanical Keyboard, RGB Backlight, Hot-swappable",
    price: 125000,
    image: mechanicalKeyboard,
    rating: 4.7,
    reviews: 789,
    badge: "Mechanical",
    inStock: true,
    category: "accessories",
    brand: "Keychron",
    description: "Premium mechanical keyboard with hot-swappable switches and RGB lighting.",
    specifications: ["Hot-swappable switches", "RGB backlight", "Wireless connectivity", "75% compact layout", "4000mAh battery"]
  }
];

export const categories = [
  { id: "laptops", name: "Laptops", count: products.filter(p => p.category === "laptops").length },
  { id: "phones", name: "Smartphones", count: products.filter(p => p.category === "phones").length },
  { id: "computers", name: "Desktop PCs", count: products.filter(p => p.category === "computers").length },
  { id: "cameras", name: "Cameras", count: products.filter(p => p.category === "cameras").length },
  { id: "network", name: "Network Equipment", count: products.filter(p => p.category === "network").length },
  { id: "audio", name: "Audio & Headphones", count: products.filter(p => p.category === "audio").length },
  { id: "tablets", name: "Tablets", count: products.filter(p => p.category === "tablets").length },
  { id: "gaming", name: "Gaming Consoles", count: products.filter(p => p.category === "gaming").length },
  { id: "accessories", name: "Accessories", count: products.filter(p => p.category === "accessories").length },
];