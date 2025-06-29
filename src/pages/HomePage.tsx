import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryGrid from '../components/home/CategoryGrid';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;