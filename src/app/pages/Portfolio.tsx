import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { artworks, collections } from '@/app/data/artworks';
import type { Artwork } from '@/app/data/artworks';

export function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks =
    selectedCollection === 'all'
      ? artworks
      : artworks.filter((a) => a.collection === selectedCollection);

  // Handle artwork modal from URL parameter
  useEffect(() => {
    const artworkId = searchParams.get('artwork');
    if (artworkId) {
      const artwork = artworks.find((a) => a.id === artworkId);
      if (artwork) {
        setSelectedArtwork(artwork);
      }
    }
  }, [searchParams]);

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setSearchParams({ artwork: artwork.id });
  };

  const handleCloseModal = () => {
    setSelectedArtwork(null);
    setSearchParams({});
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtworks.findIndex((a) => a.id === selectedArtwork.id);
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length
        : (currentIndex + 1) % filteredArtworks.length;
    const newArtwork = filteredArtworks[newIndex];
    setSelectedArtwork(newArtwork);
    setSearchParams({ artwork: newArtwork.id });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen pt-32 pb-24">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeIn}
           className="text-center mb-20 relative"
        >
          <h1 className="text-5xl md:text-8xl text-[#2a2422] font-light tracking-widest leading-none bg-[#f4f3ef] relative z-10 inline-block px-4">
             PORTFOLIO
          </h1>
          <span className="font-script text-6xl md:text-8xl text-[#804a00] absolute top-10 left-1/2 -translate-x-1/2 -rotate-2 z-0 w-full opacity-60">
             Creative
          </span>
          
          <p className="mt-8 text-center text-[#2a2422]/60 uppercase tracking-[0.2em] text-sm">
            Selected Works & Collections
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 border-b border-[#2a2422]/10 pb-8"
        >
          <button
            onClick={() => setSelectedCollection('all')}
            className={`text-sm tracking-[0.25em] uppercase transition-all duration-300 relative ${
              selectedCollection === 'all' 
              ? 'text-[#2a2422] font-medium' 
              : 'text-[#2a2422]/40 hover:text-[#2a2422]'
            }`}
          >
            All Works
            {selectedCollection === 'all' && (
              <motion.div layoutId="underline" className="absolute -bottom-9 left-0 right-0 h-[1px] bg-[#2a2422]" />
            )}
          </button>
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`text-sm tracking-[0.25em] uppercase transition-all duration-300 relative ${
                selectedCollection === collection.id
                ? 'text-[#2a2422] font-medium' 
                : 'text-[#2a2422]/40 hover:text-[#2a2422]'
              }`}
            >
              {collection.title}
              {selectedCollection === collection.id && (
                <motion.div layoutId="underline" className="absolute -bottom-9 left-0 right-0 h-[1px] bg-[#2a2422]" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 lg:gap-12"
        >
          <AnimatePresence>
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => handleArtworkClick(artwork)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#e8e6e1] relative mb-6">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#2a2422]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-light text-[#2a2422] mb-1 group-hover:text-[#804a00] transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-xs text-[#2a2422]/50 tracking-widest uppercase mb-2">
                    {artwork.year} — {artwork.medium}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a2422]/95 backdrop-blur-md p-4"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => handleNavigate('prev')}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={() => handleNavigate('next')}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-h-[90vh] overflow-y-auto lg:overflow-visible">
              <div className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[80vh] bg-black/20">
                 <img
                    src={selectedArtwork.imageUrl}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-contain"
                 />
              </div>

              <div className="order-1 lg:order-2 text-white px-4 lg:px-0">
                 <h2 className="text-4xl md:text-5xl font-light mb-4">{selectedArtwork.title}</h2>
                 <p className="text-[#d4c5b0] text-sm tracking-[0.2em] uppercase mb-8">
                   {selectedArtwork.year} • {selectedArtwork.medium}
                 </p>
                 
                 <div className="prose prose-invert prose-lg font-light leading-relaxed mb-12 opacity-80">
                   <p>{selectedArtwork.description}</p>
                 </div>

                 {selectedArtwork.status === 'available' ? (
                   <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-[#d4c5b0] transition-colors uppercase tracking-widest text-sm">
                     Inquire for Purchase
                   </button>
                 ) : (
                   <div className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white/50 uppercase tracking-widest text-sm cursor-not-allowed">
                     Sold / Private Collection
                   </div>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
