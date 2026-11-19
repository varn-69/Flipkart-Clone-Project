import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { sampleProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import {
  Star,
  ShoppingCart,
  Zap,
  ShieldCheck,
  RotateCcw,
  Tag,
  CheckCircle,
  Truck,
  MapPin,
  ChevronRight
} from 'lucide-react';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = sampleProducts.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState<string>(
    product ? product.images[0] || product.image : ''
  );
  const [pincode, setPincode] = useState('560103');
  const [pincodeVerified, setPincodeVerified] = useState(true);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f1f2f4] flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-bold text-gray-800">Product Not Found</h2>
        <p className="text-sm text-gray-500 mt-2">The product you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-4 bg-[#2874f0] text-white px-4 py-2 rounded-sm text-sm font-semibold"
        >
          Return to Store
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-[#f1f2f4] py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#2874f0]">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/search?q=${product.category}`} className="hover:text-[#2874f0]">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium truncate max-w-xs">{product.title}</span>
        </div>

        {/* Main Product Container */}
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Image Gallery & CTA Buttons (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full sticky top-20 space-y-4">
              {/* Main Image Stage */}
              <div className="w-full h-80 sm:h-96 border border-gray-200 rounded-sm p-4 flex items-center justify-center relative bg-white">
                <img
                  src={selectedImage || product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110 cursor-crosshair"
                />
              </div>

              {/* Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="flex items-center justify-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-14 h-14 border rounded p-1 flex items-center justify-center bg-white transition ${
                        (selectedImage || product.image) === img
                          ? 'border-[#2874f0] ring-2 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img src={img} alt={`thumb-${idx}`} className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Action Buttons: Add To Cart & Buy Now */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#ff9f00] hover:bg-[#f39700] text-white py-3.5 px-4 rounded-sm font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow transition"
                >
                  <ShoppingCart size={18} />
                  <span>ADD TO CART</span>
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-[#fb641b] hover:bg-[#e85813] text-white py-3.5 px-4 rounded-sm font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow transition"
                >
                  <Zap size={18} />
                  <span>BUY NOW</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Title & Brand */}
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                {product.brand}
              </span>
              <h1 className="text-lg sm:text-2xl font-normal text-gray-900 leading-snug">
                {product.title}
              </h1>
            </div>

            {/* Ratings & Assured Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 bg-[#388e3c] text-white text-xs font-bold px-2 py-0.5 rounded-sm">
                <span>{product.rating.toFixed(1)}</span>
                <Star size={12} fill="white" strokeWidth={0} />
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {product.ratingCount.toLocaleString()} Ratings & {product.reviewCount.toLocaleString()} Reviews
              </span>
              {product.assured && (
                <span className="text-xs font-bold italic text-[#2874f0] bg-blue-50 px-2 py-0.5 rounded flex items-center gap-1 border border-blue-100">
                  <span className="text-yellow-500">✔</span> Flipkart Assured
                </span>
              )}
            </div>

            {/* Price section */}
            <div className="border-t border-b border-gray-100 py-3">
              <div className="text-xs text-[#388e3c] font-bold mb-1">
                Special price
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm font-bold text-[#388e3c]">
                      {product.discountPercentage}% off
                    </span>
                  </>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                + ₹29 Secured Packaging Fee
              </div>
            </div>

            {/* Available Bank Offers */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                Available offers
              </h3>
              <div className="space-y-1.5 text-xs text-gray-700">
                <div className="flex items-start gap-2">
                  <Tag size={14} className="text-[#388e3c] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-gray-900">Bank Offer:</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card.{' '}
                    <span className="text-[#2874f0] cursor-pointer">T&C</span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Tag size={14} className="text-[#388e3c] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-gray-900">Special Price:</strong> Get extra 10% off on combo purchases.{' '}
                    <span className="text-[#2874f0] cursor-pointer">T&C</span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Tag size={14} className="text-[#388e3c] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-gray-900">Partner Offer:</strong> Sign up for Flipkart Pay Later & get ₹500 Gift Card.{' '}
                    <span className="text-[#2874f0] cursor-pointer">Know More</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="pt-2">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                Delivery Details
              </span>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-1">
                  <MapPin size={16} className="absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Delivery Pincode"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setPincodeVerified(true)}
                  className="text-xs font-semibold text-[#2874f0] hover:text-blue-800 px-3 py-2 border border-gray-300 rounded-sm hover:bg-gray-50"
                >
                  Check
                </button>
              </div>

              {pincodeVerified && (
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-700">
                  <Truck size={14} className="text-[#388e3c]" />
                  <span>
                    Delivery in <strong>{product.deliveryDays} Days</strong> |{' '}
                    <span className="text-[#388e3c] font-bold">FREE Delivery</span>
                  </span>
                </div>
              )}
            </div>

            {/* Product Highlights */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                Highlights
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700 list-disc list-inside">
                {product.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                Specifications
              </h3>
              <div className="border border-gray-200 rounded-sm overflow-hidden text-xs">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div
                    key={key}
                    className={`flex py-2 px-3 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <span className="w-1/3 text-gray-500 font-medium">{key}</span>
                    <span className="w-2/3 text-gray-900 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                Description
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Trust Policies */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <RotateCcw size={16} className="text-[#2874f0]" />
                <span>7 Days Replacement Policy</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#2874f0]" />
                <span>GST invoice available</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
