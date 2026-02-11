import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Journal() {
  const posts = [
    {
      title: 'Reflections on Heritage and Innovation',
      date: 'January 15, 2026',
      excerpt: 'Exploring the delicate balance between honoring ancestral traditions and pushing the boundaries of contemporary expression...',
      category: 'Process'
    },
    {
      title: 'Afrofuturism and the African Diaspora',
      date: 'December 8, 2025',
      excerpt: 'How speculative fiction and visual art can reimagine the narratives of African identity in the digital age...',
      category: 'Research'
    },
    {
      title: 'The Spirituality of Materials',
      date: 'November 20, 2025',
      excerpt: 'Every medium carries its own energy and history. In my practice, I explore how different materials communicate cultural memory...',
      category: 'Reflection'
    },
    {
      title: 'Community, Collaboration, and Art',
      date: 'October 5, 2025',
      excerpt: 'Art doesn\'t exist in isolation. My recent collaborative projects have reinforced the importance of collective creation...',
      category: 'Practice'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#f4f3ef]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="font-marketing text-xs tracking-[0.3em] uppercase text-[#2a2422]/60 block mb-4">
            The Archive
          </span>
          <div className="relative inline-block">
             <h1 className="text-6xl md:text-8xl font-heading text-[#2a2422] mb-6">
                Journal
             </h1>
             <span className="absolute -bottom-8 right-0 font-script text-3xl md:text-4xl text-[#804a00] -rotate-6">
                Reflections of Practice
             </span>
          </div>
        </motion.div>

        <div className="space-y-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-32 top-0 bottom-0 w-px bg-[#2a2422]/10 hidden lg:block" />

          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border-b border-[#2a2422]/10 last:border-0 py-12 lg:pl-48"
            >
              {/* Date Tag - Desktop: Absolute left, Mobile: Normal flow */}
              <div className="lg:absolute lg:left-0 lg:top-16 lg:w-24 lg:text-right mb-4 lg:mb-0">
                 <span className="font-marketing text-xs tracking-widest uppercase text-[#2a2422]/50">
                    {post.date}
                 </span>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                 <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                       <span className="px-3 py-1 border border-[#2a2422]/20 rounded-full text-[10px] uppercase tracking-widest text-[#2a2422]/70">
                          {post.category}
                       </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-heading text-[#2a2422] group-hover:text-[#804a00] transition-colors duration-300 cursor-pointer">
                       {post.title}
                    </h2>
                    
                    <p className="font-body text-xl text-[#2a2422]/60 italic leading-relaxed">
                       {post.excerpt}
                    </p>
                 </div>

                 <motion.button 
                    whileHover={{ x: 10 }}
                    className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-[#2a2422]/10 text-[#2a2422] group-hover:border-[#2a2422] group-hover:bg-[#2a2422] group-hover:text-[#f4f3ef] transition-all duration-300"
                 >
                    <ArrowRight className="w-5 h-5" />
                 </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
