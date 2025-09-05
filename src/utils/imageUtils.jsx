import React from 'react';

export const createPlaceholderImage = (width = 400, height = 300, text = 'Image') => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, width, height);
  
  ctx.strokeStyle = '#d1d5db';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, width, height);
  
  ctx.fillStyle = '#6b7280';
  ctx.font = `${Math.max(16, width / 20)}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

export const getPlaceholderImage = (type, width = 400, height = 300) => {
  const placeholders = {
    logo: () => createPlaceholderImage(width, height, 'LOGO'),
    hero: () => createPlaceholderImage(width, height, 'Hero Image'),
    demo: () => createPlaceholderImage(width, height, 'Demo'),
    founder: () => createPlaceholderImage(width, height, 'Photo'),
    feature: () => createPlaceholderImage(width, height, 'Feature')
  };
  
  return placeholders[type] ? placeholders[type]() : createPlaceholderImage(width, height, 'Image');
};

export const loadImageWithFallback = (primarySrc, fallbackSrc, placeholderType = 'default') => {
  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => resolve(primarySrc);
    
    img.onerror = () => {
      const fallbackImg = new Image();
      
      fallbackImg.onload = () => resolve(fallbackSrc);
      
      fallbackImg.onerror = () => {
        resolve(getPlaceholderImage(placeholderType));
      };
      
      if (fallbackSrc) {
        fallbackImg.src = fallbackSrc;
      } else {
        resolve(getPlaceholderImage(placeholderType));
      }
    };
    
    img.src = primarySrc;
  });
};

export const OptimizedImage = ({ 
  src, 
  alt, 
  fallback, 
  placeholderType = 'default',
  className = '',
  width,
  height,
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  
  React.useEffect(() => {
    loadImageWithFallback(src, fallback, placeholderType)
      .then((finalSrc) => {
        setCurrentSrc(finalSrc);
        setIsLoading(false);
      })
      .catch(() => {
        setCurrentSrc(getPlaceholderImage(placeholderType, width, height));
        setIsLoading(false);
        setHasError(true);
      });
  }, [src, fallback, placeholderType, width, height]);
  
  if (isLoading) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        aria-label="Loading image..."
      />
    );
  }
  
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!hasError) {
          setCurrentSrc(getPlaceholderImage(placeholderType, width, height));
          setHasError(true);
        }
      }}
      {...props}
    />
  );
};

export const preloadImages = (imageUrls) => {
  return Promise.allSettled(
    imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};