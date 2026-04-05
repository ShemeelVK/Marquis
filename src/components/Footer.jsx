import React, { useRef, useState } from 'react';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_1puwad3', // Service ID provided by user
        'template_mcq1h4s', // Template ID provided by user
        form.current,
        'aZzp6i3z6DYNCMEBV' // Public Key provided by user
      )
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset(); // Clear form fields
          
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] tracking-wide drop-shadow-sm mb-6">
            Secure Your Future With Confidence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Map and Contact Info */}
          <div className="space-y-8">
            <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-800 relative group">
              {/* Standard map view without dark filters as requested */}
              <iframe 
                src="https://maps.google.com/maps?q=East+London+Business+Centre,+101+Greenfield+Rd,+London+E1+1EJ,+UK&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
                className="transition-all duration-700"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                <MdLocationOn className="text-3xl text-[#D4AF37] mb-3" />
                <h4 className="text-white font-medium mb-1">Visit Us</h4>
                <p className="text-sm text-slate-400">East London Business Centre,<br/>London</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                <MdPhone className="text-3xl text-[#D4AF37] mb-3" />
                <h4 className="text-white font-medium mb-1">Call Us</h4>
                <p className="text-sm text-slate-400">+44 7741992913</p>
                <p className="text-sm text-slate-400">+91 89213 62760</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-slate-900 rounded-xl border border-slate-800">
                <MdEmail className="text-3xl text-[#D4AF37] mb-3" />
                <h4 className="text-white font-medium mb-1">Email Us</h4>
                <p className="text-sm text-slate-400 truncate w-full">info@marquis.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/40 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-slate-700/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden">
            {/* Decorative ambient glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Speak With Our Team</h3>
            <p className="text-slate-400 mb-8 relative z-10 font-light">Fill out the form below and we'll get back to you shortly.</p>
            
            <form ref={form} className="space-y-6 relative z-10" onSubmit={sendEmail}>
              
              <div className="relative group">
                <input 
                  type="text" 
                  id="user_name"
                  name="user_name" 
                  className="peer w-full bg-transparent border-b-2 border-slate-700 focus:border-[#D4AF37] px-0 py-3 text-white focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Full Name"
                  required
                />
                <label 
                  htmlFor="user_name" 
                  className="absolute left-0 -top-3.5 text-sm text-[#D4AF37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#D4AF37] cursor-text"
                >
                  Full Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="user_email"
                  name="user_email" 
                  className="peer w-full bg-transparent border-b-2 border-slate-700 focus:border-[#D4AF37] px-0 py-3 text-white focus:outline-none transition-colors placeholder-transparent"
                  placeholder="Email Address"
                  required
                />
                <label 
                  htmlFor="user_email" 
                  className="absolute left-0 -top-3.5 text-sm text-[#D4AF37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#D4AF37] cursor-text"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group pt-4">
                <textarea 
                  id="message"
                  name="message" 
                  rows="3" 
                  className="peer w-full bg-slate-800/30 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none placeholder-transparent"
                  placeholder="Message"
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 0 top-1 bg-slate-900/80 px-2 text-sm text-[#D4AF37] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-8 peer-placeholder-shown:bg-transparent peer-focus:top-1 peer-focus:text-sm peer-focus:bg-slate-900/80 peer-focus:text-[#D4AF37] cursor-text rounded-md pointer-events-none"
                >
                  How can we help you?
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#F3E5AB] text-slate-900 font-bold py-4 rounded-2xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,175,55,0.25)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.4)] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:-translate-y-1'} group`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                  Oops! Something went wrong. Please try emailing us directly instead.
                </div>
              )}
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Marquis Overseas International. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
