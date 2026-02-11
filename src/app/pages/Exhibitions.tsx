import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { exhibitions } from '@/app/data/exhibitions';

export function Exhibitions() {
  const upcoming = exhibitions.filter((e) => e.type === 'upcoming');
  const past = exhibitions.filter((e) => e.type === 'past');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-[#f4f3ef] min-h-screen pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24 relative"
        >
           <h1 className="text-5xl md:text-8xl text-[#2a2422] font-light tracking-widest leading-none">
             EXHIBITIONS
           </h1>
           <span className="font-script text-6xl md:text-8xl text-[#804a00] absolute -bottom-10 left-40 md:left-60 -rotate-3 opacity-80">
             Shows
           </span>
        </motion.div>

        {/* Upcoming Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-sm tracking-[0.2em] uppercase text-[#804a00] font-medium">Upcoming</h2>
             <div className="h-[1px] bg-[#2a2422]/10 flex-1" />
          </div>

          <div className="space-y-12">
            {upcoming.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-b border-[#2a2422]/10 pb-12 hover:border-[#804a00] transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                   {/* Date Column */}
                   <div className="md:col-span-3 text-[#2a2422]/60 font-mono text-sm tracking-wide pt-2">
                      {exhibition.date}
                   </div>

                   {/* Content Column */}
                   <div className="md:col-span-6">
                      <h3 className="text-3xl md:text-4xl text-[#2a2422] font-light mb-4 group-hover:text-[#804a00] transition-colors">
                        {exhibition.title}
                      </h3>
                      <p className="text-[#2a2422]/70 leading-relaxed mb-6 font-light text-lg">
                        {exhibition.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#2a2422]/50">
                        <MapPin className="w-4 h-4" />
                        <span>{exhibition.venue}, {exhibition.location}</span>
                      </div>
                   </div>

                   {/* Action Column */}
                   <div className="md:col-span-3 md:text-right pt-2">
                      <button className="inline-flex items-center gap-2 text-[#2a2422] hover:text-[#804a00] transition-colors uppercase text-xs tracking-[0.2em] group/btn">
                        View Details
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Exhibitions - More Compact */}
        <div>
          <div className="flex items-center gap-4 mb-12">
             <h2 className="text-sm tracking-[0.2em] uppercase text-[#2a2422]/40 font-medium">Archive</h2>
             <div className="h-[1px] bg-[#2a2422]/10 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {past.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="group"
              >
                <div className="aspect-[4/3] bg-[#e8e6e1] mb-6 overflow-hidden relative">
                   {/* Placeholder for archive image */}
                   <div className="absolute inset-0 bg-[#2a2422]/5 group-hover:bg-[#2a2422]/0 transition-colors" />
                </div>
                
                <h3 className="text-xl md:text-2xl text-[#2a2422] font-light mb-2 group-hover:text-[#804a00] transition-colors">
                  {exhibition.title}
                </h3>
                
                <div className="flex flex-col gap-1 text-sm text-[#2a2422]/50 font-light">
                   <span>{exhibition.date}</span>
                   <span>{exhibition.venue}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
