import { motion } from 'motion/react';
import { ShoppingCart, RotateCcw, Trash2, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Shop() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(1);
  const [cartOpen, setCartOpen] = useState(false);

  type CartItem = {
    id: string; // product id + variant
    productId: string;
    title: string;
    variant?: string;
    price: number;
    quantity: number;
  };

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem('cart');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const navigate = useNavigate();

  // Design variants
  const designs = [1, 2, 3, 4];
  const price = 350;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column - Dark - Product Visuals */}
      <div className="lg:w-1/2 bg-[#2a2422] min-h-[50vh] lg:min-h-screen p-8 lg:p-20 relative flex flex-col justify-center items-center">
        <div className="absolute top-8 left-8">
          <span className="font-marketing text-xs tracking-[0.2em] text-[#f4f3ef]/60 uppercase">
             Collection 001
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md aspect-[4/5] relative bg-[#1c1817] shadow-2xl overflow-hidden"
        >
            <div className="w-full h-full relative">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-90"
              >
                <source src="/videos/archive-video-3.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#2a2422]/10 pointer-events-none" />
            </div>
        </motion.div>
      </div>

      {/* Right Column - Light - Product Details */}
      <div className="lg:w-1/2 bg-[#f4f3ef] min-h-screen px-6 py-12 lg:p-20 flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-xl mx-auto lg:mx-0"
        >
           {/* Header */}
           <div className="relative mb-12">
               <h1 className="font-heading text-5xl md:text-7xl text-[#2a2422] mb-4">
                  Nokukhanya
               </h1>
               <span className="font-script text-3xl md:text-5xl text-[#804a00] absolute -bottom-6 right-0 -rotate-6">
                  Mug Collection
               </span>
           </div>

           <div className="space-y-8 mt-16 font-marketing">
              <div className="flex justify-between items-baseline border-b border-[#2a2422]/10 pb-4">
                 <span className="text-sm tracking-widest uppercase text-[#2a2422]/60">Price</span>
                 <span className="text-2xl text-[#2a2422]">R 350.00</span>
              </div>

              <div>
                <p className="text-[#2a2422]/80 leading-relaxed font-body text-lg">
                  Start your day with art. The Nokukhanya Mug brings the warmth and vibrancy of Zama Magubane's signature patterns to your daily ritual. 
                  Featured in the "Uvalo Alusekho" video series, these designs celebrate resilience and joy.
                </p>
              </div>

              {/* Variant Selector */}
              <div className="space-y-4">
                 <span className="text-sm tracking-widest uppercase text-[#2a2422]/60">Select Design</span>
                 <div className="grid grid-cols-4 gap-4">
                    {designs.map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedDesign(num)}
                        className={`aspect-square border transition-all duration-300 relative overflow-hidden group ${
                           selectedDesign === num 
                           ? 'border-[#2a2422] ring-1 ring-[#2a2422] ring-offset-2 ring-offset-[#f4f3ef]' 
                           : 'border-[#2a2422]/20 hover:border-[#2a2422]/40'
                        }`}
                      >
                         <ImageWithFallback 
                            src={`/images/mug${num}.png`}
                            alt={`Design ${num}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            fallbackText={`${num}`}
                         />
                      </button>
                    ))}
                 </div>
              </div>

              {/* Action */}
              <div className="space-y-6">
                <button
                  onClick={() => {
                    // add to cart
                    const variant = selectedDesign ?? 1;
                    const itemId = `mug-${variant}`;
                    setCart((prev) => {
                      const found = prev.find((p) => p.id === itemId);
                      if (found) {
                        return prev.map((p) => p.id === itemId ? { ...p, quantity: p.quantity + 1 } : p);
                      }
                      const newItem: CartItem = {
                        id: itemId,
                        productId: 'nokukhanya-mug',
                        title: `Nokukhanya Mug — Design ${variant}`,
                        variant: String(variant),
                        price,
                        quantity: 1
                      };
                      return [...prev, newItem];
                    });
                    setCartOpen(true);
                  }}
                  className="w-full bg-[#2a2422] text-[#f4f3ef] py-6 px-8 hover:bg-[#804a00] transition-colors duration-300 flex items-center justify-center gap-4 group mt-8"
                >
                  <span className="text-sm tracking-[0.2em] uppercase">Add to Cart</span>
                  <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-[#2a2422]/40 text-center uppercase tracking-widest mt-6">
                  Limited Stock Available • Secure Checkout
                </p>
              </div>

              <p className="text-xs text-[#2a2422]/40 text-center uppercase tracking-widest mt-6">
                 Limited Stock Available • Secure Checkout
              </p>
           </div>
        </motion.div>

        {/* Cart Section */}
        <div className="max-w-xl mx-auto lg:mx-0 mt-12">
          <div className={`border border-[#2a2422]/10 rounded-lg bg-white p-6 ${cart.length === 0 ? 'opacity-80' : ''}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Cart</h3>
              <button onClick={() => { setCart([]); localStorage.removeItem('cart'); }} className="text-sm text-[#2a2422]/60 hover:text-[#2a2422] flex items-center gap-2"><Trash2 className="w-4 h-4" /> Clear</button>
            </div>

            {cart.length === 0 ? (
              <div className="text-sm text-[#2a2422]/60">Your cart is empty. Add a mug to begin.</div>
            ) : (
              <div className="space-y-4">
                {cart.map((it) => (
                  <div key={it.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={`/images/mug${it.variant}.png`} alt={it.title} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <div className="font-medium text-sm">{it.title}</div>
                        <div className="text-xs text-[#2a2422]/60">R {it.price.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setCart((prev) => prev.map(p => p.id === it.id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p))} className="p-2 bg-[#f4f3ef] rounded"><Minus className="w-4 h-4" /></button>
                      <div className="w-8 text-center">{it.quantity}</div>
                      <button onClick={() => setCart((prev) => prev.map(p => p.id === it.id ? { ...p, quantity: p.quantity + 1 } : p))} className="p-2 bg-[#f4f3ef] rounded"><Plus className="w-4 h-4" /></button>
                      <button onClick={() => setCart((prev) => prev.filter(p => p.id !== it.id))} className="p-2 text-[#c53030] ml-2"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4 flex items-center justify-between">
                  <div className="text-sm text-[#2a2422]/60">Total</div>
                  <div className="font-medium">R {cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}</div>
                </div>

                <div className="pt-4">
                  <button onClick={() => navigate('/checkout')} className="w-full bg-[#2a2422] text-[#f4f3ef] py-3 rounded hover:bg-[#804a00] transition-colors">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
