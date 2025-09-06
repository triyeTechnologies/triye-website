import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../ui/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to revolutionize your security infrastructure? Let's discuss how Triye can transform your surveillance capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Contact Info & Social */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              
              {/* Direct Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">contact@triyetechnologies.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.open('https://instagram.com/triyetechnologies', '_blank')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => window.open('https://linkedin.com/company/triyetechnologies', '_blank')}
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
