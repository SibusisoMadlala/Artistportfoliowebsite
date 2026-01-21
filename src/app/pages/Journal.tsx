import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-wider text-stone-900 mb-6">
            Journal
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl">
            Thoughts on process, research, and the creative journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="pb-12 border-b border-stone-200 last:border-0 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-4 h-4 text-stone-400" />
                <p className="text-sm text-stone-500">{post.date}</p>
                <span className="px-3 py-1 bg-stone-100 text-xs text-stone-600 tracking-wider">
                  {post.category}
                </span>
              </div>
              <h2 className="text-3xl font-light text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-6">{post.excerpt}</p>
              <button className="inline-flex items-center gap-2 text-stone-900 hover:text-stone-600 transition-colors group">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
