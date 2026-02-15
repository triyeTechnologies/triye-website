import React, { useState } from 'react';
import { Brain, Network, Zap, Target, BarChart3, Lock, X } from 'lucide-react';

const ConceptSection = () => {
    const [selectedTechCard, setSelectedTechCard] = useState(null);

    const concepts = [
        {
            icon: Brain,
            title: 'AI-Powered Detection',
            desc: 'Advanced machine learning algorithms analyze video feeds from traffic cameras in real-time to identify criminal activities with high precision and minimal false positives.',
            color: 'from-emerald-500 to-teal-500',
            detailContent: {
                title: 'AI-Powered Detection System',
                description: 'Our advanced artificial intelligence system continuously monitors traffic CCTV cameras across urban areas, using cutting-edge machine learning algorithms to detect criminal activities in real-time.',
                features: [
                    'Real-time analysis of traffic camera feeds throughout the urban network',
                    'Advanced pattern recognition to identify suspicious behaviors and criminal activities',
                    'Machine learning models trained specifically for urban security scenarios',
                    'Edge computing technology for instant processing and response',
                    'High accuracy detection with minimal false positive alerts',
                    'Continuous learning and improvement from new data patterns'
                ],
                technology: 'Built using state-of-the-art deep learning frameworks and edge computing infrastructure, our AI system processes thousands of camera feeds simultaneously while maintaining real-time response capabilities.'
            }
        },
        {
            icon: Network,
            title: 'Network Intelligence',
            desc: 'Interconnected camera systems throughout the urban area share information instantly, creating comprehensive security coverage with zero blind spots for seamless tracking.',
            color: 'from-blue-500 to-cyan-500',
            detailContent: {
                title: 'Intelligent Camera Network',
                description: 'A sophisticated network of interconnected cameras that creates a comprehensive surveillance web across the entire urban area, ensuring zero blind spots and seamless tracking capabilities.',
                features: [
                    'Citywide camera network with complete urban coverage',
                    'Zero blind spots through strategic camera positioning and coordination',
                    'Instant information sharing between connected camera nodes',
                    'Automatic handoff of suspect tracking between camera zones',
                    'Real-time coordination between traffic and security cameras',
                    'Network redundancy ensures continuous operation even if individual cameras fail'
                ],
                technology: 'Our network utilizes advanced edge computing and 5G connectivity to ensure instant communication between cameras, creating a unified surveillance ecosystem that responds as a single intelligent entity.'
            }
        },
        {
            icon: Zap,
            title: 'Instant Response',
            desc: 'Automated alert systems notify law enforcement within seconds through mobile applications, providing real-time tracking and location data for immediate action coordination.',
            color: 'from-yellow-500 to-orange-500',
            detailContent: {
                title: 'Real-Time Alert & Response System',
                description: 'Lightning-fast notification system that instantly alerts law enforcement the moment criminal activity is detected, providing all necessary information for immediate response and coordination.',
                features: [
                    'Instant alerts sent to police mobile app within seconds of detection',
                    'Real-time suspect location tracking and movement patterns',
                    'Live map updates showing suspect\'s route and predicted path',
                    'Detailed suspect information including appearance and vehicle details',
                    'Automated coordination with nearest available police units',
                    'Two-way communication between system and responding officers'
                ],
                technology: 'Built on high-speed communication networks with redundant alert pathways, ensuring that critical information reaches law enforcement instantly, even in high-traffic network conditions.'
            }
        },
        {
            icon: Target,
            title: 'Suspect Tagging & Tracking',
            desc: 'When suspects attempt to escape, our system creates detailed identification tags and tracks them seamlessly across the entire urban camera network.',
            color: 'from-red-500 to-pink-500',
            detailContent: {
                title: 'Advanced Suspect Tagging System',
                description: 'When criminal activity is detected and a suspect attempts to escape, our system immediately creates comprehensive identification tags and initiates citywide tracking protocols.',
                features: [
                    'Instant capture of suspect physical characteristics and clothing details',
                    'Vehicle identification including make, model, color, and license plate',
                    'Facial recognition tagging when faces are clearly visible',
                    'Automatic creation of searchable suspect profiles',
                    'Real-time tracking as suspects move through different camera zones',
                    'Persistent tracking even when suspects change appearance or vehicles'
                ],
                technology: 'Uses advanced computer vision and biometric analysis to create unique suspect signatures that can be tracked across multiple camera systems while maintaining accuracy even in challenging conditions.'
            }
        },
        {
            icon: BarChart3,
            title: 'Smart Analytics',
            desc: 'Comprehensive data analysis providing insights into crime patterns, hotspot identification, and trend analysis for optimized security resource allocation.',
            color: 'from-purple-500 to-indigo-500',
            detailContent: {
                title: 'Intelligent Crime Analytics',
                description: 'Advanced analytics engine that processes all security data to identify patterns, predict trends, and provide actionable insights for law enforcement strategy and resource allocation.',
                features: [
                    'Crime pattern analysis across different urban areas and time periods',
                    'Hotspot identification for proactive police deployment',
                    'Trend analysis to predict potential security risks',
                    'Resource allocation recommendations based on data insights',
                    'Performance metrics for response times and success rates',
                    'Predictive modeling for crime prevention strategies'
                ],
                technology: 'Leverages big data processing and machine learning algorithms to analyze vast amounts of security data, providing law enforcement with strategic insights for more effective crime prevention and response.'
            }
        },
        {
            icon: Lock,
            title: 'Privacy-First Design',
            desc: 'Built with privacy protection and data security at its core, ensuring compliance with surveillance ethics and maintaining public trust.',
            color: 'from-green-500 to-emerald-500',
            detailContent: {
                title: 'Privacy & Security Framework',
                description: 'Our system is designed with privacy protection as a fundamental principle, ensuring that all surveillance activities comply with ethical standards and legal requirements while maintaining effectiveness.',
                features: [
                    'Data encryption for all communications and stored information',
                    'Privacy-compliant facial recognition with automatic data purging',
                    'Role-based access control for law enforcement personnel',
                    'Audit trails for all system activities and data access',
                    'Compliance with national and international privacy regulations',
                    'Transparent reporting on system usage and privacy protections'
                ],
                technology: 'Implements advanced encryption, secure data handling protocols, and privacy-preserving AI techniques to ensure that public safety enhancement never comes at the cost of individual privacy rights.'
            }
        }
    ];

    return (
        <section id="concept" className="py-12 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Technology Concepts</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        The foundation of our revolutionary security platform built on advanced AI and network intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {concepts.map((concept, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedTechCard(concept)}
                            className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-r ${concept.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                                <concept.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                                {concept.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm mb-3">
                                {concept.desc}
                            </p>

                            <div className="text-blue-600 font-medium text-xs">
                                Click to learn more →
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Technology Detail Modal */}
            {selectedTechCard && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedTechCard(null)}
                >
                    <div
                        className="bg-white rounded-2xl p-4 sm:p-6 max-w-3xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 bg-gradient-to-r ${selectedTechCard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                    <selectedTechCard.icon className="w-5 h-5 text-white" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{selectedTechCard.detailContent.title}</h2>
                            </div>
                            <button
                                onClick={() => setSelectedTechCard(null)}
                                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <p className="text-base text-gray-600 leading-relaxed">
                                {selectedTechCard.detailContent.description}
                            </p>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Features</h3>
                                <ul className="space-y-2">
                                    {selectedTechCard.detailContent.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Implementation</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {selectedTechCard.detailContent.technology}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ConceptSection;
