import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../data/constants';

const getIconComponent = (iconName) => {
  const icons = { Instagram, Linkedin, Mail };
  return icons[iconName] || Mail;
};

const ContactSection = ({ onOpenContactForm }) => {
  return (
    <section id="contact" className="py-16 sm:py-32 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-300">
          Connect with us through social media or drop us a message. Follow our journey and 
          stay updated with the latest developments in AI security technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {CONTACT_INFO.map((contact, index) => {
            const IconComponent = getIconComponent(contact.icon);
            const isEmail = contact.icon === 'Mail';
            
            const handleClick = () => {
              if (isEmail) {
                onOpenContactForm();
              } else {
                window.open(contact.link, '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <button
                key={index}
                onClick={handleClick}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 min-h-[120px] flex flex-col justify-center hover:bg-white/20 transition-colors duration-200 w-full"
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${contact.color}`} />
                <h4 className="text-base sm:text-lg font-bold mb-2">{contact.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm break-all">
                  {contact.text}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;