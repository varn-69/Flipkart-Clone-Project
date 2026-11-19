import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="bg-white rounded-sm border border-gray-100 hover:shadow-lg transition-all duration-200 flex flex-col justify-between p-3 sm:p-4 group relative h-full">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        {/* Image Container */}
        <div className="w-full h-44 sm:h-52 flex items-center justify-center overflow-hidden mb-3 relative bg-gray-50 rounded-sm">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col flex-1">
          {/* Brand */}
          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
            {product.brand}
          </span>

          {/* Title */}
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 hover:text-[#2874f0] transition mb-1 leading-snug">
            {product.title}
          </h3>

          {/* Rating & Assured Badge */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <div className="flex items-center gap-0.5 bg-[#388e3c] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm">
              <span>{product.rating.toFixed(1)}</span>
              <Star size={10} fill="white" strokeWidth={0} />
            </div>
            <span className="text-xs text-gray-500 font-normal">
              ({product.ratingCount.toLocaleString()})
            </span>
            {product.assured && (
              <span className="text-[11px] font-bold italic text-[#2874f0] bg-blue-50 px-1 py-0.5 rounded flex items-center gap-0.5 ml-auto">
                <span className="text-yellow-500">✔</span> Assured
              </span>
            )}
          </div>

          {/* Price Section */}
          <div className="mt-auto pt-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-base sm:text-lg font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xs text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-semibold text-[#388e3c]">
                    {product.discountPercentage}% off
                  </span>
                </>
              )}
            </div>

            {/* Delivery Note */}
            <div className="text-[11px] text-gray-500 mt-1">
              {product.freeDelivery ? (
                <span className="font-semibold text-gray-700">Free delivery</span>
              ) : (
                <span>Delivery in {product.deliveryDays} days</span>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Quick Add to Cart button */}
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-[#f1f2f4] hover:bg-[#ffe500] hover:text-black text-gray-800 text-xs font-semibold py-2 px-3 rounded-sm flex items-center justify-center gap-1.5 transition duration-150"
      >
        <ShoppingCart size={14} />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};
