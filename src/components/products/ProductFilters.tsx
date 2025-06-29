import React from 'react';
import { Filter, X } from 'lucide-react';
import { useProducts } from '../../contexts/ProductContext';

interface ProductFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ isOpen, onClose }) => {
  const { categories, selectedCategory, setSelectedCategory, sortBy, setSortBy } = useProducts();

  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'price-low', label: 'Price (Low to High)' },
    { value: 'price-high', label: 'Price (High to Low)' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose}></div>
      )}

      {/* Filter Panel */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 overflow-y-auto
        lg:relative lg:top-auto lg:left-auto lg:h-auto lg:w-full lg:transform-none lg:shadow-none lg:overflow-visible lg:z-auto lg:transition-none lg:bg-white lg:rounded-lg
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center space-x-2 mb-6">
            <Filter className="h-5 w-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={selectedCategory === ''}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mr-3 text-orange-600 focus:ring-orange-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-orange-600 transition-colors">
                  All Categories
                </span>
              </label>
              {categories.map((category) => (
                <label key={category.id} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value={category.name}
                    checked={selectedCategory === category.name}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mr-3 text-orange-600 focus:ring-orange-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-orange-600 transition-colors">
                    {category.name} ({category.productCount})
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedCategory('');
              setSortBy('name');
            }}
            className="w-full py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;