import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Column: Info & Context (Dark) */}
      <div className="bg-[#3e322d] text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden min-h-[60vh] lg:min-h-screen order-2 lg:order-1">
         {/* Background Texture/Image Overlay */}
         <div className="absolute inset-0 opacity-10 bg-[url('/pattern-noise.png')] mix-blend-overlay pointer-events-none" />
          
          <motion.div
             initial="hidden"
             animate="visible"
             variants={fadeIn}
             className="relative z-10"
          >
             <div className="mb-16 relative">
                <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none font-light tracking-wide">
                  GET IN
                </h1>
                <span className="font-script text-6xl md:text-8xl text-[#d4c5b0] absolute -bottom-10 left-20 -rotate-6">
                  Touch
                </span>
             </div>

             <div className="space-y-12 mt-20 border-l border-white/20 pl-8 md:pl-12">
                <div>
                   <h3 className="text-xs tracking-[0.2em] opacity-60 mb-2 uppercase">General Inquiries</h3>
                     <a href="mailto:Zamamagubanearts@gmail.com" className="text-2xl md:text-3xl font-light hover:text-[#d4c5b0] transition-colors">
                       Zamamagubanearts@gmail.com
                   </a>
                </div>

                <div>
                   <h3 className="text-xs tracking-[0.2em] opacity-60 mb-2 uppercase">Studio</h3>
                   <address className="text-xl md:text-2xl font-light not-italic leading-relaxed">
                     Maboneng Precinct,<br />
                     Johannesburg,<br />
                     South Africa
                   </address>
                </div>

                <div>
                   <h3 className="text-xs tracking-[0.2em] opacity-60 mb-2 uppercase">Social</h3>
                   <div className="flex gap-6">
                      <a href="https://www.instagram.com/uzama.magubane/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d4c5b0] transition-colors group">
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm tracking-widest uppercase border-b border-transparent group-hover:border-[#d4c5b0]">Instagram</span>
                      </a>
                   </div>
                </div>
             </div>
          </motion.div>
      </div>

      {/* Right Column: Form (Light) */}
      <div className="bg-[#f4f3ef] p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2 pt-32 lg:pt-24">
         <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
         >
            <h2 className="text-3xl md:text-4xl text-[#2a2422] font-light mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="border-b border-[#2a2422]/20 focus-within:border-[#804a00] transition-colors">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent py-4 text-[#2a2422] placeholder-[#2a2422]/40 focus:outline-none text-lg tracking-wide uppercase"
                    required
                  />
               </div>
               
               <div className="border-b border-[#2a2422]/20 focus-within:border-[#804a00] transition-colors">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent py-4 text-[#2a2422] placeholder-[#2a2422]/40 focus:outline-none text-lg tracking-wide uppercase"
                    required
                  />
               </div>

               <div className="border-b border-[#2a2422]/20 focus-within:border-[#804a00] transition-colors">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent py-4 text-[#2a2422] focus:outline-none text-lg tracking-wide uppercase appearance-none"
                    required
                  >
                    <option value="" disabled className="text-[#2a2422]/40">SELECT SUBJECT</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="commission">Commission Request</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
               </div>

               <div className="pt-4">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="TELL US MORE ABOUT YOUR PROJECT OR INQUIRY..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#e8e6e1] p-6 text-[#2a2422] placeholder-[#2a2422]/40 focus:outline-none text-base font-light resize-none rounded-sm"
                    required
                  />
               </div>

               <button
                 type="submit"
                 className="group inline-flex items-center gap-3 px-10 py-4 bg-[#2a2422] text-white hover:bg-[#804a00] transition-all duration-300"
               >
                 <span className="tracking-[0.2em] text-sm uppercase font-medium">Send Message</span>
                 <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
         </motion.div>
      </div>
    </div>
  );
}
