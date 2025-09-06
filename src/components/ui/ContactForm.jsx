import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Move these outside the component to prevent re-creation
const validateForm = (data) => {
  const errors = {};
  
  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  }
  
  return errors;
};

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  interest: 'general'
};

// Separate input components to prevent re-rendering
const FormInput = React.memo(({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error 
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 focus:outline-none focus:ring-0 ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
      }`}
      placeholder={placeholder}
      autoComplete="off"
    />
    {error && (
      <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </p>
    )}
  </div>
));

const FormTextarea = React.memo(({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error 
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <textarea
      id={name}
      name={name}
      rows="5"
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 resize-none focus:outline-none focus:ring-0 ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
      }`}
      placeholder={placeholder}
    />
    {error && (
      <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </p>
    )}
  </div>
));

const FormSelect = React.memo(({ 
  label, 
  name, 
  value, 
  onChange, 
  options 
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
));

const ContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Stable event handler that doesn't change
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Log form data to console for now
      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('Name:', formData.name);
      console.log('Email:', formData.email);
      console.log('Company:', formData.company);
      console.log('Phone:', formData.phone);
      console.log('Interest:', formData.interest);
      console.log('Message:', formData.message);
      console.log('================================');
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  // Options for select - defined outside render to prevent re-creation
  const interestOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'investment', label: 'Investment Interest' },
    { value: 'pilot', label: 'Pilot Program' },
    { value: 'demo', label: 'Request Demo' },
    { value: 'technical', label: 'Technical Questions' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Get in Touch
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Ready to revolutionize your security infrastructure? Let's discuss how Triye can transform your surveillance capabilities.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Message received!</span>
          </div>
          <p className="text-green-700 text-sm mt-1">
            Thank you for your interest. Your message has been logged and we'll respond within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Submission failed</span>
          </div>
          <p className="text-red-700 text-sm mt-1">
            Please contact us directly at contact@triyetechnologies.com
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
            error={errors.name}
          />

          <FormInput
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@company.com"
            required
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput
            label="Company/Organization"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your company name"
          />

          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <FormSelect
          label="Area of Interest"
          name="interest"
          value={formData.interest}
          onChange={handleInputChange}
          options={interestOptions}
        />

        <FormTextarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your security challenges and how we can help..."
          required
          error={errors.message}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-4 rounded-lg font-semibold text-base transition-all duration-200 min-h-[56px] flex items-center justify-center space-x-2 focus:outline-none focus:ring-0 disabled:opacity-75 disabled:cursor-not-allowed hover:from-emerald-600 hover:to-blue-600 transform hover:scale-[1.02]"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600 text-sm">contact@triyetechnologies.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
            <p className="text-gray-600 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
