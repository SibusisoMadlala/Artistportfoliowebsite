import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { artworks } from '@/app/data/artworks';
import { exhibitions } from '@/app/data/exhibitions';

export function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featuredArtworks = artworks.slice(0, 3);
  const upcomingExhibitions = exhibitions.filter(e => e.type === 'upcoming').slice(0, 2);

  return (
    <div className="bg-[#f4f3ef] w-full overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left: Image */}
        <div className="relative h-[60vh] md:h-screen w-full order-1 md:order-1">
           <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: `url('/threads-of-heritage.png')` }}
           />
        </div>

        {/* Right: Text Content */}
        <div className="bg-[#3e322d] flex flex-col justify-center items-center md:items-start px-8 md:px-20 py-20 relative order-2 md:order-2">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeIn}
             className="relative z-10 text-white text-center md:text-left"
           >
             <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-widest leading-none font-light">
               PORTFOLIO
             </h1>
             <span className="font-script text-5xl md:text-7xl lg:text-8xl text-[#d4c5b0] absolute -bottom-8 right-0 md:-right-4 md:translate-x-12 transform -rotate-6 opacity-90 block">
               Creative
             </span>
             
             <div className="mt-20 md:mt-32 space-y-2">
                <p className="text-sm tracking-[0.3em] uppercase opacity-70">Zama Magubane</p>
                <p className="text-sm tracking-[0.3em] uppercase opacity-70">Artist & Curator</p>
             </div>

             <div className="mt-16">
               <Link to="/contact" className="inline-block text-xs md:text-sm tracking-[0.2em] uppercase border-b border-white/30 pb-1 hover:border-white transition-colors">
                 Work with me
               </Link>
             </div>
           </motion.div>
        </div>
      </div>

      {/* SECTION 2: ABOUT */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
         {/* Left: Text */}
         <div className="bg-[#f4f3ef] flex flex-col justify-center px-8 md:px-24 py-20 order-2 md:order-1">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
            >
               <div className="mb-12 relative">
                 <h2 className="text-5xl md:text-7xl text-[#2a2422] leading-none">
                   ABOUT
                 </h2>
                 <span className="font-script text-6xl md:text-7xl text-[#804a00] absolute -bottom-10 left-10 md:left-20 -rotate-3 block">
                   Me
                 </span>
               </div>
               
               <div className="mt-10 max-w-md text-[#2a2422]/80 space-y-6 text-lg md:text-xl font-light leading-relaxed">
                 <p>
                   I started my career in the fast-paced world of contemporary art, where I honed my skills in capturing dynamic expressions of culture and spirituality.
                 </p>
                 <p>
                   My work is an exploration of ancestral echoes, seeking to bridge the gap between tradition and modern artistic practice through visual storytelling.
                 </p>
               </div>
            </motion.div>
         </div>

         {/* Right: Image */}
         <div className="relative h-[60vh] md:h-auto order-1 md:order-2">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/zama-magubane-profile.png')` }}
            />
         </div>
      </section>

      {/* SECTION 3: PREVIOUS WORK */}
      <section className="bg-[#3e322d] text-white py-24 px-4 md:px-12">
         <div className="max-w-7xl mx-auto">
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               className="mb-20 text-center relative"
            >
               <h2 className="text-5xl md:text-7xl inline-block relative z-10">
                 PREVIOUS
               </h2>
               <span className="font-script text-6xl md:text-8xl text-[#d4c5b0] absolute top-10 left-1/2 -translate-x-1/2 -rotate-2 w-full pointer-events-none">
                 Work
               </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-16">
               {/* Large Item */}
               <div className="md:col-span-2 relative aspect-[21/9] group overflow-hidden cursor-pointer">
                  <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: `url('/future-visions.png')` }}
                  />
                  <div className="absolute bottom-0 left-0 p-6 bg-black/20 backdrop-blur-sm w-full">
                     <p className="text-sm tracking-widest uppercase">Future Visions Exhibition</p>
                  </div>
               </div>

               {/* Smaller Items */}
               {/* Item 1 */}
               <div className="aspect-[4/5] relative group overflow-hidden">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: `url('/ancestral-echoes.jpg')` }}
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                     <p className="text-xs tracking-widest uppercase opacity-80">Ancestral Echoes</p>
                  </div>
               </div>

               {/* Item 2 */}
                <div className="aspect-[4/5] relative group overflow-hidden md:mt-24">
                   <div 
                     className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: `url('/spirit-pathways.png')` }}
                  />
                   <div className="absolute bottom-0 left-0 p-4">
                     <p className="text-xs tracking-widest uppercase opacity-80">Spirit Pathways</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: QUOTE */}
      <section className="bg-[#3e322d] py-32 px-6 flex items-center justify-center border-t border-white/5">
        <div className="max-w-4xl text-center">
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1 }}
             className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight text-stone-200 italic"
           >
             "Every piece of art I create makes me feel like a visual storyteller weaving history, style, and soul. Having the opportunity to connect deeply with my heritage is a gift."
           </motion.p>
           <p className="mt-8 text-sm tracking-[0.3em] uppercase opacity-50 text-[#d4c5b0] font-normal">– Zama Magubane</p>
        </div>
      </section>

      {/* SECTION 5: EXPERIENCE / EDUCATION */}
      <section className="bg-[#f4f3ef] text-[#2a2422]">
          <div className="grid grid-cols-1 md:grid-cols-2">
             <div className="p-12 md:p-24 space-y-16 order-2 md:order-1">
                <div>
                   <h3 className="text-4xl mb-8 font-serif italic text-[#804a00]">EXPERIENCE</h3>
                   <div className="space-y-6 border-l-2 border-[#804a00]/20 pl-6">
                      <div>
                         <p className="font-bold tracking-wide text-xl">Independent Artist</p>
                         <p className="text-sm opacity-60 mb-2 font-mono">2020 - Present</p>
                         <p className="italic opacity-80">Johannesburg, South Africa</p>
                      </div>
                      <div>
                         <p className="font-bold tracking-wide text-xl">Gallery Curator</p>
                         <p className="text-sm opacity-60 mb-2 font-mono">2018 - 2020</p>
                         <p className="italic opacity-80">Maboneng Art District</p>
                      </div>
                   </div>
                </div>

                <div>
                   <h3 className="text-4xl mb-8 font-serif italic text-[#804a00]">EDUCATION</h3>
                   <div className="space-y-6 border-l-2 border-[#804a00]/20 pl-6">
                      <div>
                         <p className="font-bold tracking-wide text-xl">Bachelor of Fine Arts</p>
                         <p className="text-sm opacity-60 mb-2 font-mono">2014 - 2018</p>
                         <p className="italic opacity-80">University of Cape Town</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="relative min-h-[50vh] overflow-hidden order-1 md:order-2">
                <div 
                   className="absolute inset-0 bg-cover bg-center grayscale opacity-80 hover:scale-105 transition-transform duration-1000"
                   style={{ backgroundImage: `url('/sacred-geometry.png')` }}
                />
             </div>
          </div>
      </section>

      {/* SECTION 6: CONTACT */}
      <section className="bg-[#3e322d] text-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[60vh]">
             {/* Image */}
             <div className="relative min-h-[40vh] md:col-span-1 hidden md:block">
                 <div 
                   className="absolute inset-0 bg-cover bg-center opacity-80"
                   style={{ backgroundImage: `url('/threads-of-heritage.png')` }}
                />
             </div>

             {/* Content */}
             <div className="md:col-span-2 p-12 md:p-24 flex flex-col justify-center relative">
                 <motion.div
                   initial="hidden"
                   whileInView="visible"
                   variants={fadeIn}
                 >
                    <div className="mb-12 relative w-fit">
                       <h2 className="text-5xl md:text-7xl leading-none">
                         GET IN
                       </h2>
                       <span className="font-script text-6xl md:text-7xl text-[#d4c5b0] absolute -bottom-8 -right-10 md:-right-20 -rotate-3 block">
                         Touch
                       </span>
                    </div>

                    <div className="mt-20 space-y-12 text-right md:text-left flex flex-col items-end md:items-start pl-0 md:pl-20 border-l border-white/10">
                       <div className="text-right md:text-left w-full">
                          <p className="text-xs tracking-[0.2em] opacity-60 mb-2">EMAIL</p>
                          <a href="mailto:hello@zamamagubane.com" className="text-xl md:text-3xl hover:text-[#d4c5b0] transition-colors font-light">
                            hello@zamamagubane.com
                          </a>
                       </div>
                       
                       <div className="text-right md:text-left w-full">
                          <p className="text-xs tracking-[0.2em] opacity-60 mb-2">STUDIO</p>
                          <p className="text-xl md:text-3xl font-light leading-relaxed">
                            Maboneng Precinct,<br/>
                            Johannesburg
                          </p>
                       </div>
                    </div>
                 </motion.div>
             </div>
          </div>
      </section>
      
    </div>
  );
}
