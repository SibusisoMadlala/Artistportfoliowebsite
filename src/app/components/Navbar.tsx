import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/collaborations', label: 'Collabs' },
    { path: '/exhibitions', label: 'Exhibitions' },
    { path: '/journal', label: 'Journal' },
    { path: '/media', label: 'Press' },
    { path: '/shop', label: 'Shop' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-white/5 ${
        scrolled ? 'bg-[#2a2422]/95 backdrop-blur-md py-4 border-b shadow-lg' : 'bg-transparent py-8 border-b-0'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-[#f4f3ef]/20 group-hover:border-[#f4f3ef]/50 transition-colors">
                 <img src="/logo.png" alt="Zama Magubane" className="w-full h-full object-cover" />
            </div>
            <span className="font-heading text-xl text-[#f4f3ef] tracking-widest leading-none mt-1 group-hover:text-[#804a00] transition-colors duration-300">
              Zama Magubane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-marketing text-xs tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 ${
                  isActive(link.path)
                    ? 'text-[#f4f3ef]'
                    : 'text-[#f4f3ef]/60 hover:text-[#f4f3ef]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-px bg-[#804a00] transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#f4f3ef] hover:text-[#804a00] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 bg-[#2a2422] z-40 pt-24 px-6"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                >
                    <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-3xl text-[#f4f3ef] hover:text-[#804a00] transition-colors ${
                        isActive(link.path) ? 'text-[#804a00]' : ''
                    }`}
                    >
                    {link.label}
                    </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
