import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
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
        scrolled ? 'bg-[#2a2422]/95 backdrop-blur-md py-4 border-b shadow-lg' : 'bg-transparent py-6 lg:py-8 border-b-0'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-8 h-8 lg:w-10 lg:h-10 overflow-hidden rounded-full border border-[#f4f3ef]/20 group-hover:border-[#f4f3ef]/50 transition-colors">
                 <img src="/logo.png" alt="Zama Magubane" className="w-full h-full object-cover" />
            </div>
            {/* Text hidden on small screens to make room for menu */}
            <span className="font-heading text-lg lg:text-xl text-[#f4f3ef] tracking-widest leading-none mt-1 group-hover:text-[#804a00] transition-colors duration-300 hidden md:block">
              Zama Magubane
            </span>
          </Link>

          {/* Navigation - Always visible, scrollable on mobile */}
          <div className="flex items-center gap-5 lg:gap-8 overflow-x-auto no-scrollbar flex-1 justify-end lg:justify-end lg:flex-none lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-marketing text-[10px] lg:text-xs tracking-[0.1em] lg:tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 whitespace-nowrap shrink-0 ${
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
        </div>
      </div>
    </nav>
  );
}
