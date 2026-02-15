import React, { useState } from 'react';
import {
    User,
    Eye,
    UserCheck,
    Users,
    Shield,
    Crosshair,
    Activity,
    Crown,
    Building2,
    Car,
    FileText,
    Ban,
    Clock,
    AlertTriangle,
    Flame,
    Navigation,
    Target,
    Radar,
    Trash2,
    Cigarette,
    MapPin,
    Siren,
    Camera,
    Zap
} from 'lucide-react';

const TracedFeaturesSection = () => {
    const [activeCategory, setActiveCategory] = useState('person');

    const featureCategories = [
        {
            id: 'person',
            name: 'Person Intelligence',
            icon: User,
            color: 'from-blue-500 to-cyan-500',
            features: [
                {
                    icon: Eye,
                    title: 'Face Recognition',
                    description: 'Advanced facial detection with gender and age estimation for comprehensive suspect profiling',
                    capabilities: ['Facial feature mapping', 'Gender identification', 'Age estimation', 'Face reidentification across cameras']
                },
                {
                    icon: UserCheck,
                    title: 'Person Reidentification',
                    description: 'Track individuals across multiple cameras using clothing patterns and body structure analysis',
                    capabilities: ['Clothing pattern matching', 'Body structure analysis', 'Cross-camera tracking', 'Movement pattern recognition']
                },
                {
                    icon: Users,
                    title: 'Crowd Behavior Analysis',
                    description: 'Monitor crowd density and detect unusual group behaviors for public safety',
                    capabilities: ['Crowd density monitoring', 'Unusual gathering detection', 'Panic behavior identification', 'Event crowd management']
                }
            ]
        },
        {
            id: 'criminal',
            name: 'Criminal Activity Detection',
            icon: Shield,
            color: 'from-red-500 to-pink-500',
            features: [
                {
                    icon: Crosshair,
                    title: 'Theft & Snatching',
                    description: 'Real-time detection of chain snatching, purse theft, and pickpocketing incidents',
                    capabilities: ['Chain snatching detection', 'Bag snatching alerts', 'Pickpocket identification', 'Theft pattern analysis']
                },
                {
                    icon: Activity,
                    title: 'Violence Detection',
                    description: 'Identify fighting, assault, mob violence, and aggressive behavior patterns',
                    capabilities: ['Fight detection', 'Assault identification', 'Mob violence alerts', 'Weapon usage detection']
                },
                {
                    icon: Crown,
                    title: 'Harassment Prevention',
                    description: 'Detect harassment incidents and suspicious stalking behavior',
                    capabilities: ['Harassment detection', 'Stalking behavior identification', 'Victim protection alerts', 'Pattern-based prevention']
                },
                {
                    icon: Building2,
                    title: 'Trespassing Detection',
                    description: 'Monitor unauthorized entry into private properties and restricted areas',
                    capabilities: ['Boundary violation alerts', 'Unauthorized entry detection', 'Perimeter monitoring', 'Access control integration']
                }
            ]
        },
        {
            id: 'vehicle',
            name: 'Vehicle Intelligence',
            icon: Car,
            color: 'from-green-500 to-emerald-500',
            features: [
                {
                    icon: Car,
                    title: 'Vehicle Recognition',
                    description: 'Comprehensive vehicle identification including make, model, color, and type classification',
                    capabilities: ['Make & model identification', 'Color detection', 'Vehicle type classification', 'Cross-camera reidentification']
                },
                {
                    icon: FileText,
                    title: 'Number Plate Detection',
                    description: 'Automatic license plate recognition with cross-camera tracking capabilities',
                    capabilities: ['License plate reading', 'Multi-camera plate tracking', 'Plate verification', 'Vehicle history matching']
                },
                {
                    icon: Ban,
                    title: 'Traffic Violations',
                    description: 'Monitor compliance with Indian traffic rules and regulations',
                    capabilities: ['One-way violations', 'Signal jumping detection', 'Helmet & seatbelt monitoring', 'No-parking violations', 'Rash driving detection', 'Speed limit enforcement']
                },
                {
                    icon: Clock,
                    title: 'Traffic Management',
                    description: 'Intelligent traffic signal control and flow optimization',
                    capabilities: ['Signal timing optimization', 'Traffic flow analysis', 'Congestion management', 'Emergency vehicle priority']
                }
            ]
        },
        {
            id: 'safety',
            name: 'Safety & Hazards',
            icon: AlertTriangle,
            color: 'from-orange-500 to-red-500',
            features: [
                {
                    icon: AlertTriangle,
                    title: 'Accident Detection',
                    description: 'Immediate identification of vehicle accidents and emergency situations',
                    capabilities: ['Collision detection', 'Emergency response alerts', 'Severity assessment', 'Automatic dispatch coordination']
                },
                {
                    icon: Flame,
                    title: 'Fire Hazard Detection',
                    description: 'Early detection of fire and smoke for rapid emergency response',
                    capabilities: ['Smoke detection', 'Fire identification', 'Emergency alert system', 'Evacuation coordination']
                },
                {
                    icon: Navigation,
                    title: 'Road Obstruction',
                    description: 'Identify blocked roads, fallen objects, and traffic impediments',
                    capabilities: ['Road blockage detection', 'Obstacle identification', 'Traffic rerouting alerts', 'Debris monitoring']
                },
                {
                    icon: Target,
                    title: 'Weapon Detection',
                    description: 'Identify dangerous weapons and potential security threats',
                    capabilities: ['Firearm detection', 'Knife identification', 'Suspicious object alerts', 'Threat level assessment']
                }
            ]
        },
        {
            id: 'compliance',
            name: 'Public Compliance',
            icon: Radar,
            color: 'from-purple-500 to-indigo-500',
            features: [
                {
                    icon: Trash2,
                    title: 'Littering Detection',
                    description: 'Monitor and detect illegal dumping and littering activities',
                    capabilities: ['Waste dumping detection', 'Littering identification', 'Environmental monitoring', 'Cleanup coordination']
                },
                {
                    icon: Cigarette,
                    title: 'Smoking Violations',
                    description: 'Detect smoking in restricted public areas and enclosed spaces',
                    capabilities: ['No-smoking zone monitoring', 'Public area compliance', 'Health regulation enforcement', 'Violation documentation']
                },
                {
                    icon: MapPin,
                    title: 'Loitering Detection',
                    description: 'Identify suspicious loitering and unusual lingering behavior',
                    capabilities: ['Loitering pattern recognition', 'Time-based monitoring', 'Suspicious behavior alerts', 'Area security enhancement']
                },
                {
                    icon: Siren,
                    title: 'Emergency Response',
                    description: 'Prioritize emergency vehicles and coordinate rapid response',
                    capabilities: ['Emergency vehicle detection', 'Response time optimization', 'Route clearance', 'Multi-agency coordination']
                }
            ]
        }
    ];

    const activeFeatures = featureCategories.find(cat => cat.id === activeCategory);

    return (
        <section id="features" className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Traced AI Features
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Comprehensive AI-powered surveillance capabilities designed for Indian urban environments.
                        From real-time crime detection to traffic management, Traced delivers complete city-wide security intelligence.
                    </p>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {featureCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category.id
                                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                <IconComponent className="w-5 h-5" />
                                <span>{category.name}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Features Display */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeFeatures?.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            >
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className={`w-12 h-12 bg-gradient-to-r ${activeFeatures.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <FeatureIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-800 text-sm">Key Capabilities:</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {feature.capabilities.map((capability, capIndex) => (
                                            <div key={capIndex} className="flex items-center space-x-2">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${activeFeatures.color} rounded-full flex-shrink-0`}></div>
                                                <span className="text-sm text-gray-700">{capability}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Complete Urban Surveillance Solution
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Traced integrates all these features into a unified platform, providing law enforcement
                            with comprehensive situational awareness and rapid response capabilities across entire cities.
                        </p>
                        <div className="flex justify-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                                <Camera className="w-4 h-4" />
                                <span>Real-time Processing</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Zap className="w-4 h-4" />
                                <span>Instant Alerts</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Activity className="w-4 h-4" />
                                <span>24/7 Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TracedFeaturesSection;
