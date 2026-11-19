import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalItemsCount,
    totalOriginalPrice,
    totalDiscount,
    totalAmount,
    deliveryFee,
  } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f1f2f4] py-12 px-4">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-sm shadow-sm border border-gray-200 text-center">
          <div className="w-20 h-20 bg-blue-50 text-[#2874f0] rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Your Flipkart Cart is empty!</h2>
          <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto">
            Explore our wide range of products with extraordinary deals and discounts.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-[#2874f0] hover:bg-blue-600 text-white font-semibold text-sm px-8 py-2.5 rounded-sm shadow transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const finalPayable = totalAmount + deliveryFee;

  return (
    <div className="min-h-screen bg-[#f1f2f4] py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            
            {/* Header info */}
            <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200 flex items-center justify-between">
              <span className="font-bold text-base text-gray-800">
                Flipkart Cart ({totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'})
              </span>
              <span className="text-xs text-gray-500">
                Deliver to: <strong className="text-gray-800">Bengaluru - 560103</strong>
              </span>
            </div>

            {/* Items */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 divide-y divide-gray-100">
              {cart.map(({ product, quantity }) => (
                <div key={product.id} className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded p-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Product info & controls */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/product/${product.id}`}
                          className="text-sm font-medium text-gray-800 hover:text-[#2874f0] line-clamp-2 transition leading-snug"
                        >
                          {product.title}
                        </Link>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                          Delivery in {product.deliveryDays} days
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">Seller: SuperComNet</span>
                        {product.assured && (
                          <span className="text-[10px] font-bold italic text-[#2874f0] bg-blue-50 px-1 py-0.5 rounded">
                            ✔ Assured
                          </span>
                        )}
                      </div>

                      {/* Pricing */}
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          ₹{(product.price * quantity).toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice > product.price && (
                          <>
                            <span className="text-xs text-gray-500 line-through">
                              ₹{(product.originalPrice * quantity).toLocaleString('en-IN')}
                            </span>
                            <span className="text-xs font-semibold text-[#388e3c]">
                              {product.discountPercentage}% Off
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Quantity controls & Remove */}
                    <div className="flex items-center gap-6 mt-4 pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition"
                          title="Decrease Quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-gray-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition"
                          title="Increase Quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-xs font-bold text-gray-700 hover:text-red-600 flex items-center gap-1 transition uppercase"
                      >
                        <Trash2 size={14} />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Place Order CTA Box */}
            <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200 flex justify-end">
              <button
                onClick={() => navigate('/checkout')}
                className="bg-[#fb641b] hover:bg-[#e85813] text-white px-10 py-3 rounded-sm font-bold text-sm uppercase tracking-wide shadow flex items-center gap-2 transition"
              >
                <span>PLACE ORDER</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Price Details Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 sticky top-20">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  PRICE DETAILS
                </h3>
              </div>

              <div className="p-4 space-y-3.5 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Price ({totalItemsCount} items)</span>
                  <span>₹{totalOriginalPrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-[#388e3c]">
                  <span>Discount</span>
                  <span>− ₹{totalDiscount.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-[#388e3c] font-semibold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="border-t border-dashed border-gray-300 pt-3.5 flex justify-between font-bold text-base text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>

                {totalDiscount > 0 && (
                  <div className="bg-green-50 text-[#388e3c] text-xs font-semibold p-2.5 rounded border border-green-100">
                    You will save ₹{totalDiscount.toLocaleString('en-IN')} on this order
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <ShieldCheck size={20} className="text-gray-400 flex-shrink-0" />
                <span>
                  Safe and Secure Payments. Easy returns. 100% Authentic products.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
