import React, { useState, useMemo } from 'react';
import { sampleProducts } from '../data/products';
import { CategoryNav } from '../components/CategoryNav';
import { BannerSlider } from '../components/BannerSlider';
import { ProductCard } from '../components/ProductCard';
import { SortOption } from '../types';
import { SlidersHorizontal, Sparkles, Zap, ArrowDownUp } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let list = [...sampleProducts];

    // Filter by category
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'relevance':
      default:
        // default order
        break;
    }

    return list;
  }, [selectedCategory, sortBy]);

  // Featured sections
  const dealsOfTheDay = useMemo(() => {
    return sampleProducts.filter((p) => p.discountPercentage >= 30);
  }, []);

  const topElectronics = useMemo(() => {
    return sampleProducts.filter((p) => p.category === 'Electronics' || p.category === 'Laptops');
  }, []);

  return (
    <div className="min-h-screen bg-[#f1f2f4] pb-12">
      {/* Category Navigation Bar */}
      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-2 space-y-4">
        {/* Promotional Banner Carousel */}
        <BannerSlider onBannerClick={(cat) => setSelectedCategory(cat)} />

        {/* Filters and Sorting Controls Bar */}
        <div className="bg-white p-3 sm:p-4 rounded-sm shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 text-sm md:text-base flex items-center gap-1.5">
              <Sparkles size={18} className="text-[#2874f0]" />
              {selectedCategory === 'All' ? 'All Products' : `${selectedCategory} Collection`}
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
              {filteredAndSortedProducts.length} items
            </span>
          </div>

          {/* Sort By buttons */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-medium">
            <span className="text-gray-500 flex items-center gap-1 font-semibold whitespace-nowrap">
              <ArrowDownUp size={14} /> Sort By:
            </span>
            <button
              onClick={() => setSortBy('relevance')}
              className={`px-3 py-1.5 rounded-sm whitespace-nowrap border transition ${
                sortBy === 'relevance'
                  ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Relevance
            </button>
            <button
              onClick={() => setSortBy('price-low')}
              className={`px-3 py-1.5 rounded-sm whitespace-nowrap border transition ${
                sortBy === 'price-low'
                  ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Price -- Low to High
            </button>
            <button
              onClick={() => setSortBy('price-high')}
              className={`px-3 py-1.5 rounded-sm whitespace-nowrap border transition ${
                sortBy === 'price-high'
                  ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Price -- High to Low
            </button>
            <button
              onClick={() => setSortBy('rating')}
              className={`px-3 py-1.5 rounded-sm whitespace-nowrap border transition ${
                sortBy === 'rating'
                  ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Customer Rating
            </button>
          </div>
        </div>

        {/* Main Product Grid */}
        <section className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-medium">No products found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-3 text-[#2874f0] font-semibold text-sm hover:underline"
              >
                View all products
              </button>
            </div>
          )}
        </section>

        {/* Only show special curated rows when "All" category is selected */}
        {selectedCategory === 'All' && (
          <>
            {/* Deals of the Day Horizontal Section */}
            <section className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-900">
                      Top Deals of the Day
                    </h2>
                    <p className="text-xs text-gray-500">Unbeatable prices on bestselling items</p>
                  </div>
                </div>
                <span className="text-xs bg-[#2874f0] text-white px-3 py-1.5 rounded-sm font-semibold cursor-pointer">
                  View All
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {dealsOfTheDay.slice(0, 4).map((product) => (
                  <ProductCard key={`deal-${product.id}`} product={product} />
                ))}
              </div>
            </section>

            {/* Best of Gadgets Section */}
            <section className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2874f0] flex items-center justify-center">
                    <SlidersHorizontal size={18} />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-900">
                      Best of Electronics & Laptops
                    </h2>
                    <p className="text-xs text-gray-500">Premium sound, computing and power devices</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {topElectronics.slice(0, 4).map((product) => (
                  <ProductCard key={`elec-${product.id}`} product={product} />
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
