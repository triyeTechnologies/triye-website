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
    detailDesc: 'As criminals attempt to escape, our interconnected traffic camera network seamlessly tracks their movement across the entire city. When one camera loses visual contact, surrounding cameras automatically begin searching for the tagged individual, ensuring continuous monitoring without gaps.'
  },
  { 
    icon: 'Zap', 
    title: 'Police Coordination', 
    desc: 'Instant alerts with real time location updates', 
    color: 'from-orange-500 to-red-500',
    image: getImagePath('police-mobile-app-interface.png'),
    detailDesc: 'Our mobile app delivers real-time updates directly to law enforcement, showing the suspect\'s current location, direction of movement, and complete identification details. Officers receive push notifications with all necessary information for safe and effective pursuit.'
  }
];

export const CONCEPTS = [
  { 
    icon: 'Brain', 
    title: 'AI Detection Engine', 
    desc: 'Advanced neural networks for criminal behavior recognition.', 
    color: 'from-emerald-500 to-teal-500',
    detailedInfo: {
      keyFeatures: [
        'Real-time video analysis with 99.9% accuracy',
        'Behavioral pattern recognition using deep learning',
        'Custom neural network architecture for urban environments',
        'Multi-camera fusion for enhanced detection'
      ],
      benefits: [
        'Instant crime detection reduces response time by 70%',
        'Reduces false positives through contextual analysis',
        'Scalable to thousands of cameras without performance loss',
        'Continuous learning from new data patterns'
      ],
      technicalSpecs: [
        'Framework: PyTorch 2.0+',
        'Model: Custom YOLOv8 + Transformer hybrid',
        'Inference: <30ms per frame on edge devices',
        'Training: Distributed on NVIDIA A100 GPUs'
      ]
    }
  },
  { 
    icon: 'Network', 
    title: 'Tracking Network', 
    desc: 'Seamless multi-camera suspect tracking across urban areas.', 
    color: 'from-blue-500 to-cyan-500',
    detailedInfo: {
      keyFeatures: [
        'Cross-camera handoff with zero loss tracking',
        'Predictive path analysis using graph algorithms',
        'Integration with city infrastructure APIs',
        'Real-time position extrapolation'
      ],
      benefits: [
        'Complete coverage without blind spots',
        'Predicts escape routes for proactive response',
        'Integrates with existing camera networks',
        'Maintains tracking during temporary occlusions'
      ],
      technicalSpecs: [
        'Graph DB: Neo4j for camera network mapping',
        'Algorithm: Kalman Filter + DeepSORT',
        'Latency: <100ms cross-camera handoff',
        'Scale: Handles 10,000+ camera networks'
      ]
    }
  },
  { 
    icon: 'Zap', 
    title: 'Response Coordination', 
    desc: 'Instant mobile alerts and coordination for law enforcement.', 
    color: 'from-purple-500 to-pink-500',
    detailedInfo: {
      keyFeatures: [
        'Push notifications with suspect profiles',
        'Live tracking on mobile devices',
        'Team coordination chat and mapping',
        'Automated dispatch optimization'
      ],
      benefits: [
        'Reduces pursuit time by 60%',
        'Improves officer safety with real-time intel',
        'Coordinates multiple units effectively',
        'Provides complete audit trails'
      ],
      technicalSpecs: [
        'Platform: React Native + WebSocket',
        'Backend: Node.js with Redis Pub/Sub',
        'Security: End-to-end encryption',
        'Availability: 99.999% uptime'
      ]
    }
  },
  { 
    icon: 'Target', 
    title: 'Suspect Identification', 
    desc: 'Multi-modal identification using face, vehicle, and clothing analysis.', 
    color: 'from-orange-500 to-red-500',
    detailedInfo: {
      keyFeatures: [
        'Facial recognition with mask handling',
        'Vehicle make/model/license plate OCR',
        'Clothing and gait analysis',
        'Biometric fusion for 99% accuracy'
      ],
      benefits: [
        'Identifies suspects even with partial views',
        'Works in low light and poor weather',
        'Privacy-compliant with data minimization',
        'Integrates with law enforcement databases'
      ],
      technicalSpecs: [
        'Face: ArcFace with MTCNN detection',
        'Vehicle: ALPR with YOLO detection',
        'Accuracy: 98.5% in challenging conditions',
        'Processing: GPU-accelerated inference'
      ]
    }
  },
  { 
    icon: 'BarChart3', 
    title: 'Analytics Dashboard', 
    desc: 'Comprehensive security insights and pattern analysis.', 
    color: 'from-yellow-500 to-orange-500',
    detailedInfo: {
      keyFeatures: [
        'Real-time crime heatmaps',
        'Pattern recognition over time',
        'Predictive analytics for hotspots',
        'Custom reporting tools'
      ],
      benefits: [
        'Enables proactive security measures',
        'Optimizes resource allocation',
        'Provides data-driven policy decisions',
        'Tracks system effectiveness metrics'
      ],
      technicalSpecs: [
        'Frontend: React with D3.js',
        'Backend: Elasticsearch + Kibana',
        'ML: Time-series forecasting with Prophet',
        'Data: Petabyte-scale storage'
      ]
    }
  },
  { 
    icon: 'Lock', 
    title: 'Privacy Shield', 
    desc: 'Enterprise-grade security and privacy compliance.', 
    color: 'from-indigo-500 to-purple-500',
    detailedInfo: {
      keyFeatures: [
        'GDPR/CCPA compliant data handling',
        'End-to-end encryption',
        'Access control and auditing',
        'Anonymization tools'
      ],
      benefits: [
        'Protects citizen privacy',
        'Meets regulatory requirements',
        'Builds public trust',
        'Prevents data breaches'
      ],
      technicalSpecs: [
        'Encryption: AES-256 + TLS 1.3',
        'Auth: OAuth 2.0 + JWT',
        'Compliance: SOC 2 Type II certified',
        'Monitoring: SIEM integration'
      ]
    }
  }
];

export const ROADMAP_ITEMS = [
  { 
    phase: 'Q4 2024', 
    title: 'Prototype Development', 
    desc: 'Build core AI detection engine and basic tracking system', 
    status: 'completed' 
  },
  { 
    phase: 'Q1 2025', 
    title: 'Beta Testing', 
    desc: 'Pilot program with select cities and initial field testing', 
    status: 'completed' 
  },
  { 
    phase: 'Q2 2025', 
    title: 'System Integration', 
    desc: 'Full integration with existing camera networks and mobile apps', 
    status: 'current' 
  },
  { 
    phase: 'Q3 2025', 
    title: 'Enterprise Features', 
    desc: 'Add analytics dashboard and privacy compliance tools', 
    status: 'pending' 
  },
  { 
    phase: 'Q4 2025', 
    title: 'Full Launch', 
    desc: 'Commercial release with complete feature set and support', 
    status: 'pending' 
  }
];

export const FUTURE_PRODUCTS = [
  { icon: 'Building2', title: 'Enterprise Secure', desc: 'Complete enterprise security platform with AI monitoring and access control.', color: 'from-emerald-500 to-teal-500' },
  { icon: 'Car', title: 'Auto Guard', desc: 'Vehicle security system with theft detection and autonomous response.', color: 'from-blue-500 to-cyan-500' },
  { icon: 'Shield', title: 'Cyber Shield', desc: 'Integrated cybersecurity with physical security monitoring.', color: 'from-purple-500 to-pink-500' },
  { icon: 'GraduationCap', title: 'Campus Safe', desc: 'Specialized campus security with student safety features.', color: 'from-orange-500 to-red-500' },
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
