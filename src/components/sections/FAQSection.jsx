
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How does Traced integration work with existing CCTV?",
        answer: "Traced is designed to overlay seamlessly with your existing infrastructure. We connect to your NVR/DVR systems via secure protocols, analyzing the video feed in real-time without requiring new camera hardware."
    },
    {
        question: "What is the typical latency for threat detection?",
        answer: "Our optimized AI models run with an average latency of under 50ms from frame capture to alert generation, ensuring near-instantaneous response times for critical security events."
    },
    {
        question: "Is my video data stored securely?",
        answer: "Yes, security is our priority. All video processing is done locally or via encrypted channels. We adhere to strict data privacy standards and do not store footage unless explicitly configured for evidence retention."
    },
    {
        question: "Can Traced detect non-human threats?",
        answer: "Currently, our models are specialized for human behavioral analysis, weapon detection, and crowd dynamics. Custom models for specific non-human threats can be developed for enterprise partners."
    },
    {
        question: "Do you offer on-premise deployment?",
        answer: "Absolutely. For high-security environments, we offer full on-premise deployment using edge computing devices, ensuring your data never leaves your facility."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/5 last:border-none">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-emerald-400' : 'text-gray-300 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 sm:py-32 bg-gray-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Frequently Asked <span className="text-emerald-400">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Common queries about our technology and integration process.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-cyber rounded-2xl p-2 sm:p-8 border border-white/5"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
