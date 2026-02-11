import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Collaborations() {
  const images = [
    // gallery-image-12 to 15
    '/images/gallery-image-12.jpeg',
    '/images/gallery-image-13.jpeg',
    '/images/gallery-image-14.jpeg',
    '/images/gallery-image-15.jpeg',
    // gallery-image-27 to 33
    '/images/gallery-image-27.jpeg',
    '/images/gallery-image-28.jpeg',
    '/images/gallery-image-29.jpeg',
    '/images/gallery-image-30.jpeg',
    '/images/gallery-image-31.jpeg',
    '/images/gallery-image-32.jpeg',
    '/images/gallery-image-33.jpeg',
    // gallery-image-35 to 37
    '/images/gallery-image-35.jpeg',
    '/images/gallery-image-36.jpeg',
    '/images/gallery-image-37.jpeg',
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#f4f3ef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Text Content - Sticky Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-heading text-[#2a2422] mb-8 leading-none">
                Collabs
              </h1>
              <div className="space-y-6 max-w-md">
                <h2 className="text-2xl font-body text-[#804a00] italic">
                   Working Across Cultural and Commercial Contexts
                </h2>
                <div className="w-12 h-0.5 bg-[#2a2422]/20" />
                <p className="text-[#2a2422]/80 leading-relaxed font-body text-lg">
                  Zama Magubane Arts engages in collaborations that extend artistic practice into commercial, public, and institutional environments without compromising cultural integrity.
                </p>
                <p className="text-[#2a2422]/80 leading-relaxed font-body text-lg">
                   Commercial work is approached as a strategic translation of existing artistic language rather than a departure from it.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Grid - Scrollable Side */}
          <div className="lg:col-span-8">
             <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: idx % 3 * 0.1 }}
                    className="relative break-inside-avoid"
                  >
                     <div className="overflow-hidden bg-[#2a2422] group">
                        <ImageWithFallback
                           src={img}
                           alt={`Collaboration ${idx + 1}`}
                           className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                           fallbackText={`Collab ${idx + 1}`}
                        />
                     </div>
                  </motion.div>
                ))}
             </div>

             {/* Videos Section */}
             <div className="mt-24">
               <h3 className="font-marketing text-xs tracking-[0.2em] uppercase text-[#2a2422] mb-8">Video Archives</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="aspect-video bg-[#2a2422]">
                     {/* Placeholder for video 1 */}
                     <video muted loop controls className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity">
                        <source src="/videos/archive-video-1.mp4" type="video/mp4" />
                     </video>
                  </div>
                  <div className="aspect-video bg-[#2a2422]">
                      {/* Placeholder for video 2 */}
                      <video muted loop controls className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity">
                        <source src="/videos/archive-video-2.mp4" type="video/mp4" />
                     </video>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
