import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const ContactSection = ({ setShowEmailForm }) => (
    <section id="contact" className="py-16 sm:py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-300">
                Connect with us through social media or drop us a message. Follow our journey and
                stay updated with the latest developments in AI security technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <a
                    href="https://www.instagram.com/triye_technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center hover:bg-white/20 transition-all duration-300"
                >
                    <Instagram className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                    <h4 className="text-lg sm:text-xl font-bold mb-3">Instagram</h4>
                    <p className="text-gray-300 text-sm sm:text-base break-all">
                        @triye_technologies
                    </p>
                </a>

                <a
                    href="https://www.linkedin.com/company/triye-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center hover:bg-white/20 transition-all duration-300"
                >
                    <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h4 className="text-lg sm:text-xl font-bold mb-3">LinkedIn</h4>
                    <p className="text-gray-300 text-sm sm:text-base break-all">
                        Triye Technologies
                    </p>
                </a>

                <div
                    onClick={() => setShowEmailForm(true)}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
                >
                    <Mail className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                    <h4 className="text-lg sm:text-xl font-bold mb-3">Email</h4>
                    <p className="text-gray-300 text-sm sm:text-base break-all">
                        triye3@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
