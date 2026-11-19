import React from 'react';
import { Smartphone, Laptop, Headphones, Shirt, Home, Tv, Sparkles } from 'lucide-react';

interface CategoryNavProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    { name: 'All Products', key: 'All', icon: Sparkles },
    { name: 'Mobiles', key: 'Mobiles', icon: Smartphone },
    { name: 'Laptops', key: 'Laptops', icon: Laptop },
    { name: 'Electronics', key: 'Electronics', icon: Headphones },
    { name: 'Fashion', key: 'Fashion', icon: Shirt },
    { name: 'Home & Living', key: 'Home', icon: Home },
    { name: 'Appliances', key: 'Appliances', icon: Tv },
  ];

  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:justify-center sm:gap-10 md:gap-14 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`flex flex-col items-center gap-1.5 flex-shrink-0 group transition px-2 py-1 rounded-sm ${
                  isSelected ? 'text-[#2874f0]' : 'text-gray-700 hover:text-[#2874f0]'
                }`}
              >
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition ${
                    isSelected
                      ? 'bg-blue-50 text-[#2874f0] ring-2 ring-[#2874f0]'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-[#2874f0]'
                  }`}
                >
                  <Icon size={22} className="md:w-6 md:h-6" />
                </div>
                <span
                  className={`text-xs md:text-sm font-medium whitespace-nowrap transition ${
                    isSelected ? 'font-bold text-[#2874f0]' : 'group-hover:text-[#2874f0]'
                  }`}
                >
                  {cat.name}
                </span>
                {isSelected && (
                  <div className="w-6 h-0.5 bg-[#2874f0] rounded-full mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
