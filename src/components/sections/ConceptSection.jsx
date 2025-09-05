import React from 'react';
import { Brain, Network, Zap, Target, BarChart3, Lock, ArrowRight } from 'lucide-react';
import { TECH_CONCEPTS } from '../../data/constants';

const getIconComponent = (iconName) => {
  const icons = { Brain, Network, Zap, Target, BarChart3, Lock };
  return icons[iconName] || Brain;
};

const ConceptSection = ({ onOpenTechModal }) => {
  return (
    <section id="concept" className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Core Technology Concepts
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our traffic camera monitoring system uses advanced AI to detect criminal behavior, tag suspects with complete identification details, and track them across the city's camera network with real time updates to police.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECH_CONCEPTS.map((concept, index) => {
            const IconComponent = getIconComponent(concept.icon);
            
            return (
              <div
                key={index}
                onClick={() => onOpenTechModal(concept)}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${concept.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {concept.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                  {concept.desc}
                </p>

                {/* Click indicator */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    Click for details
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;