import React from 'react';
import { Eye, Users, Network, Zap } from 'lucide-react';

const VisionSection = () => {
    const features = [
        {
            icon: Eye,
            title: 'Real-Time Detection',
            desc: 'AI analyzes live feeds instantly',
            color: 'from-emerald-500 to-teal-500',
            image: '/ai detection software.png',
            detailDesc: 'Our advanced AI continuously monitors live camera feeds throughout urban areas, instantly identifying suspicious activities and criminal behavior in real-time. The system uses deep learning algorithms to recognize patterns and detect criminal activities through traffic CCTV networks, ensuring comprehensive coverage across metropolitan areas with edge technology integration.'
        },
        {
            icon: Users,
            title: 'Suspect ID',
            desc: 'Captures facial and vehicle details',
            color: 'from-blue-500 to-cyan-500',
            image: '/Criminal Identification Panel.png',
            detailDesc: 'When criminal activity is detected, our system immediately captures comprehensive suspect profiles including facial features (when visible), clothing colors, physical characteristics, and complete vehicle information such as make, color, and number plates. This detailed tagging system enables precise identification and tracking even when suspects attempt to escape the initial detection zone.'
        },
        {
            icon: Network,
            title: 'Network Tracking',
            desc: 'Tracks movement across city',
            color: 'from-purple-500 to-pink-500',
            image: '/City-Wide Tracking Map.png',
            detailDesc: 'Our interconnected camera network spans entire urban areas with zero blind spots. When a tagged suspect moves from one camera zone to another, the surrounding cameras automatically begin searching for the individual. This creates seamless citywide tracking, with each camera maintaining continuous surveillance as the suspect moves through different areas of the metropolitan network.'
        },
        {
            icon: Zap,
            title: 'Live Response',
            desc: 'Coordinates with law enforcement',
            color: 'from-red-500 to-orange-500',
            image: '/Police Mobile App Interface.png',
            detailDesc: 'The moment criminal activity is detected, our system instantly alerts law enforcement through our dedicated mobile application. Officers receive real-time suspect details, location tracking, and live movement patterns. The system provides continuous updates and map traces showing exactly where the suspect is heading, enabling police units to coordinate and intercept effectively.'
        }
    ];

    return (
        <section id="vision" className="py-12 sm:py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Intelligent Crime
                        <span className="block bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Detection & Response</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
                        A comprehensive security network that monitors traffic cameras and security feeds across urban areas.
                        Our AI system instantly detects criminal activity and coordinates real-time response with law enforcement,
                        ensuring continuous tracking and rapid intervention through advanced edge technology.
                    </p>
                </div>

                {/* Inline Feature Cards with Images */}
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''
                                }`}
                        >
                            {/* Content Side */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{feature.title}</h3>
                                </div>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.detailDesc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                        AI-Powered
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        Real-Time
                                    </span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                        Urban-Wide
                                    </span>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className={`relative flex justify-center items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl border border-gray-200">
                                    <img
                                        src={feature.image}
                                        alt={`${feature.title} demonstration`}
                                        className={`rounded-xl shadow-lg ${feature.title === 'Live Response'
                                                ? 'max-w-md max-h-96 object-contain mx-auto'
                                                : 'w-full max-w-lg max-h-80 object-cover'
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
