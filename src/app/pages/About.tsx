import { motion } from 'motion/react';
import { Award, Users, GraduationCap, Download } from 'lucide-react';

export function About() {
  const achievements = [
    { icon: Award, text: 'Winner, Contemporary African Art Prize 2024' },
    { icon: Award, text: 'Featured in Art Africa Magazine 2023' },
    { icon: Users, text: 'Collaborated with New Balance, Reebok, NikNaks' },
    { icon: GraduationCap, text: 'MFA, University of Cape Town, 2020' }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen pt-24 pb-24 overflow-hidden">
      
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-20 relative pt-20">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={fadeIn}
           className="relative z-10"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-[#2a2422] tracking-widest leading-none font-light">
              ABOUT
            </h1>
            <span className="font-script text-6xl md:text-8xl text-[#804a00] absolute -bottom-10 right-0 md:-right-20 -rotate-3 z-[-1] opacity-90">
              The Artist
            </span>
          </div>
        </motion.div>
      </section>

      {/* Main Content Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-12 lg:px-24">
        
        {/* Left: Image */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="relative aspect-[3/4] lg:aspect-[4/5] h-full max-h-[80vh]"
        >
           <div 
             className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
             style={{ backgroundImage: `url('/zama-magubane-profile.png')` }}
           />
           {/* Decorative Border/Frame */}
           <div className="absolute top-4 -left-4 w-full h-full border border-[#2a2422]/20 -z-10" />
        </motion.div>

        {/* Right: Text */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col justify-center space-y-12"
        >
            <div className="prose prose-lg max-w-none text-[#2a2422]/80 font-light leading-relaxed">
              <p className="text-2xl md:text-3xl text-[#2a2422] drop-shadow-sm mb-8 italic">
                "Zama Magubane Arts is an African art house rooted in cultural knowledge systems, contemporary practice, and social responsibility."
              </p>
              <p className="mb-6">
                The practice operates at the intersection of visual art, performance, education, and cultural strategy, using art as a tool for inquiry, dialogue, and lasting impact.
              </p>
              <p className="mb-6">
                Grounded in African philosophies and ways of knowing, the work engages questions of identity, spirituality, memory, and the body as sites of both history and future making. Rather than prioritising spectacle, the practice is committed to depth, rigor, and continuity.
              </p>
              <p>
                Through research based projects, public programming, and collaborative partnerships, Zama Magubane Arts functions as both a creative practice and a cultural platform.
              </p>
            </div>

            {/* Achievements List */}
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

      {/* Philosophy Section - Dark */}
      <section className="bg-[#3e322d] text-[#f4f3ef] mt-32 py-24 px-6 md:px-12 lg:px-24">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12">The Practice</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left font-light leading-relaxed text-lg opacity-90">
               <p>
                 The practice of Zama Magubane Arts spans multiple disciplines and formats, unified by a consistent conceptual and ethical foundation. Work is developed through contemporary visual art, large scale works, interdisciplinary performance, and installation based practice.
               </p>
               <p>
                 Beyond exhibition making, the house engages in curriculum development, cultural archival projects, and community-centered workshops that bridge the gap between formal art institutions and lived cultural experience.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
}
