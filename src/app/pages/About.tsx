import { motion } from 'motion/react';
import { Award, Users, GraduationCap, Download } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Award, text: 'Winner, Contemporary African Art Prize 2024' },
    { icon: Award, text: 'Featured in Art Africa Magazine 2023' },
    { icon: Users, text: 'Collaborated with New Balance, Reebok, NikNaks' },
    { icon: GraduationCap, text: 'MFA, University of Cape Town, 2020' }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-12">
            About Zama Magubane
          </h1>

          <div className="space-y-12">
            <div className="aspect-[16/9] bg-stone-100 overflow-hidden">
              <img
                src="/Screenshot 2026-01-21 114050.png"
                alt="Zama Magubane"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Artist Statement</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                My work exists at the intersection of memory, heritage, and imagination. Through mixed media, installation, and digital art, I explore the complexities of African identity in contemporary contexts, drawing from ancestral wisdom while projecting into speculative futures.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                The UVALO ALUSEKHO (Fear Does Not Exist) series confronts the psychological barriers that limit our collective imagination, proposing Afro-futuristic alternatives to dominant narratives. IZINWELE NABANTU (Hair and People) examines the intimate relationship between our physical selves and cultural identity, particularly through the lens of Black hair politics and its spiritual significance.
              </p>
              <p className="text-stone-700 leading-relaxed">
                My practice is rooted in research, collaboration, and community engagement. I believe art has the power to transform not only individual consciousness but also collective understanding of who we are and who we can become.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-3xl font-light text-stone-900 mb-8">Biography</h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Zama Magubane (b. 1992, Soweto, South Africa) is a contemporary visual artist based in Cape Town. She received her MFA from the University of Cape Town in 2020, where her thesis explored the intersection of African cosmology and digital art practices.
                </p>
                <p>
                  Her work has been exhibited at prestigious venues including Zeitz MOCAA, Goodman Gallery, and Stevenson Gallery. She has participated in artist residencies in South Africa, Ghana, and the United States, and her practice has been supported by grants from the South African National Arts Council and the Prince Claus Fund.
                </p>
                <p>
                  Beyond the studio, Magubane collaborates with cultural institutions and brands to expand the reach of African contemporary art. Her recent partnerships include designing limited edition collections for New Balance and Reebok, and creating packaging art for NikNaks snacks.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-3xl font-light text-stone-900 mb-8">Selected Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <achievement.icon className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                    <p className="text-stone-700">{achievement.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-12">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-colors">
                <Download className="w-5 h-5" />
                Download Press Kit (PDF)
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
