import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, Search, Sparkles } from 'lucide-react';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchFilter);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      const catObj = categories.find((c) => c.id === selectedCategory);
      if (catObj) {
        result = result.filter((p) => p.category.toLowerCase() === catObj.name.toLowerCase());
      }
    }

    // Search query filter
    const activeSearch = (searchQuery || searchFilter).trim().toLowerCase();
    if (activeSearch) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(activeSearch) ||
          p.category.toLowerCase().includes(activeSearch) ||
          p.shortDescription.toLowerCase().includes(activeSearch)
      );
    }

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, sortBy, searchQuery, searchFilter]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Header */}
      <div className="border-b border-[#E8E3DA] pb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs text-[#85866A] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B77D5C]" />
            <span>Storefront Catalogue</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#493323] font-normal">
            Shop All Home Decor
          </h1>
          <p className="text-xs sm:text-sm text-[#85866A] mt-2 max-w-xl">
            Thoughtfully crafted accents, wall art, lighting and ceramic pieces designed to bring serenity to your living spaces.
          </p>
        </div>

        <div className="text-xs text-[#85866A]">
          Showing <span className="font-bold text-[#493323]">{filteredProducts.length}</span> of {products.length} products
        </div>
      </div>

      {/* Filter and Sorting Controls */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E3DA] shadow-soft space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#493323] text-white shadow-xs'
                    : 'bg-[#F8F5EF] text-[#493323] hover:bg-[#E8E3DA]/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#85866A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (searchFilter) setSearchParams({});
                }}
                className="w-full bg-[#F8F5EF] border border-[#E8E3DA] rounded-xl pl-9 pr-3 py-2 text-xs text-[#493323] focus:outline-none focus:border-[#B77D5C]"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#85866A] hidden sm:block" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F8F5EF] border border-[#E8E3DA] text-[#493323] text-xs font-medium rounded-xl px-3 py-2 focus:outline-none focus:border-[#B77D5C] w-full sm:w-auto"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Alphabetical: A to Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filters Indicator */}
        {(selectedCategory !== 'all' || searchQuery || sortBy !== 'featured') && (
          <div className="pt-2 border-t border-[#E8E3DA]/60 flex items-center justify-between text-xs text-[#85866A]">
            <div className="flex items-center gap-2">
              <span>Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="bg-[#B77D5C]/15 text-[#B77D5C] px-2 py-0.5 rounded-md font-medium text-[11px]">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              )}
              {searchQuery && (
                <span className="bg-[#85866A]/15 text-[#85866A] px-2 py-0.5 rounded-md font-medium text-[11px]">
                  "{searchQuery}"
                </span>
              )}
            </div>
            <button
              onClick={clearFilters}
              className="text-[#B77D5C] hover:underline font-medium text-xs"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E8E3DA] p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#F8F5EF] text-[#85866A] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl text-[#493323]">No products found</h3>
          <p className="text-xs text-[#85866A] max-w-sm mx-auto">
            We couldn't find any decor items matching your active criteria. Try clearing search filters or changing categories.
          </p>
          <button
            onClick={clearFilters}
            className="bg-[#493323] text-white px-5 py-2.5 rounded-xl text-xs font-medium hover:bg-[#382618] transition-colors"
          >
            Show All 5 Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
