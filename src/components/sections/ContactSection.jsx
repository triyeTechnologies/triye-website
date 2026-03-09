import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const ContactSection = ({ setShowEmailForm }) => {
    const socials = [
        { icon: Instagram, label: 'Instagram', handle: '@triye_technologies', link: 'https://www.instagram.com/triye_technologies/', hoverBorder: 'hover:border-pink-400/40', hoverText: 'group-hover:text-pink-400' },
        { icon: Linkedin,  label: 'LinkedIn',  handle: 'Triye Technologies',  link: 'https://www.linkedin.com/company/triye-technologies/', hoverBorder: 'hover:border-blue-400/40', hoverText: 'group-hover:text-blue-400' },
        { icon: Mail,      label: 'Email',     handle: 'triye3@gmail.com',     action: () => setShowEmailForm(true), hoverBorder: 'hover:border-amber-400/40', hoverText: 'group-hover:text-amber-400' },
    ];

    return (
        <section id="contact" className="py-16 sm:py-28" style={{ background: '#111111' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left — text + socials */}
                    <div>
                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</motion.p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
                            Let's <span className="gradient-text">Connect</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-zinc-500 leading-relaxed mb-10">
                            Connect with us through social media or drop us a message. Follow our journey and stay updated with the latest developments in AI security technology.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-3">
                            {socials.map((s, i) => {
                                const Wrapper = s.link ? 'a' : 'button';
                                const props = s.link ? { href: s.link, target: '_blank', rel: 'noopener noreferrer' } : { onClick: s.action };
                                return (
                                    <Wrapper key={i} {...props} className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${s.hoverBorder} text-left w-full`} style={{ background: '#1a1a1a' }}>
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                                            <s.icon className={`w-5 h-5 text-zinc-500 transition-colors duration-200 ${s.hoverText}`} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-white">{s.label}</p>
                                            <p className="text-xs text-zinc-600">{s.handle}</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all duration-200" />
                                    </Wrapper>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Right — CTA card */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }} className="lg:pt-16">
                        <div className="rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden" style={{ background: '#1a1a1a' }}>
                            {/* Subtle amber glow */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 60%)' }} />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center mb-6">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Ready to secure your city?</h3>
                                <p className="text-zinc-500 leading-relaxed mb-8 text-sm">
                                    Reach out to learn how Traced can transform your city's security infrastructure with real-time AI surveillance. We'd love to hear from you.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                    onClick={() => setShowEmailForm(true)}
                                    className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-black font-bold py-3.5 rounded-xl transition-colors duration-200"
                                >
                                    Send a Message <ArrowRight className="w-4 h-4" />
                                </motion.button>

                                <p className="text-zinc-700 text-xs text-center mt-4">We typically respond within 24 hours</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
