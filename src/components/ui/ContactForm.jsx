import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { validateForm } from '../../utils/validation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Import EmailJS dynamically
      const emailjs = await import('@emailjs/browser');
      
      // EmailJS configuration - Replace with your actual IDs
      const serviceId = 'service_sr3rvk8'; // Replace with your EmailJS service ID
      const templateId = 'template_ggkwvij'; // Replace with your EmailJS template ID
      const publicKey = 'HR7HJxrWqCSXN0acf'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        interest: formData.interest,
        to_email: 'contact@triyetechnologies.com' // Your email
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          interest: 'general'
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const StatusMessage = () => {
    if (submitStatus === 'success') {
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Message sent successfully!</span>
          </div>
          <p className="text-green-700 text-sm mt-1">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      );
    }

    if (submitStatus === 'error') {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">Failed to send message</span>
          </div>
          <p className="text-red-700 text-sm mt-1">
            Please try again or contact us directly at contact@triyetechnologies.com
          </p>
        </div>
      );
    }

    return null;
  };

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

      <StatusMessage />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 focus:outline-none focus:ring-0 ${
                errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 focus:outline-none focus:ring-0 ${
                errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
              }`}
              placeholder="your.email@company.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
          >
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="investment">Investment Interest</option>
            <option value="pilot">Pilot Program</option>
            <option value="demo">Request Demo</option>
            <option value="technical">Technical Questions</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-base transition-colors duration-200 resize-none focus:outline-none focus:ring-0 ${
              errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400 focus:border-blue-500'
            }`}
            placeholder="Tell us about your security challenges and how we can help..."
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1 flex items-center space-x-1">
              <AlertCircle className="w-4 h-4" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-4 rounded-lg font-semibold text-base transition-all duration-200 min-h-[56px] flex items-center justify-center space-x-2 focus:outline-none focus:ring-0 ${
            isSubmitting 
              ? 'opacity-75 cursor-not-allowed' 
              : 'hover:from-emerald-600 hover:to-blue-600 transform hover:scale-[1.02]'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Sending Message...</span>
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

ContactForm.displayName = 'ContactForm';

export default ContactForm;
