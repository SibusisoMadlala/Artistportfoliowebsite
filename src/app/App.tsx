import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ScrollToTop } from '@/app/components/ScrollToTop';
import { Home } from '@/app/pages/Home';
import { LicensedWork } from '@/app/pages/LicensedWork';
import { About } from '@/app/pages/About';
import { Catalogue } from '@/app/pages/Catalogue';
import { Checkout } from '@/app/pages/Checkout';
import { Exhibitions } from '@/app/pages/Exhibitions';
import { Shop } from '@/app/pages/Shop';
import { Contact } from '@/app/pages/Contact';
import { Collaborations } from '@/app/pages/Collaborations';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/licensed-work" element={<LicensedWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
