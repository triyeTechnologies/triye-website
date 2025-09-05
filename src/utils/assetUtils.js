// utils/assetUtils.js
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as-is
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, use the base URL
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${cleanPath}`;
};

// Specific helpers for different asset types
export const getImagePath = (imageName) => {
  return getAssetPath(`images/${imageName}`);
};

export const getVideoPath = (videoName) => {
  return getAssetPath(`videos/${videoName}`);
};

// Pre-defined asset paths for your project
export const ASSET_PATHS = {
  // Logos
  logo: getImagePath('logo.png'),
  triye: getImagePath('triye.png'),
  triye1: getImagePath('triye1.png'),
  
  // Hero and sections
  heroSection: getImagePath('hero-section.png'),
  aiDetection: getImagePath('ai-detection-software.png'),
  criminalId: getImagePath('criminal-identification-panel.png'),
  cityTracking: getImagePath('city-wide-tracking-map.png'),
  policeApp: getImagePath('police-mobile-app-interface.png'),
  
  // Founders
  aksh: getImagePath('aksh.jpg'),
  adi: getImagePath('adi.png'),
  
  // Videos
  demo: getVideoPath('demo.mp4')
};
