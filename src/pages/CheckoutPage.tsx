import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  ShieldCheck,
  CheckCircle,
  Truck,
  CreditCard,
  Smartphone,
  Banknote,
  PackageCheck,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    clearCart,
    totalItemsCount,
    totalOriginalPrice,
    totalDiscount,
    totalAmount,
    deliveryFee,
  } = useCart();

  const navigate = useNavigate();

  // Address state
  const [address, setAddress] = useState({
    fullName: 'Rahul Sharma',
    phone: '9876543210',
    pincode: '560103',
    locality: 'Outer Ring Road, Bellandur',
    address: 'Flat 402, Sunshine Residency',
    city: 'Bengaluru',
    state: 'Karnataka',
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [upiId, setUpiId] = useState('user@okhdfcbank');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  const finalPayable = totalAmount + deliveryFee;

  if (cart.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-screen bg-[#f1f2f4] py-16 px-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-xs text-gray-500 mt-2">Add items to proceed to checkout.</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-[#2874f0] text-white px-6 py-2 rounded-sm text-sm font-semibold"
        >
          Go to Store
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment and order placement
    setTimeout(() => {
      const generatedOrderId = 'OD' + Math.floor(100000000000 + Math.random() * 900000000000);
      setConfirmedOrderId(generatedOrderId);
      setIsProcessing(false);
      setOrderConfirmed(true);
      clearCart();
    }, 1500);
  };

  // Order Confirmation Success View
  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-[#f1f2f4] py-12 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-sm shadow-md border border-gray-200 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-[#388e3c] text-white p-6 text-center">
            <div className="w-16 h-16 bg-white text-[#388e3c] rounded-full flex items-center justify-center mx-auto mb-3 shadow">
              <CheckCircle size={36} />
            </div>
            <h1 className="text-2xl font-bold">Order Placed Successfully!</h1>
            <p className="text-xs text-green-100 mt-1">
              Thank you for shopping on Flipkart. A confirmation SMS & Email has been sent.
            </p>
          </div>

          {/* Order Details Body */}
          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between pb-4 border-b border-gray-200 gap-2">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block">Order ID</span>
                <span className="text-sm font-mono font-bold text-gray-900">{confirmedOrderId}</span>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block">Payment Mode</span>
                <span className="text-sm font-semibold text-gray-900 uppercase">
                  {paymentMethod === 'upi' ? 'UPI (Instant)' : paymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash On Delivery'}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider block">Total Paid</span>
                <span className="text-base font-bold text-[#388e3c]">₹{finalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Delivery Timeline info */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-sm flex items-start gap-3">
              <Truck size={22} className="text-[#2874f0] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-gray-800">
                  Estimated Delivery by Sunday, 22 Nov 2026
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Your order is being processed by SuperComNet and packed in Flipkart eco-friendly cartons.
                </p>
              </div>
            </div>

            {/* Delivery Address */}
            <div>
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                Shipping Address:
              </h4>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                {address.fullName} - {address.phone} <br />
                {address.address}, {address.locality} <br />
                {address.city}, {address.state} - <strong>{address.pincode}</strong>
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => navigate('/')}
                className="bg-[#2874f0] hover:bg-blue-600 text-white px-8 py-2.5 rounded-sm font-semibold text-sm shadow transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f2f4] py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Back button */}
        <Link to="/cart" className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-[#2874f0] mb-4">
          <ArrowLeft size={14} /> Back to Cart
        </Link>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Checkout Steps (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Step 1: Login Account */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#2874f0] text-white rounded-sm flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                    LOGIN
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {address.fullName} ({address.phone})
                </span>
              </div>
            </div>

            {/* Step 2: Delivery Address Form */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-4">
                <span className="w-6 h-6 bg-[#2874f0] text-white rounded-sm flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  DELIVERY ADDRESS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">10-digit Mobile Number</label>
                  <input
                    type="text"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    required
                    value={address.pincode}
                    onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">Locality</label>
                  <input
                    type="text"
                    required
                    value={address.locality}
                    onChange={(e) => setAddress({ ...address, locality: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-gray-600 font-medium mb-1">Flat, House no., Building, Apartment</label>
                  <input
                    type="text"
                    required
                    value={address.address}
                    onChange={(e) => setAddress({ ...address, address: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">City / District</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={address.state}
                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Order Summary Preview */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-[#2874f0] text-white rounded-sm flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                    ORDER SUMMARY
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#2874f0]">
                  {totalItemsCount} Items
                </span>
              </div>

              <div className="divide-y divide-gray-100 pt-2">
                {cart.slice(0, 3).map(({ product, quantity }) => (
                  <div key={product.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt={product.title} className="w-10 h-10 object-contain" />
                      <div>
                        <span className="font-medium text-gray-800 line-clamp-1">{product.title}</span>
                        <span className="text-gray-500">Qty: {quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900">
                      ₹{(product.price * quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
                {cart.length > 3 && (
                  <div className="pt-2 text-xs text-gray-500 text-center">
                    + {cart.length - 3} more items in order
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Payment Options */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-4">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-4">
                <span className="w-6 h-6 bg-[#2874f0] text-white rounded-sm flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  PAYMENT OPTIONS
                </span>
              </div>

              <div className="space-y-3">
                {/* UPI Option */}
                <label className={`block border p-3 rounded-sm cursor-pointer transition ${paymentMethod === 'upi' ? 'border-[#2874f0] bg-blue-50/50' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                      className="text-[#2874f0]"
                    />
                    <Smartphone size={18} className="text-[#2874f0]" />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-gray-800">UPI / QR (Instant & Recommended)</span>
                      <p className="text-[11px] text-gray-500">Google Pay, PhonePe, Paytm, BHIM</p>
                    </div>
                  </div>
                  {paymentMethod === 'upi' && (
                    <div className="mt-3 pl-7">
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g. mobile@upi"
                        className="w-full max-w-xs text-xs p-2 border border-gray-300 rounded-sm focus:border-[#2874f0] focus:outline-none"
                      />
                    </div>
                  )}
                </label>

                {/* Credit / Debit Card Option */}
                <label className={`block border p-3 rounded-sm cursor-pointer transition ${paymentMethod === 'card' ? 'border-[#2874f0] bg-blue-50/50' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="text-[#2874f0]"
                    />
                    <CreditCard size={18} className="text-[#2874f0]" />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-gray-800">Credit / Debit / ATM Card</span>
                      <p className="text-[11px] text-gray-500">Visa, MasterCard, RuPay, Maestro</p>
                    </div>
                  </div>
                  {paymentMethod === 'card' && (
                    <div className="mt-3 pl-7 grid grid-cols-2 gap-2 max-w-sm text-xs">
                      <input
                        type="text"
                        placeholder="Card Number (Demo: 4532...)"
                        defaultValue="4532 8901 2345 6789"
                        className="col-span-2 p-2 border border-gray-300 rounded-sm"
                      />
                      <input
                        type="text"
                        placeholder="MM/YY"
                        defaultValue="12/28"
                        className="p-2 border border-gray-300 rounded-sm"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        defaultValue="123"
                        className="p-2 border border-gray-300 rounded-sm"
                      />
                    </div>
                  )}
                </label>

                {/* COD Option */}
                <label className={`block border p-3 rounded-sm cursor-pointer transition ${paymentMethod === 'cod' ? 'border-[#2874f0] bg-blue-50/50' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="text-[#2874f0]"
                    />
                    <Banknote size={18} className="text-[#2874f0]" />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-gray-800">Cash on Delivery</span>
                      <p className="text-[11px] text-gray-500">Pay cash or UPI at the time of delivery</p>
                    </div>
                  </div>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full sm:w-auto bg-[#fb641b] hover:bg-[#e85813] text-white px-10 py-3 rounded-sm font-bold text-sm uppercase tracking-wide shadow flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Payment...</span>
                    </div>
                  ) : (
                    <span>CONFIRM & PLACE ORDER (₹{finalPayable.toLocaleString('en-IN')})</span>
                  )}
                </button>
              </div>
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
                  <span>Total Payable</span>
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
                  Safe and Secure Payments. 100% Authentic products.
                </span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
