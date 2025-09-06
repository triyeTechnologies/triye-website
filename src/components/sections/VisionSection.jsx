import React from 'react';
import { Eye, Shield, Zap } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2 sm:mb-4 leading-tight">
            Intelligent Crime
            <span className="block text-red-600 hero-subheading">
              Detection & Response
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 sm:mt-8">
            Imagine a city-wide security network that never sleeps. Our AI system continuously 
            monitors traffic cameras and security feeds, instantly detecting criminal activity and 
            coordinating real-time response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="card card-hover text-center">
            <div className="bg-green-100 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 hero-subheading">
              Real-Time Detection
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our advanced AI continuously monitors traffic cameras throughout the metropolitan 
              area, instantly detecting criminal behavior as it unfolds. The moment suspicious 
              activity is identified, our system captures the complete scene and immediately alerts 
              the appropriate authorities.
            </p>
          </div>

          <div className="card card-hover text-center">
            <div className="bg-blue-100 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 hero-subheading">
              Cross-Camera Tracking
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              When a suspect is detected, our AI seamlessly tracks them across multiple camera 
              networks, creating a comprehensive movement profile. This interconnected surveillance 
              ensures no criminal activity goes unnoticed, even across large urban areas.
            </p>
          </div>

          <div className="card card-hover text-center">
            <div className="bg-purple-100 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 hero-subheading">
              Instant Coordination
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The moment criminal activity is detected, our system instantly coordinates with law 
              enforcement agencies, providing real-time location data, suspect descriptions, and 
              predicted movement patterns to enable rapid, targeted response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
