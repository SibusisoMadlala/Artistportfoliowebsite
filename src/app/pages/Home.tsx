import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { artworks } from '@/app/data/artworks';
import { exhibitions } from '@/app/data/exhibitions';

export function Home() {
  const featuredArtworks = artworks.slice(0, 3);
  const upcomingExhibitions = exhibitions.filter(e => e.type === 'upcoming').slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('public/Screenshot 2026-01-21 121422.png')` }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-light tracking-wider text-white mb-6"
          >
            ZAMA MAGUBANE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-light max-w-3xl mx-auto mb-12"
          >
            Contemporary artist weaving African heritage, spirituality, and Afro-futurism into transformative visual narratives
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors inline-flex items-center justify-center gap-2 group"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/exhibitions"
              className="px-8 py-4 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors"
            >
              Current Exhibitions
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              A selection from recent collections exploring themes of identity, heritage, and transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={`/portfolio?artwork=${artwork.id}`} className="group block">
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
                    <p className="text-sm text-stone-600">{artwork.year} • {artwork.medium}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-stone-900 hover:text-stone-600 transition-colors group"
            >
              View All Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Exhibitions */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-4">
              Upcoming Exhibitions
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              Join me at these upcoming shows and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingExhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Calendar className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-stone-500 mb-2">{exhibition.date}</p>
                    <h3 className="text-2xl font-light text-stone-900 mb-2">
                      {exhibition.title}
                    </h3>
                  </div>
                </div>
                <div className="ml-10">
                  <p className="text-stone-700 mb-2">
                    {exhibition.venue} • {exhibition.location}
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {exhibition.description}
                  </p>
                  <Link
                    to="/exhibitions"
                    className="inline-flex items-center gap-2 text-stone-900 hover:text-stone-600 transition-colors group text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider text-stone-900 mb-6">
                About the Artist
              </h2>
              <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
                <p>
                  Zama Magubane is a contemporary artist whose work explores the intersection of African heritage, spirituality, and Afro-futurism. Through mixed media, installation, and digital art, Magubane creates visual narratives that challenge conventional perspectives and celebrate cultural resilience.
                </p>
                <p>
                  With exhibitions across South Africa and international recognition, Magubane's work continues to push boundaries and inspire conversations about identity, transformation, and the African diaspora's future.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-stone-900 hover:text-stone-600 transition-colors group"
              >
                Read Full Bio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-stone-100 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1745174837801-b7f37abe9d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJvZnV0dXJpc20lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg5ODQ0NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Zama Magubane"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
