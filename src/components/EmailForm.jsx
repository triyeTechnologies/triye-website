import React, { useEffect, useRef, useState } from 'react';
import { X, Send, Phone, Mail, User, MessageSquare, FileText } from 'lucide-react';
import { database } from '../lib/supabase';
import useModalBehavior from '../hooks/useModalBehavior';

// Bots that auto-fill every field or submit instantly get silently dropped
const MIN_SUBMIT_MS = 2000;

const EmailForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const openedAt = useRef(Date.now());
  const closeTimer = useRef(null);
  const dialogRef = useModalBehavior(onClose);

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Spam checks: honeypot filled or submitted inhumanly fast → fake success
    if (honeypot || Date.now() - openedAt.current < MIN_SUBMIT_MS) {
      setSubmitted(true);
      closeTimer.current = setTimeout(() => { onClose(); }, 2000);
      return;
    }

    try {
      await database.insertMessage(formData);
      setSubmitted(true);
      closeTimer.current = setTimeout(() => { onClose(); }, 2000);
    } catch (err) {
      console.error('Error submitting message:', err);
      setError('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.04] focus:border-amber-400/40 focus:ring-1 focus:ring-amber-400/20 transition-all duration-200 text-white placeholder-zinc-600 text-sm outline-none";
  const labelClass = "block text-sm font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5";

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="rounded-2xl p-8 max-w-md w-full text-center border border-white/[0.08]" style={{ background: '#1a1a1a' }} onClick={(e) => e.stopPropagation()}>
          <div className="w-16 h-16 bg-amber-400/15 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/25">
            <Send className="w-7 h-7 text-amber-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-zinc-500">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label="Contact us" className="rounded-2xl p-6 max-w-2xl w-full border border-white/[0.08] outline-none" style={{ background: '#1a1a1a' }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6 border-b border-white/[0.06] pb-4">
          <h2 className="text-xl font-bold text-white">Contact Us</h2>
          <button onClick={onClose} aria-label="Close contact form" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors border border-white/[0.08]">
            <X className="w-4 h-4 text-zinc-400" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/25 text-red-400 rounded-lg text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot — invisible to humans, bots fill it and get dropped */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}><User className="w-3.5 h-3.5 text-amber-400" /> Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label className={labelClass}><Phone className="w-3.5 h-3.5 text-amber-400" /> Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Your phone number" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}><Mail className="w-3.5 h-3.5 text-amber-400" /> Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" />
            </div>
            <div>
              <label className={labelClass}><FileText className="w-3.5 h-3.5 text-amber-400" /> Subject *</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="What is this about?" />
            </div>
          </div>

          <div>
            <label className={labelClass}><MessageSquare className="w-3.5 h-3.5 text-amber-400" /> Message *</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} className={inputClass + " resize-none"} placeholder="Tell us more about your inquiry..." />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
              isSubmitting ? 'bg-zinc-800 cursor-not-allowed text-zinc-500' : 'bg-amber-400 hover:bg-amber-300 text-black'
            }`}
          >
            {isSubmitting ? (
              <><div className="w-4 h-4 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" /><span>Sending...</span></>
            ) : (
              <><Send className="w-4 h-4" /><span>Send Message</span></>
            )}
          </button>
        </form>

        <p className="text-xs text-zinc-700 text-center mt-4">We respect your privacy and will only use your information to respond to your inquiry.</p>
      </div>
    </div>
  );
};

export default EmailForm;
