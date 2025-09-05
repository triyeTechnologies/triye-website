import React from 'react';
import { User } from 'lucide-react';
import { FOUNDERS } from '../../data/constants';
import { OptimizedImage } from '../../utils/imageUtils.jsx';

const FoundersSection = () => {
  return (
    <section id="founders" className="py-16 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Founders</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary team behind Triye's revolutionary AI security technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {FOUNDERS.map((founder, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 relative">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl border-4 border-white group-hover:shadow-2xl transition-shadow duration-300">
                  {founder.hasImage ? (
                    <OptimizedImage
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      placeholderType="founder"
                      width={192}
                      height={192}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <User className="w-24 h-24 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-gray-600">
                  {founder.role}
                </p>
              </div>

              <div className="mt-4 w-12 h-1 bg-gray-300 mx-auto rounded-full group-hover:bg-blue-500 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;