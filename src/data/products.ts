import { Product } from '../types';

export const sampleProducts: Product[] = [
  // Mobiles
  {
    id: 'mob-1',
    title: 'Apple iPhone 15 (Black, 128 GB)',
    category: 'Mobiles',
    brand: 'Apple',
    price: 65999,
    originalPrice: 79900,
    discountPercentage: 17,
    rating: 4.6,
    ratingCount: 42189,
    reviewCount: 2314,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Experience the innovative Dynamic Island, 48MP main camera with 2x Telephoto, durable color-infused glass and aluminum design, and USB-C connectivity.',
    highlights: [
      '128 GB ROM',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP + 12MP | 12MP Front Camera',
      'A16 Bionic Chip, 6 Core Processor',
      'Ceramic Shield front, Precision-milled back glass'
    ],
    specifications: {
      'In The Box': 'Handset, USB-C Charge Cable, Documentation',
      'Model Number': 'MTP03HN/A',
      'Display Size': '6.1 inch',
      'Processor': 'A16 Bionic Chip',
      'Primary Camera': '48MP + 12MP',
      'Warranty': '1 Year Manufacturer Warranty'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },
  {
    id: 'mob-2',
    title: 'SAMSUNG Galaxy S24 Ultra 5G (Titanium Gray, 256 GB)',
    category: 'Mobiles',
    brand: 'Samsung',
    price: 129999,
    originalPrice: 144999,
    discountPercentage: 10,
    rating: 4.7,
    ratingCount: 15340,
    reviewCount: 1890,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Unleash next-level creativity and productivity with Galaxy AI, Titanium exterior, built-in S Pen, and 200MP Quad Telephoto zoom camera system.',
    highlights: [
      '12 GB RAM | 256 GB ROM',
      '17.27 cm (6.8 inch) Quad HD+ Dynamic AMOLED 2X',
      '200MP + 50MP + 12MP + 10MP | 12MP Front Camera',
      'Snapdragon 8 Gen 3 Processor',
      '5000 mAh Battery with 45W Fast Charging'
    ],
    specifications: {
      'In The Box': 'Handset, S-Pen, Type-C Cable, Ejection Pin',
      'RAM': '12 GB',
      'Battery': '5000 mAh',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Network': '5G, 4G LTE, Wi-Fi 7'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 1
  },
  {
    id: 'mob-3',
    title: 'OnePlus 12 5G (Silky Black, 256 GB)',
    category: 'Mobiles',
    brand: 'OnePlus',
    price: 64999,
    originalPrice: 69999,
    discountPercentage: 7,
    rating: 4.5,
    ratingCount: 18230,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Powered by Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, and revolutionary 100W SUPERVOOC charging.',
    highlights: [
      '12 GB RAM | 256 GB ROM',
      '17.32 cm (6.82 inch) ProXDR Display with 120Hz LTPO',
      '50MP + 48MP + 64MP | 32MP Front Camera',
      '5400 mAh Battery with 100W SUPERVOOC',
      'Dual Cryo-velocity VC Cooling System'
    ],
    specifications: {
      'In The Box': 'Handset, 100W SUPERVOOC Adapter, Red Cable',
      'RAM': '12 GB',
      'Battery Capacity': '5400 mAh',
      'Operating System': 'OxygenOS 14 based on Android 14'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 3
  },
  {
    id: 'mob-4',
    title: 'Google Pixel 8 (Hazel, 128 GB)',
    category: 'Mobiles',
    brand: 'Google',
    price: 54999,
    originalPrice: 75999,
    discountPercentage: 27,
    rating: 4.4,
    ratingCount: 9800,
    reviewCount: 840,
    image: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Google Tensor G3 chip engineered with Google AI for cutting-edge photo and video editing features like Best Take and Magic Audio Eraser.',
    highlights: [
      '8 GB RAM | 128 GB ROM',
      '15.75 cm (6.2 inch) Actua OLED Display',
      '50MP + 12MP | 10.5MP Front Camera',
      'Google Tensor G3 Chip',
      '7 years of guaranteed OS and security updates'
    ],
    specifications: {
      'In The Box': 'Pixel 8, 1m USB-C to USB-C cable, Quick Switch Adapter',
      'Processor': 'Google Tensor G3',
      'Internal Storage': '128 GB'
    },
    assured: false,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },

  // Laptops
  {
    id: 'lap-1',
    title: 'Apple MacBook Air M2 - (8 GB/256 GB SSD/macOS)',
    category: 'Laptops',
    brand: 'Apple',
    price: 89900,
    originalPrice: 99900,
    discountPercentage: 10,
    rating: 4.8,
    ratingCount: 31200,
    reviewCount: 2410,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency inside its durable all-aluminum enclosure.',
    highlights: [
      'Apple M2 Processor (8-core CPU, 8-core GPU)',
      '8 GB Unified Memory | 256 GB SSD Storage',
      '34.54 cm (13.6 inch) Liquid Retina Display with True Tone',
      'Up to 18 Hours Battery Life',
      '1080p FaceTime HD Camera & MagSafe 3 Charging'
    ],
    specifications: {
      'Processor': 'Apple M2 Chip',
      'Display': '13.6 inch LED-backlit Liquid Retina',
      'Weight': '1.24 kg',
      'OS': 'macOS Sonoma'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 1
  },
  {
    id: 'lap-2',
    title: 'ASUS TUF Gaming F15 Intel Core i5 12th Gen',
    category: 'Laptops',
    brand: 'ASUS',
    price: 52990,
    originalPrice: 77990,
    discountPercentage: 32,
    rating: 4.4,
    ratingCount: 14200,
    reviewCount: 1250,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Arm yourself with a desktop-style keyboard optimized for gaming. High-speed 144Hz IPS display and NVIDIA GeForce RTX 3050 GPU.',
    highlights: [
      'Intel Core i5 12th Gen 12500H Processor',
      '16 GB DDR4 RAM | 512 GB PCIe SSD',
      '4 GB NVIDIA GeForce RTX 3050 Graphics',
      '39.62 cm (15.6 inch) Full HD 144Hz Anti-Glare Display',
      'Military Grade MIL-STD-810H Durability'
    ],
    specifications: {
      'Graphics': 'NVIDIA GeForce RTX 3050 4GB',
      'RAM': '16 GB DDR4',
      'Storage': '512 GB NVMe SSD',
      'Weight': '2.20 kg'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },
  {
    id: 'lap-3',
    title: 'HP Pavilion 15 AMD Ryzen 7 Octa Core 5825U',
    category: 'Laptops',
    brand: 'HP',
    price: 61990,
    originalPrice: 82499,
    discountPercentage: 24,
    rating: 4.3,
    ratingCount: 6540,
    reviewCount: 490,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Sleek, lightweight performance laptop featuring micro-edge bezels, Audio by B&O, and HP Fast Charge technology.',
    highlights: [
      'AMD Ryzen 7 5825U 8-Core Processor',
      '16 GB DDR4 RAM | 512 GB SSD',
      '39.62 cm (15.6 inch) FHD IPS Micro-edge Display',
      'Backlit Keyboard with Numeric Keypad',
      'Windows 11 Home + MS Office Home & Student 2021'
    ],
    specifications: {
      'Processor': 'Ryzen 7 5825U',
      'Operating System': 'Windows 11 Home',
      'Battery Life': 'Up to 8.5 hours'
    },
    assured: false,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 3
  },

  // Electronics
  {
    id: 'elec-1',
    title: 'Sony WH-1000XM5 Wireless Active Noise Cancelling Headphones',
    category: 'Electronics',
    brand: 'Sony',
    price: 26990,
    originalPrice: 34990,
    discountPercentage: 22,
    rating: 4.7,
    ratingCount: 11200,
    reviewCount: 1540,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Industry-leading noise cancellation optimized automatically based on your wearing conditions and environment, with 30-hour battery life.',
    highlights: [
      'Auto NC Optimizer with 8 microphones & two processors',
      'Ultra-comfortable, lightweight design with soft fit leather',
      'Up to 30-hour battery life with quick charging (3 min for 3 hours)',
      'Crystal clear hands-free calling with 4 beamforming mics',
      'Multipoint connection allows pairing with two Bluetooth devices'
    ],
    specifications: {
      'Battery Life': '30 Hours (NC ON)',
      'Connectivity': 'Bluetooth 5.2 / 3.5mm Aux',
      'Warranty': '1 Year Domestic Warranty'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 1
  },
  {
    id: 'elec-2',
    title: 'Apple AirPods Pro (2nd Gen) with MagSafe Case (USB-C)',
    category: 'Electronics',
    brand: 'Apple',
    price: 20999,
    originalPrice: 24900,
    discountPercentage: 15,
    rating: 4.8,
    ratingCount: 22400,
    reviewCount: 1890,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio with dynamic head tracking.',
    highlights: [
      'Apple H2 Headphone Chip',
      'Custom high-excursion Apple driver and dynamic range amplifier',
      'Dust, sweat, and water resistant (IP54)',
      'Up to 6 hours listening time with ANC enabled',
      'MagSafe Case with Precision Finding speaker and lanyard loop'
    ],
    specifications: {
      'Chip': 'Apple H2 Chip',
      'Charging Case': 'MagSafe with USB-C',
      'Sensors': 'Skin-detect sensor, Speech-detecting accelerometer'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 1
  },
  {
    id: 'elec-3',
    title: 'boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds',
    category: 'Electronics',
    brand: 'boAt',
    price: 1199,
    originalPrice: 4490,
    discountPercentage: 73,
    rating: 4.1,
    ratingCount: 189400,
    reviewCount: 21300,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Enjoy an extended break on weekends with up to 42 hours of total playback, including 6 hours of continuous playtime per charge.',
    highlights: [
      'Up to 42 Hours Total Playback',
      'BEAST Mode for Low Latency (80ms) Gaming',
      'ENx Environmental Noise Cancellation Technology',
      'ASAP Charge: 5 mins charge = 75 mins playtime',
      'IPX4 Water & Sweat Resistance'
    ],
    specifications: {
      'Bluetooth Version': 'v5.1',
      'Driver Size': '8mm x 2',
      'Color': 'Bold Black'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },

  // Fashion
  {
    id: 'fash-1',
    title: 'Nike Air Jordan 1 Retro Low OG Men Sneaker',
    category: 'Fashion',
    brand: 'Nike',
    price: 8295,
    originalPrice: 12495,
    discountPercentage: 33,
    rating: 4.6,
    ratingCount: 5200,
    reviewCount: 380,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Iconic basketball style upgraded with premium leather, encapsulated Air-Sole cushioning and signature heritage detailing.',
    highlights: [
      'Genuine leather upper offers durability and premium look',
      'Encapsulated Air-Sole unit provides lightweight cushioning',
      'Solid rubber outsole with deep flex grooves for traction',
      'Color: University Red / White / Black',
      'Occasion: Casual / Lifestyle'
    ],
    specifications: {
      'Sole Material': 'Rubber',
      'Fastening': 'Lace-Ups',
      'Toe Shape': 'Round Toe',
      'Warranty': '6 Months Warranty against manufacturing defects'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },
  {
    id: 'fash-2',
    title: "Levi's Men 511 Slim Fit Mid Rise Dark Wash Jeans",
    category: 'Fashion',
    brand: "Levi's",
    price: 1999,
    originalPrice: 3999,
    discountPercentage: 50,
    rating: 4.2,
    ratingCount: 8400,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'A modern slim with room to move. Added stretch for all-day comfort and lean aesthetic that works with any shirt or tee.',
    highlights: [
      'Fit: Slim Fit | Rise: Mid Rise',
      'Fabric: 99% Cotton, 1% Elastane',
      'Stretchable denim for flexible daily movement',
      '5-pocket classic styling with zip fly',
      'Machine wash cold with like colors'
    ],
    specifications: {
      'Fabric Care': 'Machine Wash',
      'Pattern': 'Clean Look',
      'Closure': 'Button & Zip'
    },
    assured: false,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 3
  },
  {
    id: 'fash-3',
    title: "Allen Solly Men's Classic Solid Formal Cotton Shirt",
    category: 'Fashion',
    brand: 'Allen Solly',
    price: 1099,
    originalPrice: 2199,
    discountPercentage: 50,
    rating: 4.3,
    ratingCount: 14800,
    reviewCount: 920,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Elevate your workday wardrobe with this crisp, pure cotton formal shirt tailored for a sharp, sophisticated silhouette.',
    highlights: [
      '100% Breathable Combed Cotton',
      'Classic spread collar with long sleeves',
      'Regular fit suited for boardroom & daily office wear',
      'Pre-washed fabric for minimal shrinkage'
    ],
    specifications: {
      'Collar': 'Spread Collar',
      'Fit': 'Regular',
      'Sleeve': 'Full Sleeve'
    },
    assured: true,
    inStock: true,
    freeDelivery: false,
    deliveryDays: 4
  },

  // Home
  {
    id: 'home-1',
    title: 'Sleepyhead Original 3-Layer Orthopedic Memory Foam Mattress',
    category: 'Home',
    brand: 'Sleepyhead',
    price: 8499,
    originalPrice: 14999,
    discountPercentage: 43,
    rating: 4.5,
    ratingCount: 28900,
    reviewCount: 3100,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered orthopedic support mattress with high density foam base, responsive memory foam and breathable washable zipper cover.',
    highlights: [
      'Medium Firmness - Orthopedic spine alignment',
      'Dimensions: 72 x 36 x 6 Inches (Single Bed)',
      'Removable & washable breathable zipper cover',
      'Zero partner disturbance motion isolation',
      '100 Nights Risk-free Trial with 10 Years Warranty'
    ],
    specifications: {
      'Comfort Level': 'Medium Firm',
      'Thickness': '6 Inches (15.2 cm)',
      'Warranty': '10 Years Limited Warranty'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 4
  },
  {
    id: 'home-2',
    title: 'Philips Smart Wi-Fi 20W LED Batten / Smart Ceiling Lamp',
    category: 'Home',
    brand: 'Philips',
    price: 1399,
    originalPrice: 2499,
    discountPercentage: 44,
    rating: 4.2,
    ratingCount: 7100,
    reviewCount: 540,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Control your ambient lights from anywhere using Wiz app or Amazon Alexa / Google Assistant. Tunable white with millions of warm to cool light hues.',
    highlights: [
      'WiZ connected: No bridge required, connects to home Wi-Fi',
      'Tunable White (Warm White 2700K to Cool Daylight 6500K)',
      'Voice control via Alexa, Google Assistant & Siri shortcuts',
      'Schedule timers and preset lighting modes'
    ],
    specifications: {
      'Wattage': '20 Watts',
      'Luminous Flux': '2000 Lumens',
      'Voltage': '220-240 V'
    },
    assured: false,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },

  // Appliances
  {
    id: 'app-1',
    title: 'LG 7 Kg 5 Star Inverter Touch panel Fully Automatic Front Load',
    category: 'Appliances',
    brand: 'LG',
    price: 29490,
    originalPrice: 43990,
    discountPercentage: 32,
    rating: 4.6,
    ratingCount: 22100,
    reviewCount: 2450,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80'
    ],
    description: '6 Motion Direct Drive technology moves the wash drum in multiple directions, giving fabrics the proper care while getting clothes ultra clean.',
    highlights: [
      'Fully Automatic Front Load with Inverter Direct Drive',
      'Capacity 7 kg: Suitable for families with 3 to 4 members',
      '5 Star Energy rating with best-in-class water efficiency',
      'Steam Wash for 99.9% allergen removal',
      '1200 RPM: Higher spin speeds help in faster drying'
    ],
    specifications: {
      'Washing Capacity': '7 kg',
      'Maximum Spin Speed': '1200 RPM',
      'Motor Warranty': '10 Years on Motor'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 2
  },
  {
    id: 'app-2',
    title: 'Dyson V12 Detect Slim Total Clean Cordless Vacuum Cleaner',
    category: 'Appliances',
    brand: 'Dyson',
    price: 44900,
    originalPrice: 55900,
    discountPercentage: 19,
    rating: 4.7,
    ratingCount: 3890,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Dyson’s lightest intelligent cordless vacuum with laser illumination that reveals invisible microscopic dust on hard floors.',
    highlights: [
      'Laser Slim Fluffy cleaner head illuminates microscopic particles',
      'Piezo sensor continuously sizes and counts dust particles',
      'Up to 60 minutes of run time with click-in battery',
      'Hair screw tool removes long hair and pet hair without tangling',
      'Hyperdymium motor spins up to 125,000 RPM'
    ],
    specifications: {
      'Suction Power': '150 AW',
      'Charge Time': '4 Hours',
      'Weight': '2.2 kg'
    },
    assured: true,
    inStock: true,
    freeDelivery: true,
    deliveryDays: 1
  }
];

export const categoriesList = [
  { name: 'All Categories', key: 'All', icon: 'Sparkles', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/69c6589653afdb9a.png' },
  { name: 'Mobiles', key: 'Mobiles', icon: 'Smartphone', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/22fddf3c7da4c4f4.png' },
  { name: 'Laptops', key: 'Laptops', icon: 'Laptop', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/69c6589653afdb9a.png' },
  { name: 'Electronics', key: 'Electronics', icon: 'Headphones', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d7f5c24.png' },
  { name: 'Fashion', key: 'Fashion', icon: 'Shirt', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d7f5c24.png' },
  { name: 'Home', key: 'Home', icon: 'Home', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5b813b64a3179898.png' },
  { name: 'Appliances', key: 'Appliances', icon: 'Tv', image: 'https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.png' }
];

export const promotionalBanners = [
  {
    id: 1,
    title: 'Flipkart Big Billion Days',
    subtitle: 'Crazy Deals on Smartphones & Electronics',
    discount: 'Up to 70% Off',
    bgGradient: 'from-blue-600 via-indigo-700 to-purple-800',
    cta: 'Shop Now',
    link: '/category/Mobiles'
  },
  {
    id: 2,
    title: 'Mega Laptop Carnival',
    subtitle: 'Intel Core & Apple Silicon Laptops with Extra Exchange Bonus',
    discount: 'Starting ₹34,990',
    bgGradient: 'from-amber-600 via-orange-600 to-red-700',
    cta: 'Explore Laptops',
    link: '/category/Laptops'
  },
  {
    id: 3,
    title: 'End of Season Fashion Fest',
    subtitle: 'Top Brands: Nike, Levi\'s, Allen Solly & more',
    discount: 'Min 50% - 80% Off',
    bgGradient: 'from-emerald-600 via-teal-700 to-cyan-800',
    cta: 'Upgrade Wardrobe',
    link: '/category/Fashion'
  }
];
