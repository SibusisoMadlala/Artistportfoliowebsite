import { motion } from 'motion/react';
import { ShoppingCart, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export function Shop() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            SHOP
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative group">
               {selectedDesign ? (
                 <>
                  <img 
                    src={`/images/mug${selectedDesign}.png`} 
                    alt={`Nokukhanya Mug Design ${selectedDesign}`}
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedDesign(null)}
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
                    title="Back to video"
                  >
                    <RotateCcw className="w-5 h-5 text-stone-900" />
                  </button>
                 </>
               ) : (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    controls
                    className="w-full h-full object-cover"
                  >
                      <source src="/videos/archive-video-4.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
               )}
            </div>
            
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
              Nokukhanya Mug by Zama Magubane Arts
            </h2>
            <p className="text-2xl font-medium text-stone-900 mb-8">R 450</p>

            <div className="prose prose-stone max-w-none text-stone-600 space-y-6 mb-12">
              <p>
                The Nokukhanya Mug is a limited edition piece from Zama Magubane Arts. Each mug features artwork drawn directly from the studio’s research based practice and embodies the visual language, symbolism, and material sensibility of the artist.
              </p>
              <p>
                This edition translates conceptual art into a functional object while preserving meaning and depth. Nokukhanya is not simply a mug; it is an extension of the studio’s practice and an opportunity to engage with contemporary African art in daily life.
              </p>
            </div>

            <div className="border-t border-stone-200 py-8">
              <h3 className="text-xl font-light text-stone-900 mb-4">Product Details</h3>
              <p className="text-stone-600 leading-relaxed">
                The Nokukhanya Mug is produced in high quality ceramic with a matte finish. Each design reflects research, texture, and narrative derived from Zama Magubane Arts collections. Each mug is individually numbered and part of a strictly limited production.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-light text-stone-900">Choose Design</h3>
                <span className="text-stone-500 text-sm">
                  {selectedDesign ? `Design ${selectedDesign} selected` : 'Please select a design'}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 18 }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    onClick={() => setSelectedDesign(num)}
                    className={`aspect-square relative rounded-sm overflow-hidden border-2 transition-all ${
                      selectedDesign === num 
                        ? 'border-stone-900 ring-1 ring-stone-900' 
                        : 'border-transparent hover:border-stone-300'
                    }`}
                  >
                    <img 
                      src={`/images/mug${num}.png`} 
                      alt={`Design ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <button 
                 disabled={!selectedDesign}
                 className={`w-full px-8 py-4 text-white transition-colors flex items-center justify-center gap-3 text-lg ${
                   selectedDesign 
                    ? 'bg-stone-900 hover:bg-stone-800' 
                    : 'bg-stone-400 cursor-not-allowed'
                 }`}
               >
                <ShoppingCart className="w-5 h-5" />
                {selectedDesign ? 'Add to Cart' : 'Select a Design'}
              </button>
              <p className="text-sm text-stone-500 text-center">
                Secure checkout • Worldwide shipping available
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

