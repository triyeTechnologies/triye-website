// Utility for handling asset paths in production
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, use the base path
  if (import.meta.env.PROD) {
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
  
  // In development, use regular path
  return `/${cleanPath}`;
};

// Helper for common asset types
export const getImagePath = (imagePath) => getAssetPath(`images/${imagePath}`);
export const getVideoPath = (videoPath) => getAssetPath(`videos/${videoPath}`);

// Export commonly used asset paths
export const ASSETS = {
  logo: getImagePath('logo.png'),
  triyeLogo: getImagePath('triye.png'),
  triyeLogo1: getImagePath('triye1.png'),
  heroSection: getImagePath('hero-section.png'),
  akshImage: getImagePath('aksh.jpg'),
  adiImage: getImagePath('adi.png'),
  demoVideo: getVideoPath('demo.mp4'),
  // Add other assets as needed
};
