import React from 'react';
import { X, Brain, Network, Zap, Target, BarChart3, Lock, CheckCircle, Zap as ZapIcon } from 'lucide-react';

const TechConceptModal = ({ isOpen, onClose, concept }) => {
  if (!isOpen || !concept) return null;

  const getIconComponent = (iconName) => {
    const icons = { Brain, Network, Zap, Target, BarChart3, Lock };
    return icons[iconName] || Brain;
  };

  const IconComponent = getIconComponent(concept.icon);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${concept.color} px-6 py-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4 text-white pr-16">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{concept.title}</h2>
              <p className="text-white/90 text-lg mt-1">{concept.desc}</p>
            </div>
          </div>
        </div>

        {/* Content with hidden scrollbar */}
        <div className="overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(90vh - 140px)' }}>
          <div className="p-6 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                {concept.detailedInfo?.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {concept.detailedInfo?.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
              <div className="space-y-3">
                {concept.detailedInfo?.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                    <ZapIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <div className="bg-gray-900 rounded-lg p-4 space-y-2">
                {concept.detailedInfo?.technicalSpecs.map((spec, index) => (
                  <div key={index} className="text-green-400 font-mono text-sm">
                    <span className="text-gray-400"></span> {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TechConceptModal;