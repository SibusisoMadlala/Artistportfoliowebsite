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

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            Contact
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl">
            For inquiries about artworks, commissions, exhibitions, or collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-light text-stone-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-stone-500 mb-1">Email</p>
                  <a href="mailto:info@zamamagubane.art" className="text-stone-900 hover:text-stone-600 transition-colors">
                    info@zamamagubane.art
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-stone-500 mb-1">Phone</p>
                  <p className="text-stone-900">+27 (0) 21 XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-stone-500 mb-1">Location</p>
                  <p className="text-stone-900">Cape Town, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-stone-500 mb-1">Social Media</p>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-900 hover:text-stone-600 transition-colors">
                    @zamamagubane.art
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-stone-50 border-l-4 border-stone-900">
              <h3 className="font-medium text-stone-900 mb-2">Newsletter</h3>
              <p className="text-sm text-stone-600 mb-4">
                Subscribe to receive updates on new works, exhibitions, and events.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                />
                <button className="px-6 py-2 bg-stone-900 text-white hover:bg-stone-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-stone-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-stone-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-stone-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="artwork">Artwork Inquiry</option>
                  <option value="commission">Commission Request</option>
                  <option value="exhibition">Exhibition Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-stone-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
