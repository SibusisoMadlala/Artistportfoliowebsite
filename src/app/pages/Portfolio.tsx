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

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl">
            Explore collections that weave together African heritage, contemporary expression, and visionary futures
          </p>
        </motion.div>

        {/* Collection Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCollection('all')}
              className={`px-6 py-3 transition-colors ${
                selectedCollection === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Works ({artworks.length})
            </button>
            {collections.map((collection) => (
              <button
                key={collection.name}
                onClick={() => setSelectedCollection(collection.name)}
                className={`px-6 py-3 transition-colors ${
                  selectedCollection === collection.name
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {collection.name} ({collection.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Collection Description */}
        <AnimatePresence mode="wait">
          {selectedCollection !== 'all' && (
            <motion.div
              key={selectedCollection}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-12 p-6 bg-stone-50 border-l-4 border-stone-900"
            >
              <p className="text-stone-700 leading-relaxed">
                {collections.find((c) => c.name === selectedCollection)?.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onClick={() => handleArtworkClick(artwork)}
              className="cursor-pointer group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-light text-stone-900 group-hover:text-stone-600 transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-sm text-stone-500">{artwork.collection}</p>
                <p className="text-sm text-stone-600">
                  {artwork.year} • {artwork.medium}
                </p>
                {artwork.available && artwork.price && (
                  <p className="text-sm text-stone-900 font-medium">{artwork.price}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Artwork Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full bg-white overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-stone-100 transition-colors z-10"
              >
                <X className="w-6 h-6 text-stone-900" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full hover:bg-stone-100 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6 text-stone-900" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigate('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full hover:bg-stone-100 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6 text-stone-900" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="bg-stone-100">
                  <img
                    src={selectedArtwork.imageUrl}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-stone-500 mb-2">
                        {selectedArtwork.collection}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4">
                        {selectedArtwork.title}
                      </h2>
                    </div>

                    <div className="space-y-3 text-stone-600">
                      <p>
                        <span className="text-stone-500">Year:</span> {selectedArtwork.year}
                      </p>
                      <p>
                        <span className="text-stone-500">Medium:</span> {selectedArtwork.medium}
                      </p>
                      <p>
                        <span className="text-stone-500">Dimensions:</span>{' '}
                        {selectedArtwork.dimensions}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-200">
                      <p className="text-stone-700 leading-relaxed">
                        {selectedArtwork.description}
                      </p>
                    </div>

                    {selectedArtwork.available && selectedArtwork.price && (
                      <div className="pt-4 border-t border-stone-200">
                        <p className="text-2xl font-light text-stone-900 mb-4">
                          {selectedArtwork.price}
                        </p>
                        <button className="w-full px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                          Inquire About This Work
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    )}

                    {!selectedArtwork.available && (
                      <div className="pt-4 border-t border-stone-200">
                        <p className="text-stone-500 italic">
                          This work is part of a private collection
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
