import React, { useState } from 'react';
import { X, ExternalLink, AlertCircle } from 'lucide-react';

const SocialModal = ({ isOpen, onClose, platform, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!isOpen) return null;

  const platformNames = {
    instagram: 'Instagram',
    linkedin: 'LinkedIn'
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const openInNewTab = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ height: '80vh', maxHeight: '700px' }}
      >
        {/* Header */}
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <h3 className="font-semibold text-gray-900">{platformNames[platform]}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={openInNewTab}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors duration-200"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex-1" style={{ height: 'calc(80vh - 60px)', maxHeight: '640px' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-gray-600 text-sm">Loading {platformNames[platform]}...</p>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 p-6">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Content blocked</h4>
                <p className="text-gray-600 text-sm mb-4">
                  {platformNames[platform]} doesn't allow embedding. Click below to visit directly.
                </p>
                <button
                  onClick={openInNewTab}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2 mx-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open {platformNames[platform]}</span>
                </button>
              </div>
            </div>
          )}

          <iframe
            src={link}
            className="w-full h-full border-0"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title={`${platformNames[platform]} content`}
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialModal;