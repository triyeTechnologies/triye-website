import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  maxWidth = '2xl',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = '',
  darkTheme = false
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  // Auto-detect if this is a video modal based on title
  const isVideoModal = title && title.toLowerCase().includes('demo');
  const usesDarkTheme = darkTheme || isVideoModal;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={closeOnOverlayClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        className={`${
          usesDarkTheme 
            ? 'bg-gray-900 border-gray-700' 
            : 'bg-white border-gray-200'
        } rounded-2xl shadow-2xl w-full border ${className} overflow-hidden ${
          isVideoModal ? 'max-w-4xl' : maxWidthClasses[maxWidth]
        }`}
        style={{ 
          maxHeight: '85vh'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className={`${
            usesDarkTheme 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-white border-gray-200'
          } border-b px-4 py-3 flex items-center justify-between rounded-t-2xl flex-shrink-0`}>
            {title && (
              <h2 id="modal-title" className={`text-lg font-semibold ${
                usesDarkTheme ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className={`w-7 h-7 ${
                  usesDarkTheme 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                } rounded-full flex items-center justify-center transition-colors duration-200 ml-auto`}
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`${
          usesDarkTheme ? 'bg-gray-900' : ''
        } ${isVideoModal ? 'p-0' : 'p-6'} flex-1`}>
          {isVideoModal ? (
            <div 
              className="relative w-full bg-black flex items-center justify-center"
              style={{ 
                height: 'calc(85vh - 60px)',
                maxHeight: '500px'
              }}
            >
              {children}
            </div>
          ) : (
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 80px)' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;