import { getImagePath } from '../utils/assetUtils';

export const SITE_CONFIG = {
  name: 'Triye',
  tagline: 'Eye that never blinks!',
  description: 'Revolutionary AI-powered security solutions with real-time crime detection and network intelligence',
  url: 'https://triye.netlify.app',
  email: 'triye3@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/triye_technologies/',
    linkedin: 'https://www.linkedin.com/company/triye-technologies/',
  }
};

export const NAVIGATION_ITEMS = [
  { name: 'Vision', id: 'vision' },
  { name: 'Technology', id: 'concept' },
  { name: 'Roadmap', id: 'roadmap' },
  { name: 'Future', id: 'future' },
  { name: 'Mission', id: 'mission' },
  { name: 'Founders', id: 'founders' }
];

export const VISION_FEATURES = [
  { 
    icon: 'Eye', 
    title: 'Real-Time Detection', 
    desc: 'AI analyzes traffic camera feeds instantly', 
    color: 'from-emerald-500 to-teal-500',
    image: getImagePath('ai-detection-software.png'),
    detailDesc: 'Our advanced AI continuously monitors traffic cameras throughout the metropolitan area, instantly detecting criminal behavior as it unfolds. The moment suspicious activity is identified, our system captures the complete scene and immediately alerts the nearest police units for rapid response.'
  },
  { 
    icon: 'Users', 
    title: 'Suspect ID', 
    desc: 'Captures facial and vehicle details instantly', 
    color: 'from-blue-500 to-cyan-500',
    image: getImagePath('criminal-identification-panel.png'),
    detailDesc: 'When crime is detected, our system instantly creates a comprehensive digital profile of the suspect. This includes facial recognition data when visible, detailed clothing descriptions with colors and distinctive features, plus complete vehicle information including make, model, color, and license plate details.'
  },
  { 
    icon: 'Network', 
    title: 'Network Tracking', 
    desc: 'Tracks movement across city infrastructure', 
    color: 'from-purple-500 to-pink-500',
    image: getImagePath('city-wide-tracking-map.png'),
    detailDesc: 'As criminals attempt to escape, our interconnected traffic camera network seamlessly tracks their movement across the entire city. When one camera loses visual contact, surrounding cameras automatically begin searching for the tagged individual, ensuring continuous monitoring with complete coverage.'
  },
  { 
    icon: 'Zap', 
    title: 'Live Response', 
    desc: 'Coordinates with law enforcement instantly', 
    color: 'from-red-500 to-orange-500',
    image: getImagePath('police-mobile-app-interface.png'),
    detailDesc: 'Police receive immediate notifications through dedicated mobile applications with complete suspect details and real time tracking information. As criminals move through the camera network, officers get continuous updates showing exact locations, enabling strategic positioning and coordinated pursuit operations.'
  }
];

export const TECH_CONCEPTS = [
  { 
    icon: 'Brain', 
    title: 'AI-Powered Detection', 
    desc: 'Advanced machine learning algorithms monitor traffic cameras in real-time to identify criminal behavior instantly across the city.', 
    color: 'from-emerald-500 to-teal-500',
    detailedInfo: {
      overview: 'Our AI detection system continuously monitors traffic cameras throughout the city, instantly analyzing footage to identify criminal behavior as it occurs. The moment suspicious activity is detected, the system immediately captures and processes the entire scene for evidence.',
      keyFeatures: [
        'Real-time analysis of traffic camera networks across the metropolitan area',
        'Instant recognition of criminal behavior and suspicious activities', 
        'Automatic scene capture and evidence preservation',
        'Immediate alert generation to law enforcement mobile applications',
        'Continuous learning from new criminal patterns and scenarios'
      ],
      benefits: [
        'Detects crimes within seconds through traffic camera monitoring',
        'Provides instant alerts to police mobile apps for immediate response',
        'Captures complete criminal scenes automatically for evidence',
        'Works seamlessly with existing traffic camera infrastructure',
        'Reduces crime response time from minutes to seconds'
      ],
      technicalSpecs: [
        'Processing: Real-time analysis of traffic camera feeds',
        'Detection Speed: Criminal behavior identified within 2-3 seconds',
        'Coverage: Monitors entire city traffic camera network simultaneously',
        'Alert Delivery: Instant notifications to police mobile applications'
      ]
    }
  },
  { 
    icon: 'Network', 
    title: 'Network Intelligence', 
    desc: 'City-wide camera network with edge technology that ensures complete coverage and seamless criminal tracking across all connected cameras.', 
    color: 'from-blue-500 to-cyan-500',
    detailedInfo: {
      overview: 'Our network intelligence creates a comprehensive surveillance ecosystem where every traffic camera in the city works together through advanced edge technology. When a criminal moves from one camera coverage area to another, the system seamlessly transfers tracking responsibilities, ensuring continuous monitoring with complete coverage.',
      keyFeatures: [
        'Edge computing technology enabling distributed processing across camera nodes',
        'Seamless handoff between cameras as criminals move through the city',
        'Intelligent coordination of surrounding cameras for comprehensive coverage',
        'Real-time communication between all cameras in the network',
        'Complete coverage throughout the entire metropolitan area'
      ],
      benefits: [
        'Complete city coverage with no areas where criminals can hide',
        'Automatic camera coordination ensures continuous tracking',
        'Edge processing reduces latency and improves response times',
        'Seamless integration with existing traffic camera systems',
        'Network redundancy ensures system reliability and uptime'
      ],
      technicalSpecs: [
        'Network Scope: City-wide coverage connecting all traffic cameras',
        'Edge Processing: Local AI computation at each camera node',
        'Handoff Speed: Seamless tracking transfer between cameras in under 1 second',
        'Coverage: Complete monitoring across entire urban area'
      ]
    }
  },
  { 
    icon: 'Zap', 
    title: 'Instant Response', 
    desc: 'Immediate police notification system that delivers real time criminal tracking updates directly to law enforcement mobile applications.', 
    color: 'from-yellow-500 to-orange-500',
    detailedInfo: {
      overview: 'The moment criminal behavior is detected, our system instantly alerts the nearest police units through dedicated mobile applications. Officers receive complete suspect information, real time tracking, and continuous updates as the situation develops, enabling the fastest possible response.',
      keyFeatures: [
        'Instant mobile app notifications to nearest police units',
        'Real time suspect location tracking displayed on officer devices',
        'Complete criminal scene information delivered immediately',
        'Continuous updates as criminals move through camera network',
        'Direct communication channel between system and law enforcement'
      ],
      benefits: [
        'Police receive alerts within seconds of crime detection',
        'Real time tracking allows officers to intercept criminals during escape',
        'Complete suspect information improves arrest success rates',
        'Reduces overall crime response time dramatically',
        'Enables proactive rather than reactive policing'
      ],
      technicalSpecs: [
        'Alert Speed: Notifications delivered to police apps within 2 seconds',
        'Tracking Updates: Real time location updates every few seconds',
        'Coverage: Alerts sent to all units within optimal response radius',
        'Platform: Dedicated mobile application for law enforcement use'
      ]
    }
  },
  { 
    icon: 'Target', 
    title: 'Criminal Identification', 
    desc: 'Advanced tagging system that captures complete suspect profiles including facial features, clothing details, vehicle information and license plates.', 
    color: 'from-red-500 to-pink-500',
    detailedInfo: {
      overview: 'When criminal behavior is detected, our system immediately creates a comprehensive digital profile of the suspect. This includes facial recognition data, detailed clothing descriptions, vehicle information including make, model, color, and license plate numbers. This digital tag enables precise tracking even as the criminal attempts to escape.',
      keyFeatures: [
        'Instant facial recognition and biometric profiling of suspects',
        'Detailed clothing analysis including colors, patterns, and distinctive features',
        'Complete vehicle identification including make, model, color, and license plate',
        'Digital tagging system that follows suspects across camera networks',
        'Multi-factor identification that works even with partial visibility'
      ],
      benefits: [
        'Creates unique digital fingerprint for each criminal',
        'Enables tracking even when suspects change locations or vehicles',
        'Provides complete suspect description to responding officers',
        'Works effectively even with limited camera angles or lighting',
        'Builds evidence package automatically for prosecution'
      ],
      technicalSpecs: [
        'Facial Recognition: Advanced biometric analysis with high accuracy rates',
        'Clothing Analysis: Color, pattern, and style recognition algorithms',
        'Vehicle ID: Make, model, color, and license plate detection',
        'Tagging: Persistent digital markers that follow suspects across cameras'
      ]
    }
  },
  { 
    icon: 'BarChart3', 
    title: 'Live Tracking Maps', 
    desc: 'Real time mapping system that shows criminal movement paths to police, enabling pursuit coordination and strategic positioning.', 
    color: 'from-purple-500 to-indigo-500',
    detailedInfo: {
      overview: 'Our live mapping system provides police with real time visualization of criminal movements across the city. As suspects move through the camera network, their exact location and movement patterns are displayed on interactive maps, allowing officers to coordinate pursuit strategies and position themselves strategically.',
      keyFeatures: [
        'Real time criminal location mapping on police mobile devices',
        'Historical movement path tracking showing where criminals have been',
        'Predictive route analysis suggesting likely escape directions',
        'Multi-unit coordination tools for strategic positioning',
        'Integration with police vehicle GPS for optimal pursuit routes'
      ],
      benefits: [
        'Police can see exactly where criminals are at any moment',
        'Historical tracking helps predict escape routes and destinations',
        'Enables coordinated response from multiple police units',
        'Reduces chance of criminals escaping through strategic positioning',
        'Provides complete movement evidence for investigation purposes'
      ],
      technicalSpecs: [
        'Mapping: Real time location updates with precise GPS coordinates',
        'Update Frequency: Live tracking updates every few seconds',
        'Historical Data: Complete movement history stored and accessible',
        'Integration: Compatible with existing police vehicle navigation systems'
      ]
    }
  },
  { 
    icon: 'Lock', 
    title: 'Evidence Security', 
    desc: 'Secure evidence preservation system that automatically captures and stores all criminal behavior footage with tamper-proof protection.', 
    color: 'from-green-500 to-emerald-500',
    detailedInfo: {
      overview: 'Every piece of evidence captured by our system is automatically secured with military-grade encryption and tamper-proof storage. From the initial crime detection through the complete tracking sequence, all footage and data is preserved in a legally admissible format that maintains chain of custody requirements.',
      keyFeatures: [
        'Automatic evidence capture from initial crime detection',
        'Tamper-proof storage with blockchain-based verification',
        'Complete chain of custody documentation for legal proceedings',
        'Encrypted data transmission and storage protocols',
        'Automated backup systems ensuring evidence preservation'
      ],
      benefits: [
        'All criminal evidence automatically preserved and secured',
        'Legal admissibility guaranteed through proper documentation',
        'Protection against evidence tampering or loss',
        'Streamlined evidence management for law enforcement',
        'Complete investigation timeline automatically documented'
      ],
      technicalSpecs: [
        'Encryption: Military-grade AES-256 encryption for all stored evidence',
        'Storage: Redundant backup systems with 99.99% uptime guarantee',
        'Chain of Custody: Automated documentation meeting legal standards',
        'Access Control: Multi-factor authentication for evidence access'
      ]
    }
  }
];

export const ROADMAP_ITEMS = [
  { phase: 'Day 1', title: 'The Idea', desc: 'Revolutionary AI security concept', status: 'completed' },
  { phase: 'Month 5', title: 'Basic Detection', desc: 'Core AI algorithms developed', status: 'completed' },
  { phase: 'Month 6', title: 'Seeking Funding', desc: 'Pursuing investment opportunities', status: 'current' },
  { phase: 'Month 12', title: 'Working Prototype', desc: 'Full-scale prototype ready', status: 'future' },
  { phase: 'Month 15', title: 'Market Ready', desc: 'Deployment and scaling', status: 'future' }
];

export const FUTURE_PRODUCTS = [
  { icon: 'Building2', title: 'Community Guard', desc: 'Complete security solution for gated communities with access control and visitor management.', color: 'from-emerald-500 to-teal-500' },
  { icon: 'Car', title: 'Smart Parking Pro', desc: 'AI-powered parking management with license plate recognition and automated payment systems.', color: 'from-blue-500 to-cyan-500' },
  { icon: 'Shield', title: 'Enterprise Shield', desc: 'Advanced security platform for commercial properties with multi-site management capabilities.', color: 'from-purple-500 to-pink-500' },
  { icon: 'GraduationCap', title: 'Campus Protect', desc: 'Educational institution security with student safety features and emergency response.', color: 'from-orange-500 to-red-500' },
  { icon: 'ShoppingBag', title: 'Retail Secure', desc: 'Specialized retail security with theft prevention and customer analytics intelligence.', color: 'from-yellow-500 to-orange-500' },
  { icon: 'Package', title: 'Warehouse Guard', desc: 'Comprehensive warehouse security with inventory protection and worker safety monitoring.', color: 'from-indigo-500 to-purple-500' }
];

export const MISSION_STATS = [
  { icon: 'Target', title: 'Traffic Camera Detection', desc: 'AI monitors traffic cameras to instantly identify criminal behavior', color: 'bg-red-500/20' },
  { icon: 'Network', title: 'Connected Networks', desc: 'Unified camera systems with complete city coverage', color: 'bg-blue-500/20' },
  { icon: 'Zap', title: 'Rapid Response', desc: 'Coordinated law enforcement with real time updates', color: 'bg-yellow-500/20' },
  { icon: 'Sparkles', title: 'Safer Communities', desc: 'Technology that protects what matters most', color: 'bg-emerald-500/20' }
];

export const FOUNDERS = [
  {
    name: 'Akshay R Kumar',
    role: 'CEO & Co-founder',
    image: getImagePath('aksh.jpg'),
    hasImage: true,
    gradient: 'from-emerald-500 to-blue-500'
  },
  {
    name: 'Aditya Belludi',
    role: 'CTO & Co-founder',
    image: getImagePath('adi.png'),
    hasImage: true,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Akhilesh N Naidu',
    role: 'COO & Co-founder',
    image: getImagePath('akhi.png'),
    hasImage: true,
    gradient: 'from-purple-500 to-pink-500'
  }
];

export const CONTACT_INFO = [
  {
    icon: 'Instagram',
    title: 'Instagram',
    link: SITE_CONFIG.social.instagram,
    text: '@triye_technologies',
    color: 'text-pink-400'
  },
  {
    icon: 'Linkedin',
    title: 'LinkedIn',
    link: SITE_CONFIG.social.linkedin,
    text: 'Triye Technologies',
    color: 'text-blue-400'
  },
  {
    icon: 'Mail',
    title: 'Email',
    link: `mailto:${SITE_CONFIG.email}`,
    text: SITE_CONFIG.email,
    color: 'text-emerald-400'
  }
];

export const ANIMATION_DELAYS = [
  'animation-delay-200',
  'animation-delay-400',
  'animation-delay-600',
  'animation-delay-800',
  'animation-delay-1000'
];

export const PERFORMANCE_CONFIG = {
  particleCount: {
    mobile: 30,
    desktop: 50
  },
  animationFrameThrottle: 16,
  intersectionObserverThreshold: 0.1
};
