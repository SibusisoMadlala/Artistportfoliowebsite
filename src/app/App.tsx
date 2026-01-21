import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { Portfolio } from '@/app/pages/Portfolio';
import { About } from '@/app/pages/About';
import { Exhibitions } from '@/app/pages/Exhibitions';
import { Shop } from '@/app/pages/Shop';
import { Media } from '@/app/pages/Media';
import { Journal } from '@/app/pages/Journal';
import { Contact } from '@/app/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/media" element={<Media />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
