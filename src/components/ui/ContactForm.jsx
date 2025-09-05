import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { validateContactForm, formatFormData } from '../../utils/validation';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const cleanData = formatFormData(formData);
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data:', cleanData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ name, type = 'text', label, placeholder, required = true, as = 'input', rows = 3 }) => {
    const Component = as;
    
    return (
      <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Component
          id={name}
          name={name}
          type={type}
          rows={as === 'textarea' ? rows : undefined}
          value={formData[name]}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-sm ${
            errors[name] 
              ? 'border-red-500 bg-red-50' 
              : 'border-gray-300 bg-white hover:border-gray-400'
          } ${as === 'textarea' ? 'resize-none h-20' : ''}`}
          disabled={isSubmitting}
          required={required}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
        {errors[name] && (
          <p id={`${name}-error`} className="text-xs text-red-600 flex items-center space-x-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors[name]}</span>
          </p>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-600 text-xs">Send us a message</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
            disabled={isSubmitting}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <h3 className="font-medium text-green-800 text-sm">Message sent!</h3>
                <p className="text-green-700 text-xs">We'll get back to you soon.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="font-medium text-red-800 text-sm">Failed to send</h3>
                <p className="text-red-700 text-xs">Please try again later.</p>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <InputField
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
            />
            <InputField
              name="email"
              type="email"
              label="Email Address"
              placeholder="your.email@example.com"
            />
            <InputField
              name="subject"
              label="Subject"
              placeholder="What is this regarding?"
            />
            <InputField
              name="message"
              label="Message"
              placeholder="Tell us more..."
              as="textarea"
              rows={3}
            />
          </div>

          <div className="flex justify-center pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-3 h-3" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;