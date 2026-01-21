import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';

export function Media() {
  const collaborations = [
    { brand: 'New Balance', year: '2024', description: 'Limited edition sneaker design incorporating Afro-futuristic patterns from the UVALO ALUSEKHO series.' },
    { brand: 'Reebok', year: '2023', description: 'Art collection featuring heritage-inspired textile designs across apparel line.' },
    { brand: 'NikNaks', year: '2023', description: 'Packaging design celebrating African cultural motifs and contemporary expression.' }
  ];

  const press = [
    { publication: 'Art Africa Magazine', title: 'Rising Stars of Contemporary African Art', year: '2024' },
    { publication: 'The Sunday Times', title: 'Zama Magubane: Weaving Future Narratives', year: '2024' },
    { publication: 'Nataal', title: 'Afrofuturism in South African Visual Arts', year: '2023' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            Media & Collaborations
          </h1>
        </motion.div>

        {/* Brand Collaborations */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-stone-900 mb-8">Brand Collaborations</h2>
          <div className="space-y-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-4 border-stone-900 pl-8 py-6 hover:bg-stone-50 transition-colors"
              >
                <p className="text-sm text-stone-500 mb-2">{collab.year}</p>
                <h3 className="text-2xl font-light text-stone-900 mb-3">{collab.brand}</h3>
                <p className="text-stone-600 leading-relaxed">{collab.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Press & Interviews */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-stone-900 mb-8">Press & Interviews</h2>
          <div className="space-y-6">
            {press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex justify-between items-start p-6 border border-stone-200 hover:border-stone-900 transition-colors group cursor-pointer"
              >
                <div>
                  <p className="text-sm text-stone-500 mb-1">{item.publication}</p>
                  <h3 className="text-xl font-light text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-stone-600">{item.year}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <h2 className="text-3xl font-light text-stone-900 mb-8">Videos & Films</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Behind the Scenes: UVALO ALUSEKHO', src: '/videos/Recording 2026-01-21 114331.mp4' },
              { title: 'Studio Visit', src: '/videos/Recording 2026-01-21 115417.mp4' },
              { title: 'Artist Talk at Zeitz MOCAA', src: '/videos/Recording 2026-01-21 115519.mp4' }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <video
                  className="aspect-video w-full mb-4 object-cover"
                  controls
                  muted
                  src={video.src}
                >
                  Your browser does not support the video tag.
                </video>
                <h3 className="text-lg font-light text-stone-900">{video.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
