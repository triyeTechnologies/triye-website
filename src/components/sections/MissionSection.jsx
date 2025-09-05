import React from 'react';
import { Target, Network, Zap, Sparkles } from 'lucide-react';

const MissionSection = () => {
  const missionStats = [
    { 
      icon: Target, 
      title: 'Traffic Camera Detection', 
      desc: 'AI monitors traffic cameras to instantly identify criminal behavior throughout the city'
    },
    { 
      icon: Network, 
      title: 'Complete Coverage', 
      desc: 'Connected camera network tracks suspects seamlessly across the entire metropolitan area'
    },
    { 
      icon: Zap, 
      title: 'Real Time Tracking', 
      desc: 'Police receive live updates on mobile apps for coordinated pursuit and strategic response'
    },
    { 
      icon: Sparkles, 
      title: 'Complete Identification', 
      desc: 'System tags suspects with facial, clothing, and vehicle details for accurate tracking'
    }
  ];

  return (
    <section id="mission" className="py-16 sm:py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)] opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">Our Mission</h2>
        <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed text-slate-200">
          We are revolutionizing urban security by transforming existing traffic camera infrastructure into an intelligent 
          crime detection and tracking system. Our AI technology enables instant criminal identification, real time suspect 
          tracking across camera networks, and immediate police coordination through mobile applications for safer communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {missionStats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-lg">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">{stat.title}</h4>
                <p className="text-slate-300 text-sm sm:text-base">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;