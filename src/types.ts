export interface Product {
  id: string;
  title: string;
  category: 'Mobiles' | 'Laptops' | 'Electronics' | 'Fashion' | 'Home' | 'Appliances';
  brand: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  ratingCount: number;
  reviewCount: number;
  image: string;
  images: string[];
  description: string;
  highlights: string[];
  specifications: Record<string, string>;
  assured: boolean;
  inStock: boolean;
  freeDelivery: boolean;
  deliveryDays: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type SortOption = 'relevance' | 'price-low' | 'price-high' | 'rating';

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  totalAmount: number;
  savings: number;
  deliveryFee: number;
  shippingAddress: {
    fullName: string;
    phone: string;
    pincode: string;
    locality: string;
    address: string;
    city: string;
    state: string;
  };
  paymentMethod: 'upi' | 'card' | 'cod';
  orderDate: string;
  estimatedDeliveryDate: string;
}
