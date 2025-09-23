import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Eye, 
  Network, 
  Zap, 
  Target, 
  BarChart3, 
  Lock, 
  Brain, 
  Camera, 
  AlertTriangle,
  MapPin,
  Users,
  Building2,
  Car,
  GraduationCap,
  ShoppingBag,
  Package,
  Mail,
  ChevronDown,
  Play,
  Sparkles,
  Cpu,
  Radar,
  Activity,
  Instagram,
  Linkedin,
  User,
  Menu,
  X,
  Phone,
  // New imports for features section
  FileText,
  Flame,
  Navigation,
  Crosshair,
  Trash2,
  Cigarette,
  Clock,
  UserCheck,
  Siren,
  Crown,
  Ban,
  PersonStanding
} from 'lucide-react';
import EmailForm from './EmailForm';

const TriyeWebsite = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [selectedTechCard, setSelectedTechCard] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['home', 'vision', 'features', 'video', 'concept', 'roadmap', 'future', 'mission', 'founders', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const particles = [];

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 3 + 2;
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.opacity = Math.random() * 0.8 + 0.4;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        }

        draw() {
          ctx.fillStyle = `rgba(102, 126, 234, ${this.opacity})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Draw connections with better visibility
        particles.forEach((a, index) => {
          particles.slice(index + 1).forEach(b => {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.strokeStyle = `rgba(102, 126, 234, ${0.4 * (1 - distance / 120)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
    );
  };

  const Header = () => (
    <header className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Triye Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <img 
              src="/triye.png" 
              alt="Triye" 
              className="h-8 sm:h-10"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {[
              { name: 'Vision', id: 'vision' },
              { name: 'Features', id: 'features' },
              { name: 'Technology', id: 'concept' },
              { name: 'Roadmap', id: 'roadmap' },
              { name: 'Future', id: 'future' },
              { name: 'Mission', id: 'mission' },
              { name: 'Founders', id: 'founders' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className={`px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium min-h-[48px] flex items-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 pt-4">
              {[
                { name: 'Vision', id: 'vision' },
                { name: 'Features', id: 'features' },
                { name: 'Technology', id: 'concept' },
                { name: 'Roadmap', id: 'roadmap' },
                { name: 'Future', id: 'future' },
                { name: 'Mission', id: 'mission' },
                { name: 'Founders', id: 'founders' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 hover:bg-gray-50 min-h-[48px] flex items-center ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-3 rounded-lg font-medium mt-2 min-h-[48px] flex items-center justify-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );

  const HeroSection = () => (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero section.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-900/70"></div>
      </div>
      
      <ParticleBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            The Future of
            <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Smart Security
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered surveillance system that detects criminal activity in real-time, 
            tracks suspects across multiple cameras, and coordinates with law enforcement instantly.
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('features').offsetTop - 100, behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold flex items-center justify-center space-x-2 min-h-[44px] hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              <span>Explore Our Features</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );

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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
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
                      className={`rounded-xl shadow-lg ${
                        feature.title === 'Live Response' 
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

  // New TracedFeaturesSection Component
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
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
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

  const VideoSection = () => (
    <section id="video" className="py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See Traced In Action</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Watch our comprehensive demo showing how Traced AI security system works in real-world scenarios.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/sotat1.png"
            >
              <source src="/Traced by Triye Demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Action Detection Videos */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Real-Time Action Detection</h3>
            <p className="text-base text-gray-600">
              Watch Traced identify different human activities with skeletal tracking technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { src: '/video1.mp4' },
              { src: '/video2.mp4' },
              { src: '/video3.mp4' },
              { src: '/video4.mp4' }
            ].map((video, index) => (
              <div key={index}>
                <video
                  className="w-full h-auto rounded-xl shadow-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const ConceptSection = () => {
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
              <div className={`w-8 h-8 rounded-full border-4 flex-shrink-0 mt-2 ${
                item.status === 'completed' ? 'bg-emerald-500 border-emerald-300' :
                item.status === 'current' ? 'bg-blue-500 border-blue-300 animate-pulse' :
                'bg-gray-300 border-gray-200'
              } shadow-lg`}></div>
              
              <div className="flex-1">
                <div 
                  className={`bg-white rounded-lg p-4 shadow-md border-l-4 ${
                    item.status === 'completed' ? 'border-emerald-500 bg-emerald-50' : 
                    item.status === 'current' ? 'border-blue-500 bg-blue-50' : 
                    'border-gray-300 bg-gray-50'
                  }`}
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                    item.status === 'completed' ? 'bg-emerald-200 text-emerald-800' :
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
                <div className={`w-6 h-6 rounded-full border-4 ${
                  item.status === 'completed' ? 'bg-emerald-500 border-emerald-300' :
                  item.status === 'current' ? 'bg-blue-500 border-blue-300 animate-pulse' :
                  'bg-gray-300 border-gray-200'
                } shadow-lg mb-3 mx-auto`}></div>

                <div 
                  className={`bg-white rounded-lg p-3 shadow-md w-40 border-l-4 ${
                    item.status === 'completed' ? 'border-emerald-500 bg-emerald-50' : 
                    item.status === 'current' ? 'border-blue-500 bg-blue-50' : 
                    'border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                      item.status === 'completed' ? 'bg-emerald-200 text-emerald-800' :
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

  const FutureProductsSection = () => (
    <section id="future" className="py-16 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Future Product Vision</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Expanding our core technology into comprehensive security solutions for communities and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Building2, title: 'Community Guard', desc: 'Complete security solution for gated communities with access control and visitor management.', color: 'from-emerald-500 to-teal-500' },
            { icon: Car, title: 'Smart Parking Pro', desc: 'AI-powered parking management with license plate recognition and automated payment systems.', color: 'from-blue-500 to-cyan-500' },
            { icon: Shield, title: 'Enterprise Shield', desc: 'Advanced security platform for commercial properties with multi-site management capabilities.', color: 'from-purple-500 to-pink-500' },
            { icon: GraduationCap, title: 'Campus Protect', desc: 'Educational institution security with student safety features and emergency response.', color: 'from-orange-500 to-red-500' },
            { icon: ShoppingBag, title: 'Retail Secure', desc: 'Specialized retail security with theft prevention and customer analytics intelligence.', color: 'from-yellow-500 to-orange-500' },
            { icon: Package, title: 'Warehouse Guard', desc: 'Comprehensive warehouse security with inventory protection and worker safety monitoring.', color: 'from-indigo-500 to-purple-500' }
          ].map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                Coming Soon
              </div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <product.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                {product.title}
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const MissionSection = () => (
    <section id="mission" className="py-16 sm:py-32 text-white relative overflow-hidden" style={{ backgroundColor: '#2D3748' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">Our Mission</h2>
        <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed text-gray-200">
          We envision a world where advanced AI technology makes communities safer, response times faster, 
          and crime prevention more effective. Through innovative surveillance solutions, we're building 
          the foundation for smarter, more secure urban areas.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: Target, title: 'Real-Time Detection', desc: 'Instant identification and tracking of security threats', color: 'bg-red-500/60' },
            { icon: Network, title: 'Connected Networks', desc: 'Unified camera systems with zero blind spots', color: 'bg-blue-500/60' },
            { icon: Zap, title: 'Rapid Response', desc: 'Coordinated law enforcement within seconds', color: 'bg-yellow-500/60' },
            { icon: Sparkles, title: 'Safer Communities', desc: 'Technology that protects what matters most', color: 'bg-emerald-500/60' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
            >
              <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30 shadow-lg`}>
                <stat.icon className="w-10 h-10 text-white drop-shadow-lg" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">{stat.title}</h4>
              <p className="text-gray-300 text-sm sm:text-base">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const FoundersSection = () => (
    <section id="founders" className="py-16 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Founders</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary team behind Triye's revolutionary AI security technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {[
            {
              name: 'Akshay R Kumar',
              role: 'CEO & Co-founder',
              image: '/aksh.jpg',
              hasImage: true,
              gradient: 'from-emerald-500 to-blue-500'
            },
            {
              name: 'Aditya Belludi',
              role: 'CTO & Co-founder',
              image: '/adi.png',
              hasImage: true,
              gradient: 'from-blue-500 to-purple-500'
            },
            {
              name: 'Akhilesh N Naidu',
              role: 'COO & Co-founder',
              image: '/akhi.png',
              hasImage: true,
              gradient: 'from-purple-500 to-pink-500'
            }
          ].map((founder, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 relative">
                <div 
                  className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 shadow-xl border-4 border-white"
                >
                  {founder.hasImage ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <User className="w-24 h-24 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-gray-600">
                  {founder.role}
                </p>
              </div>

              <div className="mt-4 w-12 h-1 bg-gray-300 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactSection = () => (
    <section id="contact" className="py-16 sm:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-300">
          Connect with us through social media or drop us a message. Follow our journey and 
          stay updated with the latest developments in AI security technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <a 
            href="https://www.instagram.com/triye_technologies/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center hover:bg-white/20 transition-all duration-300"
          >
            <Instagram className="w-12 h-12 mx-auto mb-4 text-pink-400" />
            <h4 className="text-lg sm:text-xl font-bold mb-3">Instagram</h4>
            <p className="text-gray-300 text-sm sm:text-base break-all">
              @triye_technologies
            </p>
          </a>

          <a 
            href="https://www.linkedin.com/company/triye-technologies/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h4 className="text-lg sm:text-xl font-bold mb-3">LinkedIn</h4>
            <p className="text-gray-300 text-sm sm:text-base break-all">
              Triye Technologies
            </p>
          </a>

          <div 
            onClick={() => setShowEmailForm(true)}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h4 className="text-lg sm:text-xl font-bold mb-3">Email</h4>
            <p className="text-gray-300 text-sm sm:text-base break-all">
              triye3@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <img 
            src="/logo.png" 
            alt="Triye Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 filter brightness-0 invert"
          />
          <div>
            <img 
              src="/triye1.png" 
              alt="Triye" 
              className="h-6 sm:h-8 filter brightness-0 invert"
            />
            <div className="text-gray-400 text-xs sm:text-sm">Eye that never blinks!</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm sm:text-base">
          © 2025 Triye. All rights reserved. | Currently in development phase.
        </p>
      </div>
    </footer>
  );

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <VisionSection />
      <TracedFeaturesSection />
      <VideoSection />
      <ConceptSection />
      <RoadmapSection />
      <FutureProductsSection />
      <MissionSection />
      <FoundersSection />
      <ContactSection />
      <Footer />

      {/* Email Form Modal */}
      {showEmailForm && (
        <EmailForm 
          onClose={() => setShowEmailForm(false)} 
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg) scale(1.05); 
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbars */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse,
          .animate-bounce {
            animation: none;
          }
          
          * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TriyeWebsite;