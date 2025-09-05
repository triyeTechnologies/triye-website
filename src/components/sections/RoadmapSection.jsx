import React from 'react';
import { ROADMAP_ITEMS } from '../../data/constants';

const RoadmapSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return {
          dot: 'bg-emerald-500 border-emerald-300',
          card: 'border-emerald-500 bg-emerald-50',
          badge: 'bg-emerald-200 text-emerald-800'
        };
      case 'current':
        return {
          dot: 'bg-blue-500 border-blue-300 animate-pulse',
          card: 'border-blue-500 bg-blue-50',
          badge: 'bg-blue-200 text-blue-800'
        };
      default:
        return {
          dot: 'bg-gray-300 border-gray-200',
          card: 'border-gray-300 bg-gray-50',
          badge: 'bg-gray-200 text-gray-600'
        };
    }
  };

  return (
    <section id="roadmap" className="py-16 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Development Roadmap
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey from concept to reality - tracking progress every step of the way.
          </p>
        </div>

        <div className="block lg:hidden space-y-8">
          {ROADMAP_ITEMS.map((item, index) => {
            const colors = getStatusColor(item.status);
            
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-8 h-8 rounded-full border-4 flex-shrink-0 mt-2 ${colors.dot} shadow-lg`}></div>
                
                <div className="flex-1">
                  <div className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${colors.card}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${colors.badge}`}>
                      {item.phase}
                    </span>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block relative h-96">
          <svg 
            viewBox="0 0 1200 400" 
            className="w-full h-full absolute inset-0 z-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M 96 320 Q 200 290 300 260 Q 400 270 504 280 Q 700 240 900 200 Q 1000 160 1104 120"
              stroke="url(#roadmapGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              className="drop-shadow-lg"
            />
            <defs>
              <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="25%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#6366F1" />
                <stop offset="75%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 h-full">
            {ROADMAP_ITEMS.map((item, index) => {
              const colors = getStatusColor(item.status);
              const positions = [
                { top: '80%', left: '8%' },
                { top: '65%', left: '25%' },
                { top: '70%', left: '42%' },
                { top: '50%', left: '75%' },
                { top: '30%', left: '92%' }
              ];

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={positions[index]}
                >
                  <div className={`w-6 h-6 rounded-full border-4 ${colors.dot} shadow-lg mb-3 mx-auto`}></div>

                  <div className={`bg-white rounded-lg p-3 shadow-md w-40 border-l-4 ${colors.card}`}>
                    <div className="text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${colors.badge}`}>
                        {item.phase}
                      </span>
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;