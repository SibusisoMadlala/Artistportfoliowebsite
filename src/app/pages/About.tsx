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
                src="/zama-magubane-profile.png"
                alt="Zama Magubane"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">About Zama Magubane Arts</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Zama Magubane Arts is an African art house rooted in cultural knowledge systems, contemporary practice, and social responsibility. The practice operates at the intersection of visual art, performance, education, and cultural strategy, using art as a tool for inquiry, dialogue, and lasting impact.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Grounded in African philosophies and ways of knowing, the work engages questions of identity, spirituality, memory, and the body as sites of both history and future making. Rather than prioritising spectacle, the practice is committed to depth, rigor, and continuity, positioning art as an active contributor to cultural consciousness and social reflection.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Through research based projects, public programming, and collaborative partnerships, Zama Magubane Arts functions as both a creative practice and a cultural platform. It moves fluidly between institutional, communal, and commercial spaces while maintaining cultural integrity and conceptual clarity.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-3xl font-light text-stone-900 mb-8">The Practice</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The practice of Zama Magubane Arts spans multiple disciplines and formats, unified by a consistent conceptual and ethical foundation. Work is developed through contemporary visual art, large scale works, interdisciplinary performance, and installation based practice.
              </p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Alongside artistic production, the practice extends into research driven cultural projects, education, and public engagement. Zama Magubane Arts also works with institutions, brands, and organisations through collaborations, licensed artwork, and cultural strategy, ensuring that African rooted narratives are translated responsibly across different platforms.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Each project is shaped by its context and audience, with careful attention to responsibility, relevance, and lasting impact within both African and global frameworks.
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

            {/* <div className="border-t border-stone-200 pt-12">
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
            </div> */}

            <div className="border-t border-stone-200 pt-12">
              <h2 className="text-3xl font-light text-stone-900 mb-8">Licensing</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-light text-stone-900 mb-4">Artwork Licensing</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Zama Magubane Arts licenses selected artworks and visual systems for use across products, environments, publications, and campaigns. Licensing is approached as an extension of the artistic practice rather than a secondary commercial activity.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Each licensed work is contextualised to ensure that meaning, cultural integrity, and authorship are preserved across applications. Licensing agreements are developed with care, clarity, and long term value in mind.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">What Licensing Means Within This Practice</h4>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Licensing within Zama Magubane Arts allows existing bodies of work to live beyond their original format while remaining conceptually intact. Rather than adapting work to fit trends, the practice collaborates with partners to identify appropriate alignment between artwork, application, and audience.
                  </p>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Licensed use may include product surfaces, textiles, objects, printed matter, spatial applications, and digital environments, provided the context respects the original intent of the work.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Licensing does not involve the sale of ownership unless explicitly stated. All licensed works remain part of the Zama Magubane Arts archive.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">Selection and Scope</h4>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Not all works are available for licensing. Selection is based on conceptual suitability, scale of application, and alignment of values.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Licensing may involve existing artworks, adapted compositions drawn from established collections, or purpose developed visual systems derived from previous bodies of work. Each request is evaluated individually.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">Process</h4>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Licensing begins with a review of the proposed use, context, duration, and territory. Once alignment is confirmed, suitable works are identified and terms are defined.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    The process includes clear documentation of usage rights, reproduction parameters, and attribution requirements. Where necessary, visual adaptation is supervised to maintain material and conceptual integrity.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">Suitable Partners</h4>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Zama Magubane Arts licenses work to brands, institutions, publishers, developers, and organisations seeking culturally grounded visual language with depth and authorship.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Partnerships are based on mutual respect, clarity of intent, and long term vision rather than volume or visibility.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">Enquiries</h4>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Licensing enquiries should include a clear description of the proposed application, timeline, territory, and intended audience.
                  </p>
                  <p className="text-stone-700 leading-relaxed">
                    Formal requests can be directed through the contact page.
                  </p>
                </div>

                <div className="border-l-2 border-stone-200 pl-6">
                  <h4 className="text-lg font-light text-stone-900 mb-3">Closing</h4>
                  <p className="text-stone-700 leading-relaxed">
                    Licensing through Zama Magubane Arts is a considered process that extends the life of the work while protecting its meaning, authorship, and cultural responsibility.
                  </p>
                </div>
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
