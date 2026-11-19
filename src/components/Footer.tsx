import React from 'react';
import { ShieldCheck, RotateCcw, Truck, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#172337] text-white text-xs mt-12 border-t border-gray-700">
      {/* Flipkart Trust Badges */}
      <div className="border-b border-gray-700 py-6 bg-[#21314d]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center gap-1 text-gray-200">
            <Award className="text-[#ffe500]" size={24} />
            <span className="font-semibold text-sm">100% Authentic</span>
            <span className="text-[11px] text-gray-400">Directly from top verified sellers</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-200">
            <RotateCcw className="text-[#ffe500]" size={24} />
            <span className="font-semibold text-sm">Easy 7-14 Days Return</span>
            <span className="text-[11px] text-gray-400">No questions asked return policy</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-200">
            <Truck className="text-[#ffe500]" size={24} />
            <span className="font-semibold text-sm">Fast & Free Shipping</span>
            <span className="text-[11px] text-gray-400">On all Plus eligible orders</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-200">
            <ShieldCheck className="text-[#ffe500]" size={24} />
            <span className="font-semibold text-sm">Secure Checkout</span>
            <span className="text-[11px] text-gray-400">256-bit SSL encrypted payments</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-300">
        <div>
          <h4 className="text-gray-400 font-semibold mb-3 tracking-wider uppercase text-[11px]">ABOUT</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Flipkart Stories</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 font-semibold mb-3 tracking-wider uppercase text-[11px]">HELP</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Payments</li>
            <li className="hover:underline cursor-pointer">Shipping</li>
            <li className="hover:underline cursor-pointer">Cancellation & Returns</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Report Infringement</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 font-semibold mb-3 tracking-wider uppercase text-[11px]">CONSUMER POLICY</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Cancellation & Returns</li>
            <li className="hover:underline cursor-pointer">Terms Of Use</li>
            <li className="hover:underline cursor-pointer">Security</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Sitemap</li>
            <li className="hover:underline cursor-pointer">Grievance Redressal</li>
          </ul>
        </div>

        <div className="md:border-l border-gray-700 md:pl-6">
          <h4 className="text-gray-400 font-semibold mb-3 tracking-wider uppercase text-[11px]">Mail Us:</h4>
          <p className="text-gray-300 leading-relaxed text-[11px]">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103, Karnataka, India
          </p>
        </div>

        <div>
          <h4 className="text-gray-400 font-semibold mb-3 tracking-wider uppercase text-[11px]">Registered Office:</h4>
          <p className="text-gray-300 leading-relaxed text-[11px]">
            Flipkart Internet Private Limited,<br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: 044-45614700 / 044-67415800
          </p>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="text-yellow-400 font-semibold cursor-pointer">Become a Seller</span>
            <span className="cursor-pointer hover:underline">Advertise</span>
            <span className="cursor-pointer hover:underline">Gift Cards</span>
            <span className="cursor-pointer hover:underline">Help Center</span>
          </div>
          <div>
            © 2007-2026 Flipkart.com Clone Demo MVP. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
