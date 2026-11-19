import React, { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { sampleProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SortOption } from '../types';
import { Search, ArrowDownUp, Filter, ChevronRight } from 'lucide-react';

export const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = useMemo(() => {
    const qLower = query.toLowerCase().trim();
    let results = sampleProducts.filter((product) => {
      const matchQuery =
        !qLower ||
        product.title.toLowerCase().includes(qLower) ||
        product.category.toLowerCase().includes(qLower) ||
        product.brand.toLowerCase().includes(qLower) ||
        product.description.toLowerCase().includes(qLower);

      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchQuery && matchCategory;
    });

    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return results;
  }, [query, selectedCategory, sortBy]);

  const categories = ['All', 'Mobiles', 'Laptops', 'Electronics', 'Fashion', 'Home', 'Appliances'];

  return (
    <div className="min-h-screen bg-[#f1f2f4] py-4">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
          <Link to="/" className="hover:text-[#2874f0]">Home</Link>
          <ChevronRight size={12} />
          <span className="text-gray-800 font-medium truncate">Search: "{query}"</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Left Filter Sidebar */}
          <aside className="w-full md:w-64 bg-white p-4 rounded-sm shadow-sm border border-gray-200 self-start">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100 font-bold text-gray-800 text-sm">
              <Filter size={16} className="text-[#2874f0]" />
              <span>Filters</span>
            </div>

            <div className="py-3 border-b border-gray-100">
              <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider block mb-2">
                CATEGORIES
              </span>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-2 py-1.5 text-xs rounded transition flex items-center justify-between ${
                      selectedCategory === cat
                        ? 'bg-blue-50 text-[#2874f0] font-bold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{cat}</span>
                    {selectedCategory === cat && <span className="text-xs">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider block mb-2">
                CUSTOMER RATINGS
              </span>
              <div className="text-xs text-gray-600 space-y-1.5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#2874f0]" />
                  <span>4★ & above</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-[#2874f0]" />
                  <span>3★ & above</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <div className="flex-1 space-y-3">
            {/* Header with Results Count & Sorting */}
            <div className="bg-white p-3.5 rounded-sm shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-sm sm:text-base font-semibold text-gray-900">
                  Showing results for{' '}
                  <span className="text-[#2874f0]">"{query || 'All Products'}"</span>
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  ({filteredProducts.length} items found)
                </p>
              </div>

              {/* Sorting Bar */}
              <div className="flex items-center gap-2 text-xs font-medium overflow-x-auto">
                <span className="text-gray-500 flex items-center gap-1 font-semibold whitespace-nowrap">
                  <ArrowDownUp size={13} /> Sort:
                </span>
                <button
                  onClick={() => setSortBy('relevance')}
                  className={`px-2.5 py-1 rounded-sm border transition whitespace-nowrap ${
                    sortBy === 'relevance'
                      ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  Relevance
                </button>
                <button
                  onClick={() => setSortBy('price-low')}
                  className={`px-2.5 py-1 rounded-sm border transition whitespace-nowrap ${
                    sortBy === 'price-low'
                      ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  Price Low to High
                </button>
                <button
                  onClick={() => setSortBy('price-high')}
                  className={`px-2.5 py-1 rounded-sm border transition whitespace-nowrap ${
                    sortBy === 'price-high'
                      ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  Price High to Low
                </button>
                <button
                  onClick={() => setSortBy('rating')}
                  className={`px-2.5 py-1 rounded-sm border transition whitespace-nowrap ${
                    sortBy === 'rating'
                      ? 'border-[#2874f0] bg-blue-50 text-[#2874f0] font-bold'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  Rating
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-sm shadow-sm border border-gray-200">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                  <Search size={32} />
                </div>
                <h3 className="text-base font-bold text-gray-800">
                  No products found for "{query}"
                </h3>
                <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                  Try checking your spelling or use more general terms like "mobile", "laptop", "nike", etc.
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-block bg-[#2874f0] text-white text-xs font-semibold px-4 py-2 rounded-sm shadow hover:bg-blue-600 transition"
                >
                  Back to Homepage
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
