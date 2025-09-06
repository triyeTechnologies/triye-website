import React from 'react';
import { Eye, Users, Network, Zap } from 'lucide-react';
import { VISION_FEATURES } from '../../data/constants';
import { OptimizedImage } from '../../utils/imageUtils.jsx';

const getIconComponent = (iconName) => {
  const icons = { Eye, Users, Network, Zap };
  return icons[iconName] || Eye;
};

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Intelligent Crime
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Detection & Response
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
            Imagine a city-wide security network that never sleeps. Our AI system continuously monitors 
            traffic cameras and security feeds, instantly detecting criminal activity and coordinating real-time response.
          </p>
        </div>

        <div className="space-y-16">
          {VISION_FEATURES.map((feature, index) => {
            const IconComponent = getIconComponent(feature.icon);
            
            // Updated detailed descriptions with improved language
            const updatedDetailDesc = {
              'Real-Time Detection': 'Our advanced AI continuously monitors traffic cameras throughout the metropolitan area, instantly detecting criminal behavior as it unfolds. The moment suspicious activity is identified, our system captures the complete scene and immediately alerts the nearest police units for rapid response.',
              'Suspect ID': 'When crime is detected, our system instantly creates a comprehensive digital profile of the suspect. This includes facial recognition data when visible, detailed clothing descriptions with colors and distinctive features, plus complete vehicle information including make, model, color, and license plate details.',
              'Network Tracking': 'As criminals attempt to escape, our interconnected traffic camera network seamlessly tracks their movement across the entire city. When one camera loses visual contact, surrounding cameras automatically begin searching for the tagged individual, ensuring continuous monitoring with complete coverage.',
              'Live Response': 'Police receive immediate notifications through dedicated mobile applications with complete suspect details and real time tracking information. As criminals move through the camera network, officers get continuous updates showing exact locations, enabling strategic positioning and coordinated pursuit operations.'
            };
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {updatedDetailDesc[feature.title] || feature.detailDesc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Traffic Camera
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Real Time
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      City Wide
                    </span>
                  </div>
                </div>
                
                <div className={`relative flex justify-center items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-200">
                    <OptimizedImage 
                      src={feature.image}
                      alt={`${feature.title} demonstration`}
                      className={`rounded-xl shadow-lg ${
                        feature.title === 'Live Response' 
                          ? 'max-w-md max-h-96 object-contain mx-auto' 
                          : 'w-full max-w-lg max-h-80 object-cover'
                      }`}
                      placeholderType="feature"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works Flow */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">How Our System Works</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Crime Detected</h4>
                <p className="text-gray-600 text-sm">AI monitors traffic cameras and detects criminal behavior instantly</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Suspect Tagged</h4>
                <p className="text-gray-600 text-sm">System captures face, clothing, vehicle details and creates digital tag</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Network Tracks</h4>
                <p className="text-gray-600 text-sm">Camera network follows tagged suspect across the city with complete coverage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Police Alerted</h4>
                <p className="text-gray-600 text-sm">Real time updates sent to police mobile app for immediate pursuit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default VisionSection;
