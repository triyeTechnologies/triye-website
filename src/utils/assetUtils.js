// Utility for handling asset paths in production
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use the base path
  if (import.meta.env.PROD) {
    const baseUrl = import.meta.env.BASE_URL || '/triye-website/';
    return `${baseUrl}${cleanPath}`;
  }
  
  // In development, use regular path
  return `/${cleanPath}`;
};

// Helper for common asset types
export const getImagePath = (imagePath) => getAssetPath(`images/${imagePath}`);
export const getVideoPath = (videoPath) => getAssetPath(`videos/${videoPath}`);

// Export commonly used asset paths
export const ASSETS = {
  // Logo assets
  logo: getImagePath('logo.png'),
  triyeLogo: getImagePath('triye.png'),
  triyeLogo1: getImagePath('triye1.png'),
  
  // Hero section
  heroSection: getImagePath('hero-section.png'),
  
  // Founder images
  akshImage: getImagePath('aksh.jpg'),
  adiImage: getImagePath('adi.png'),
  
  // Feature images
  aiDetectionSoftware: getImagePath('ai-detection-software.png'),
  criminalIdentificationPanel: getImagePath('criminal-identification-panel.png'),
  cityWideTrackingMap: getImagePath('city-wide-tracking-map.png'),
  policeMobileAppInterface: getImagePath('police-mobile-app-interface.png'),
  
  // Videos
  demoVideo: getVideoPath('demo.mp4'),
};
