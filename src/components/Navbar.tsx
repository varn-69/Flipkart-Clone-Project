import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, User, Heart, Package, Bell, HelpCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mockUser, setMockUser] = useState<string | null>(null);
  const [loginPhone, setLoginPhone] = useState('');

  const { totalItemsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPhone.trim()) {
      setMockUser(loginPhone);
      setIsLoginModalOpen(false);
      setLoginPhone('');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#2874f0] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 gap-2 md:gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex flex-col items-end group">
                <span className="text-xl md:text-2xl font-bold italic tracking-wide text-white leading-none">
                  Flipkart
                </span>
                <span className="text-[10px] md:text-xs italic text-gray-200 flex items-center gap-0.5 leading-none mt-0.5">
                  Explore <span className="text-[#ffe500] font-semibold">Plus</span>
                  <span className="text-[#ffe500] text-[10px]">★</span>
                </span>
              </Link>
            </div>

            {/* Search Input Bar */}
            <form
              onSubmit={handleSearch}
              className="flex-1 max-w-2xl relative flex items-center bg-white rounded-sm shadow-sm"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for Products, Brands and More"
                className="w-full px-3 md:px-4 py-2 text-sm text-gray-800 focus:outline-none rounded-sm placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="px-3 md:px-4 text-[#2874f0] hover:text-blue-700 transition-colors"
                title="Search"
              >
                <Search size={18} />
              </button>
            </form>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {/* Login / User Profile */}
              {mockUser ? (
                <div className="relative group cursor-pointer flex items-center gap-1.5 py-1">
                  <User size={16} />
                  <span className="font-semibold text-white">Hi, {mockUser.slice(0, 8)}</span>
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white text-gray-800 rounded-sm shadow-xl py-2 hidden group-hover:block z-50">
                    <div className="px-4 py-2 border-b text-xs text-gray-500">Welcome, customer</div>
                    <Link to="/cart" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm">
                      <Package size={16} className="text-[#2874f0]" /> Orders
                    </Link>
                    <button
                      onClick={() => setMockUser(null)}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 text-sm"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-white text-[#2874f0] hover:bg-gray-50 px-7 py-1 rounded-sm font-medium tracking-wide transition shadow-sm"
                >
                  Login
                </button>
              )}

              {/* Become a Seller */}
              <span className="cursor-pointer hover:text-gray-200 transition">
                Become a Seller
              </span>

              {/* More menu */}
              <div className="relative group cursor-pointer flex items-center gap-1 py-1">
                <span>More</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />

                <div className="absolute top-full right-0 mt-1 w-52 bg-white text-gray-800 rounded-sm shadow-xl py-2 hidden group-hover:block z-50">
                  <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-sm border-b border-gray-100">
                    <Bell size={16} className="text-[#2874f0]" /> Notification Preferences
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-sm border-b border-gray-100">
                    <HelpCircle size={16} className="text-[#2874f0]" /> 24x7 Customer Care
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-sm">
                    <Heart size={16} className="text-[#2874f0]" /> Wishlist
                  </div>
                </div>
              </div>

              {/* Cart */}
              <Link
                to="/cart"
                className="flex items-center gap-2 text-white hover:text-gray-200 font-semibold transition relative"
              >
                <div className="relative">
                  <ShoppingCart size={20} />
                  {totalItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#ff6161] text-white text-[11px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center border border-white">
                      {totalItemsCount}
                    </span>
                  )}
                </div>
                <span>Cart</span>
              </Link>
            </div>

            {/* Mobile Cart and Menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <Link to="/cart" className="relative p-1">
                <ShoppingCart size={20} />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff6161] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white">
                    {totalItemsCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-white hover:text-gray-200"
              >
                <User size={20} />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile dropdown sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-gray-800 border-t border-gray-200 px-4 py-3 shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <span className="font-semibold text-sm">
                {mockUser ? `Hi, ${mockUser}` : 'Welcome Guest'}
              </span>
              {mockUser ? (
                <button
                  onClick={() => setMockUser(null)}
                  className="text-xs text-red-600 font-medium"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginModalOpen(true);
                  }}
                  className="text-xs bg-[#2874f0] text-white px-3 py-1 rounded-sm"
                >
                  Login
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-3 text-xs">
              <Link
                to="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-gray-50 rounded flex items-center gap-2"
              >
                <Package size={14} className="text-[#2874f0]" /> My Orders
              </Link>
              <div className="p-2 bg-gray-50 rounded flex items-center gap-2 cursor-pointer">
                <Heart size={14} className="text-[#2874f0]" /> Wishlist
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
          <div className="bg-white rounded-md max-w-2xl w-full flex overflow-hidden relative shadow-2xl">
            {/* Modal Close Button */}
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 z-10"
            >
              <X size={20} />
            </button>

            {/* Left Flipkart Blue Banner */}
            <div className="w-2/5 bg-[#2874f0] p-8 text-white hidden sm:flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-3">Login</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Get access to your Orders, Wishlist and Recommendations
                </p>
              </div>
              <div className="text-xs text-blue-200">
                Explore Plus membership benefits inside!
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full sm:w-3/5 p-8 flex flex-col justify-between">
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-1 font-medium">
                    Enter Email / Mobile number
                  </label>
                  <input
                    type="text"
                    required
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    placeholder="e.g. 9876543210 or user@example.com"
                    className="w-full border-b border-gray-300 focus:border-[#2874f0] py-2 text-sm focus:outline-none transition"
                  />
                </div>

                <p className="text-[11px] text-gray-500 leading-relaxed">
                  By continuing, you agree to Flipkart's{' '}
                  <span className="text-[#2874f0] cursor-pointer">Terms of Use</span> and{' '}
                  <span className="text-[#2874f0] cursor-pointer">Privacy Policy</span>.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#fb641b] hover:bg-[#e85813] text-white py-3 rounded-sm font-semibold text-sm shadow transition"
                >
                  Request OTP / Continue
                </button>
              </form>

              <div className="mt-8 text-center text-xs text-gray-500">
                New to Flipkart?{' '}
                <span
                  onClick={() => {
                    setLoginPhone('Demo User');
                    setMockUser('Demo User');
                    setIsLoginModalOpen(false);
                  }}
                  className="text-[#2874f0] font-semibold cursor-pointer hover:underline"
                >
                  Create an account
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
