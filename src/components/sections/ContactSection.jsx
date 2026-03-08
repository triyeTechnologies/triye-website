import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';

const ContactSection = ({ setShowEmailForm }) => (
    <section id="contact" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            >
                Contact Us
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg mb-12 max-w-2xl mx-auto text-gray-400 leading-relaxed"
            >
                Connect with us through social media or drop us a message. Follow our journey and
                stay updated with the latest developments in AI security technology.
            </motion.p>

            {/* Social icons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center gap-8 sm:gap-12 mb-16"
            >
                {[
                    {
                        icon: Instagram,
                        label: 'Instagram',
                        handle: '@triye_technologies',
                        link: 'https://www.instagram.com/triye_technologies/',
                        color: 'text-pink-400',
                        ring: 'hover:ring-pink-500/40',
                        glow: 'hover:shadow-[0_0_24px_rgba(236,72,153,0.3)]',
                        bg: 'hover:bg-pink-500/10'
                    },
                    {
                        icon: Linkedin,
                        label: 'LinkedIn',
                        handle: 'Triye Technologies',
                        link: 'https://www.linkedin.com/company/triye-technologies/',
                        color: 'text-blue-400',
                        ring: 'hover:ring-blue-500/40',
                        glow: 'hover:shadow-[0_0_24px_rgba(59,130,246,0.3)]',
                        bg: 'hover:bg-blue-500/10'
                    },
                    {
                        icon: Mail,
                        label: 'Email',
                        handle: 'triye3@gmail.com',
                        action: () => setShowEmailForm(true),
                        color: 'text-emerald-400',
                        ring: 'hover:ring-emerald-500/40',
                        glow: 'hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]',
                        bg: 'hover:bg-emerald-500/10'
                    }
                ].map((item, index) => {
                    const Wrapper = item.link ? 'a' : 'button';
                    const props = item.link
                        ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
                        : { onClick: item.action };

                    return (
                        <Wrapper key={index} {...props} className="group flex flex-col items-center gap-3 focus:outline-none">
                            <div className={`w-16 h-16 rounded-2xl bg-gray-900 border border-white/10 flex items-center justify-center ring-1 ring-transparent transition-all duration-300 ${item.ring} ${item.glow} ${item.bg}`}>
                                <item.icon className={`w-7 h-7 ${item.color} transition-transform duration-300 group-hover:scale-110`} />
                            </div>
                            <div className="text-center">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{item.label}</p>
                                <p className={`text-xs mt-0.5 ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>{item.handle}</p>
                            </div>
                        </Wrapper>
                    );
                })}
            </motion.div>

            {/* CTA card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm overflow-hidden p-8 sm:p-12"
            >
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Ready to secure your city?</h3>
                        <p className="text-gray-400 text-sm sm:text-base max-w-md">
                            Reach out to learn how Traced can transform your city's security infrastructure with real-time AI surveillance.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowEmailForm(true)}
                        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] whitespace-nowrap"
                    >
                        <Send className="w-4 h-4" />
                        Send a Message
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default ContactSection;
