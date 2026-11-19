import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SearchPage } from './pages/SearchPage';
import { Check, X } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Toast Banner
const ToastNotification: React.FC = () => {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#212121] text-white px-4 py-3 rounded-md shadow-2xl text-xs sm:text-sm animate-bounce-in border-l-4 border-[#388e3c]">
      <div className="w-5 h-5 rounded-full bg-[#388e3c] flex items-center justify-center text-white flex-shrink-0">
        <Check size={12} strokeWidth={3} />
      </div>
      <span>{toastMessage}</span>
      <button
        onClick={dismissToast}
        className="text-gray-400 hover:text-white ml-2 transition"
        title="Close"
      >
        <X size={14} />
      </button>
    </div>
  );
};

export const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f1f2f4]">
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
      <ToastNotification />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
