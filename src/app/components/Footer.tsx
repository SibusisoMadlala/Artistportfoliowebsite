import { Link } from 'react-router-dom';
import { Instagram, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-light tracking-wider mb-4">
              ZAMA MAGUBANE
            </h3>
            <p className="text-sm leading-relaxed text-stone-400">
              Contemporary artist exploring African heritage, spirituality, and Afro-futurism through mixed media and installation art.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm tracking-wider mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['Portfolio', 'About', 'Exhibitions', 'Shop'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm tracking-wider mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-stone-400">
              <p>Cape Town, South Africa</p>
              <a
                href="mailto:info@zamamagubane.art"
                className="block hover:text-white transition-colors"
              >
                info@zamamagubane.art
              </a>
              <p>+27 (0) 21 XXX XXXX</p>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white text-sm tracking-wider mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@zamamagubane.art"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div>
              <input
                type="email"
                placeholder="Subscribe to newsletter"
                className="w-full px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Zama Magubane Arts. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-stone-500">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
