import { Link } from 'react-router-dom';
import { Instagram, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2a2422] text-[#f4f3ef] border-t border-[#f4f3ef]/10">
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-heading text-2xl text-[#f4f3ef]">
              ZAMA MAGUBANE
            </h3>
            <p className="font-body text-[#f4f3ef]/60 text-lg leading-relaxed max-w-sm">
              Contemporary artist exploring African heritage, spirituality, and Afro-futurism through mixed media and installation art.
            </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-marketing text-xs tracking-[0.2em] uppercase text-[#804a00] mb-6">Navigation</h4>
            <nav className="flex flex-col gap-3 font-marketing text-sm tracking-widest uppercase text-[#f4f3ef]/60">
              {['Portfolio', 'Exhibitions', 'Collaborations', 'Shop', 'About'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="hover:text-[#f4f3ef] transition-colors w-fit"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-marketing text-xs tracking-[0.2em] uppercase text-[#804a00] mb-6">Contact</h4>
            <div className="space-y-4 font-body text-[#f4f3ef]/60 text-lg">
              <p>Cape Town, South Africa</p>
              <a href="mailto:info@zamamagubane.art" className="block hover:text-[#f4f3ef] transition-colors">
                info@zamamagubane.art
              </a>
              <div className="flex gap-4 pt-2">
                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#f4f3ef]/40 hover:text-[#f4f3ef] transition-colors"><Instagram size={20} /></a>
                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#f4f3ef]/40 hover:text-[#f4f3ef] transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
             <h4 className="font-marketing text-xs tracking-[0.2em] uppercase text-[#804a00] mb-6">Newsletter</h4>
             <div className="flex flex-col gap-4">
               <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-transparent border-b border-[#f4f3ef]/20 py-3 text-[#f4f3ef] placeholder:text-[#f4f3ef]/20 font-marketing text-xs tracking-widest focus:outline-none focus:border-[#804a00] transition-colors"
              />
              <button className="self-start text-[#f4f3ef]/40 hover:text-[#f4f3ef] font-marketing text-xs uppercase tracking-widest transition-colors">
                 Subscribe
              </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[#f4f3ef]/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-marketing text-xs text-[#f4f3ef]/30 uppercase tracking-widest">
            © {year} Zama Magubane Arts
          </p>
          <div className="flex gap-8">
             <Link to="/privacy" className="font-marketing text-xs text-[#f4f3ef]/30 hover:text-[#f4f3ef] uppercase tracking-widest transition-colors">Privacy</Link>
             <Link to="/terms" className="font-marketing text-xs text-[#f4f3ef]/30 hover:text-[#f4f3ef] uppercase tracking-widest transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
