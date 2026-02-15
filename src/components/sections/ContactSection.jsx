import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const ContactSection = ({ setShowEmailForm }) => (
    <section id="contact" className="py-16 sm:py-32 bg-gray-950 relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white"
            >
                Contact Us
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl mb-12 sm:mb-16 max-w-3xl mx-auto text-gray-400"
            >
                Connect with us through social media or drop us a message. Follow our journey and
                stay updated with the latest developments in AI security technology.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                    {
                        icon: Instagram,
                        title: 'Instagram',
                        subtitle: '@triye_technologies',
                        link: 'https://www.instagram.com/triye_technologies/',
                        color: 'text-pink-500',
                        hoverColor: 'group-hover:text-pink-400',
                        borderColor: 'group-hover:border-pink-500/50'
                    },
                    {
                        icon: Linkedin,
                        title: 'LinkedIn',
                        subtitle: 'Triye Technologies',
                        link: 'https://www.linkedin.com/company/triye-technologies/',
                        color: 'text-blue-500',
                        hoverColor: 'group-hover:text-blue-400',
                        borderColor: 'group-hover:border-blue-500/50'
                    },
                    {
                        icon: Mail,
                        title: 'Email',
                        subtitle: 'triye3@gmail.com',
                        action: () => setShowEmailForm(true),
                        color: 'text-emerald-500',
                        hoverColor: 'group-hover:text-emerald-400',
                        borderColor: 'group-hover:border-emerald-500/50'
                    }
                ].map((item, index) => {
                    const Wrapper = item.link ? 'a' : 'div';
                    const props = item.link
                        ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                        : { onClick: item.action, className: "cursor-pointer" };

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Wrapper
                                {...props}
                                className={`glass-cyber rounded-2xl p-6 sm:p-8 min-h-[160px] flex flex-col justify-center transition-all duration-300 group border border-white/5 ${item.borderColor} relative overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                <item.icon className={`w-12 h-12 mx-auto mb-4 ${item.color} ${item.hoverColor} transition-colors duration-300 drop-shadow-md group-hover:scale-110 transform`} />
                                <h4 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-white transition-colors">{item.title}</h4>
                                <p className="text-gray-400 text-sm sm:text-base break-all group-hover:text-gray-300 transition-colors">
                                    {item.subtitle}
                                </p>
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default ContactSection;
