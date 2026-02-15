import React from 'react';

const RoadmapSection = () => (
    <section id="roadmap" className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-20">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Development Roadmap</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    Our journey from concept to reality - tracking progress every step of the way.
                </p>
            </div>

            {/* Mobile-first responsive roadmap */}
            <div className="block lg:hidden space-y-8">
                {[
                    { phase: 'Day 1', title: 'The Idea', desc: 'Revolutionary AI security concept', status: 'completed' },
                    { phase: 'Month 5', title: 'Basic Detection', desc: 'Core AI algorithms developed', status: 'completed' },
                    { phase: 'Month 6', title: 'Seeking Funding', desc: 'Pursuing investment opportunities', status: 'current' },
                    { phase: 'Month 12', title: 'Working Prototype', desc: 'Full-scale prototype ready', status: 'future' },
                    { phase: 'Month 15', title: 'Market Ready', desc: 'Deployment and scaling', status: 'future' }
                ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className={`w-8 h-8 rounded-full border-4 flex-shrink-0 mt-2 ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-300' :
                                item.status === 'current' ? 'bg-blue-500 border-blue-300 animate-pulse' :
                                    'bg-gray-300 border-gray-200'
                            } shadow-lg`}></div>

                        <div className="flex-1">
                            <div
                                className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${item.status === 'completed' ? 'border-emerald-500 bg-emerald-50' :
                                        item.status === 'current' ? 'border-blue-500 bg-blue-50' :
                                            'border-gray-300 bg-gray-50'
                                    }`}
                            >
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${item.status === 'completed' ? 'bg-emerald-200 text-emerald-800' :
                                        item.status === 'current' ? 'bg-blue-200 text-blue-800' :
                                            'bg-gray-200 text-gray-600'
                                    }`}>
                                    {item.phase}
                                </span>
                                <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop roadmap with SVG */}
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
                    {[
                        { phase: 'Day 1', title: 'The Idea', desc: 'Revolutionary AI security concept', status: 'completed', position: { top: '80%', left: '8%' } },
                        { phase: 'Month 5', title: 'Basic Detection', desc: 'Core AI algorithms developed', status: 'completed', position: { top: '65%', left: '25%' } },
                        { phase: 'Month 6', title: 'Seeking Funding', desc: 'Pursuing investment opportunities', status: 'current', position: { top: '70%', left: '42%' } },
                        { phase: 'Month 12', title: 'Working Prototype', desc: 'Full-scale prototype ready', status: 'future', position: { top: '50%', left: '75%' } },
                        { phase: 'Month 15', title: 'Market Ready', desc: 'Deployment and scaling', status: 'future', position: { top: '30%', left: '92%' } }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ top: item.position.top, left: item.position.left }}
                        >
                            <div className={`w-6 h-6 rounded-full border-4 ${item.status === 'completed' ? 'bg-emerald-500 border-emerald-300' :
                                    item.status === 'current' ? 'bg-blue-500 border-blue-300 animate-pulse' :
                                        'bg-gray-300 border-gray-200'
                                } shadow-lg mb-3 mx-auto`}></div>

                            <div
                                className={`bg-white rounded-lg p-3 shadow-md w-40 border-l-4 ${item.status === 'completed' ? 'border-emerald-500 bg-emerald-50' :
                                        item.status === 'current' ? 'border-blue-500 bg-blue-50' :
                                            'border-gray-300 bg-gray-50'
                                    }`}
                            >
                                <div className="text-center">
                                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${item.status === 'completed' ? 'bg-emerald-200 text-emerald-800' :
                                            item.status === 'current' ? 'bg-blue-200 text-blue-800' :
                                                'bg-gray-200 text-gray-600'
                                        }`}>
                                        {item.phase}
                                    </span>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-600 text-xs">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default RoadmapSection;
