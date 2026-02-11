import { motion } from 'motion/react';
import { ShoppingCart, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Shop() {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);

  // Design variants
  const designs = [1, 2, 3, 4];

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
           {selectedDesign ? (
             <div className="relative w-full h-full group">
               <ImageWithFallback
                    src={`/images/mug${selectedDesign}.png`} 
                    alt={`Nokukhanya Mug Design ${selectedDesign}`}
                    className="w-full h-full object-cover"
                    fallbackText={`Design ${selectedDesign}`}
                  />
                <button 
                  onClick={() => setSelectedDesign(null)}
                  className="absolute top-4 right-4 bg-[#f4f3ef] p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
                  title="Back to video"
                >
                  <RotateCcw className="w-5 h-5 text-[#2a2422]" />
                </button>
             </div>
           ) : (
              <div className="w-full h-full relative">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover opacity-90"
                >
                  <source src="/videos/mug-rotation.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#2a2422]/10 pointer-events-none" />
                
                {/* Overlay Text only when video is playing */}
                <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[#f4f3ef] text-sm font-marketing tracking-widest uppercase opacity-60">
                        View 360° Rotation
                    </p>
                </div>
              </div>
           )}
        </motion.div>
        
        {/* Simple Navigation Dials for Visuals */}
        <div className="mt-8 flex gap-4">
             {designs.map((num) => (
                <button
                    key={num}
                    onClick={() => setSelectedDesign(num)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedDesign === num 
                        ? 'bg-[#f4f3ef] scale-125' 
                        : 'bg-[#f4f3ef]/20 hover:bg-[#f4f3ef]/50'
                    }`}
                />
             ))}
             <button
                onClick={() => setSelectedDesign(null)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedDesign === null 
                    ? 'bg-[#f4f3ef] scale-125' 
                    : 'bg-[#f4f3ef]/20 hover:bg-[#f4f3ef]/50'
                }`}
            />
        </div>
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
              <button className="w-full bg-[#2a2422] text-[#f4f3ef] py-6 px-8 hover:bg-[#804a00] transition-colors duration-300 flex items-center justify-center gap-4 group mt-8">
                 <span className="text-sm tracking-[0.2em] uppercase">Add to Cart</span>
                 <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-[#2a2422]/40 text-center uppercase tracking-widest mt-6">
                 Limited Stock Available • Secure Checkout
              </p>
           </div>
        </motion.div>
      </div>
    </div>
  );
}

