import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { artworks } from '@/app/data/artworks';

export function Shop() {
  const availableWorks = artworks.filter((a) => a.available);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            Shop
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl">
            Original works, limited edition prints, and collaborations available for purchase
          </p>
        </motion.div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 p-6 bg-stone-50 border-l-4 border-stone-900"
        >
          <p className="text-stone-700">
            For purchase inquiries, shipping details, or custom commissions, please{' '}
            <a href="/contact" className="underline hover:text-stone-900">
              contact us
            </a>
            . All works are sold with a certificate of authenticity.
          </p>
        </motion.div>

        {/* Available Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-stone-900 mb-8">Original Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableWorks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-stone-900">{artwork.title}</h3>
                  <p className="text-sm text-stone-500">{artwork.collection}</p>
                  <p className="text-sm text-stone-600">
                    {artwork.year} • {artwork.medium}
                  </p>
                  <p className="text-sm text-stone-600">{artwork.dimensions}</p>
                  {artwork.price && (
                    <p className="text-lg font-medium text-stone-900 mt-3">{artwork.price}</p>
                  )}
                  <button className="w-full mt-4 px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Inquire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Limited Edition Prints */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-stone-900 mb-8">Limited Edition Prints</h2>
          <div className="bg-stone-50 p-8 text-center">
            <p className="text-stone-600">
              Limited edition prints coming soon. Subscribe to our newsletter to be notified.
            </p>
          </div>
        </div>

        {/* Merchandise */}
        <div>
          <h2 className="text-3xl font-light text-stone-900 mb-8">Collaborations & Merchandise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { brand: 'New Balance', product: 'Limited Edition Sneakers', status: 'Sold Out' },
              { brand: 'Reebok', product: 'Art Collection Apparel', status: 'Available' },
              { brand: 'NikNaks', product: 'Packaging Design', status: 'In Stores' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-stone-200 hover:border-stone-900 transition-colors"
              >
                <p className="text-sm text-stone-500 mb-2">{item.brand}</p>
                <h3 className="text-xl font-light text-stone-900 mb-4">{item.product}</h3>
                <p className="text-stone-700 mb-6">{item.status}</p>
                <button className="w-full px-6 py-3 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
