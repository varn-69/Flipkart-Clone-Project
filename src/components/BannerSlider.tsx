import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { promotionalBanners } from '../data/products';

interface BannerSliderProps {
  onBannerClick?: (categoryKey: string) => void;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({ onBannerClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % promotionalBanners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + promotionalBanners.length) % promotionalBanners.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % promotionalBanners.length);
  };

  const currentBanner = promotionalBanners[currentIndex];

  const handleBannerSelect = () => {
    if (onBannerClick) {
      if (currentBanner.id === 1) onBannerClick('Mobiles');
      else if (currentBanner.id === 2) onBannerClick('Laptops');
      else if (currentBanner.id === 3) onBannerClick('Fashion');
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white shadow-sm my-2 md:my-3 rounded-sm group cursor-pointer" onClick={handleBannerSelect}>
      <div className={`w-full py-8 md:py-14 px-6 md:px-16 bg-gradient-to-r ${currentBanner.bgGradient} text-white flex flex-col md:flex-row items-center justify-between transition-all duration-500 ease-in-out`}>
        <div className="max-w-xl text-center md:text-left space-y-2 md:space-y-3">
          <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full uppercase tracking-wider shadow">
            Special Festive Deal
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm">
            {currentBanner.title}
          </h2>
          <p className="text-sm md:text-lg text-white/90">
            {currentBanner.subtitle}
          </p>
          <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
            <span className="text-xl md:text-3xl font-black text-yellow-300">
              {currentBanner.discount}
            </span>
            <button className="bg-white text-gray-900 font-bold px-5 py-2 rounded-sm shadow-md hover:bg-yellow-400 hover:text-black transition text-sm">
              {currentBanner.cta} →
            </button>
          </div>
        </div>

        {/* Decorative Graphic Element */}
        <div className="mt-4 md:mt-0 flex items-center justify-center">
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-inner">
            <div className="text-center p-4">
              <span className="text-xs uppercase font-semibold text-yellow-200 block">Lowest Price Guaranteed</span>
              <span className="text-2xl md:text-4xl font-extrabold block text-white mt-1">₹ EXTRA OFF</span>
              <span className="text-[11px] text-white/80 block mt-1">+ Free Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-16 md:w-10 md:h-20 bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center rounded-r shadow transition opacity-80 group-hover:opacity-100"
        aria-label="Previous Banner"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-16 md:w-10 md:h-20 bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center rounded-l shadow transition opacity-80 group-hover:opacity-100"
        aria-label="Next Banner"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {promotionalBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all ${
              currentIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
