import { motion } from 'motion/react';
import { Award, Users, GraduationCap } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Award, text: 'United Nations Young Entrepreneur Award — 2023' },
    { icon: Award, text: 'NYDA Trailblazer Award — 2023' },
    { icon: Users, text: 'Collaborations with institutions, brands, and organisations' },
    { icon: GraduationCap, text: 'Bachelor of Fine Arts, University of the Witwatersrand' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen pt-24 pb-24 overflow-hidden">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20 relative pt-20">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative z-10">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#2a2422] tracking-widest leading-none font-light">
              ABOUT ZAMA MAGUBANE ARTS
            </h1>
            <span className="font-script text-3xl md:text-5xl text-[#804a00] absolute -bottom-10 right-0 md:-right-20 -rotate-3 z-[-1] opacity-90">
              Zama Magubane Arts
            </span>
          </div>
        </motion.div>
      </section>

      {/* Main Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-12 lg:px-24 mb-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[3/4] lg:aspect-[4/5] lg:h-full max-h-[80vh] mx-auto z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
            style={{ backgroundImage: `url('images/IMG_9544.jpeg')` }}
          />
          <div className="absolute top-4 -left-4 w-full h-full border border-[#2a2422]/20 -z-10" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-12"
        >
          <div className="prose prose-lg max-w-none text-[#2a2422]/90 font-light leading-relaxed">
            <h2 className="text-2xl md:text-3xl text-[#2a2422] mb-4">Zama Magubane Arts</h2>
            <p>
              Zama Magubane Arts is an African art house rooted in cultural knowledge systems, contemporary practice, and social responsibility. The practice operates at the intersection of visual art, performance, education, and cultural strategy, using art as a tool for inquiry, dialogue, and lasting impact.
            </p>
            <p>
              Grounded in African philosophies and ways of knowing, the work engages questions of identity, spirituality, memory, and the body as sites of both history and future making. Rather than prioritising spectacle, the practice is committed to depth, rigor, and continuity, positioning art as an active contributor to cultural consciousness and social reflection.
            </p>
            <p>
              Through research based projects, public programming, and collaborative partnerships, Zama Magubane Arts functions as both a creative practice and a cultural platform. It moves fluidly between institutional, communal, and commercial spaces while maintaining cultural integrity and conceptual clarity.
            </p>
          </div>

          {/* Achievements */}
          <div className="space-y-6 pt-8 border-t border-[#2a2422]/10">
            <h3 className="text-xl tracking-[0.2em] text-[#804a00] uppercase font-medium mb-6">Recognition</h3>
            {achievements.map((item, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="p-3 bg-[#e8e6e1] rounded-full text-[#2a2422] group-hover:bg-[#804a00] group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-[#2a2422] text-sm md:text-base tracking-wide font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Practice */}
      <section className="mt-12 lg:mt-32 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-[#2a2422]">The Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2a2422] font-light leading-relaxed text-lg">
            <p>
              The practice of Zama Magubane Arts spans multiple disciplines and formats, unified by a consistent conceptual and ethical foundation. Work is developed through contemporary visual art, large scale works, interdisciplinary performance, and installation based practice.
            </p>
            <p>
              Alongside artistic production, the practice extends into research driven cultural projects, education, and public engagement. Zama Magubane Arts also works with institutions, brands, and organisations through collaborations, licensed artwork, and cultural strategy, ensuring that African rooted narratives are translated responsibly across different platforms.
            </p>
            <p className="md:col-span-2">
              Each project is shaped by its context and audience, with careful attention to responsibility, relevance, and lasting impact within both African and global frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Founder, Ethos, Closing */}
      <section className="bg-[#3e322d] text-[#f4f3ef] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif italic mb-4">The Founder</h3>
            <h4 className="text-xl font-medium mb-3">Zama Magubane</h4>
            <p className="font-light leading-relaxed">
              Zama Magubane is a South African artist, founder, and cultural practitioner working at the intersection of art, education, and African knowledge systems. Her practice draws on African storytelling, Afrofuturism, and embodied knowledge as critical tools for contemporary expression and inquiry.
            </p>
            <p className="font-light leading-relaxed mt-3">
              Working across visual art, performance, and education, Magubane explores how culture, spirituality, and lived experience shape personal and collective realities. As the founder of Zama Magubane Arts, her work extends beyond individual authorship into the building of systems where art functions as education, intervention, and cultural infrastructure.
            </p>
            <p className="font-light leading-relaxed mt-3">
              Her practice is informed by a strong academic grounding in fine art and an ongoing commitment to African rooted research, dialogue, and cultural continuity. Magubane has engaged both institutional and commercial platforms, developing collaborations that respect cultural context while expanding the reach and application of African creative practice.
            </p>
            <p className="font-light leading-relaxed mt-3">
              Zama Magubane holds a Bachelor of Fine Arts degree from the University of the Witwatersrand and is the recipient of the United Nations Young Entrepreneur Award and the NYDA Trailblazer Award, both awarded in 2023.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3">Ethos</h4>
            <p className="font-light leading-relaxed">
              Zama Magubane Arts is guided by African rooted knowledge and lived philosophy. The practice prioritises cultural integrity over trend or visibility and understands art as a form of responsibility and service. Education is approached as a tool for empowerment, with a long view toward impact rather than immediate recognition.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3">Closing</h4>
            <p className="font-light leading-relaxed">
              Zama Magubane Arts exists as a living practice rooted in Africa, operating globally, and committed to cultural continuity, depth, and future building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
