import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, Truck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1600')`
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional Tools & Hardware
              <span className="block text-orange-500">Built to Last</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover premium quality tools, building materials, and equipment for contractors and DIY enthusiasts. 
              Your project starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200 group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/categories"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Browse Categories
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Wrench className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Professional Grade</h3>
                  <p className="text-gray-300 text-sm">Tools trusted by professionals</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality Guaranteed</h3>
                  <p className="text-gray-300 text-sm">Lifetime warranty on select items</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <Truck className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-gray-300 text-sm">Next-day shipping available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;