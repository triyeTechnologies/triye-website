import React from 'react';
import { Building2, Car, Shield, GraduationCap, ShoppingBag, Package } from 'lucide-react';
import { FUTURE_PRODUCTS } from '../../data/constants';

const getIconComponent = (iconName) => {
  const icons = { Building2, Car, Shield, GraduationCap, ShoppingBag, Package };
  return icons[iconName] || Building2;
};

const FutureProductsSection = () => {
  return (
    <section id="future" className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Future Product Vision
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding our core technology into comprehensive security solutions for communities and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FUTURE_PRODUCTS.map((product, index) => {
            const IconComponent = getIconComponent(product.icon);
            
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm sm:text-base">
                  {product.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FutureProductsSection;