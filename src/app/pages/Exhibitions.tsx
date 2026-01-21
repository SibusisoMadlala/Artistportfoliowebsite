import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { exhibitions } from '@/app/data/exhibitions';

export function Exhibitions() {
  const upcoming = exhibitions.filter((e) => e.type === 'upcoming');
  const past = exhibitions.filter((e) => e.type === 'past');

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
            Exhibitions
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl">
            Current and upcoming shows, alongside an archive of past exhibitions
          </p>
        </motion.div>

        {/* Upcoming Exhibitions */}
        <div className="mb-24">
          <h2 className="text-3xl font-light text-stone-900 mb-8">Upcoming</h2>
          <div className="space-y-8">
            {upcoming.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-l-4 border-stone-900 pl-8 py-6 hover:bg-stone-50 transition-colors"
              >
                <div className="flex items-start gap-4 mb-3">
                  <Calendar className="w-5 h-5 text-stone-400 flex-shrink-0 mt-1" />
                  <p className="text-sm text-stone-500">{exhibition.date}</p>
                </div>
                <h3 className="text-2xl font-light text-stone-900 mb-3">
                  {exhibition.title}
                </h3>
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-5 h-5 text-stone-400 flex-shrink-0 mt-1" />
                  <p className="text-stone-700">
                    {exhibition.venue}, {exhibition.location}
                  </p>
                </div>
                <p className="text-stone-600 leading-relaxed">{exhibition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Exhibitions */}
        <div>
          <h2 className="text-3xl font-light text-stone-900 mb-8">Archive</h2>
          <div className="space-y-6">
            {past.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-l-2 border-stone-300 pl-8 py-4 hover:bg-stone-50 transition-colors"
              >
                <p className="text-sm text-stone-500 mb-2">{exhibition.date}</p>
                <h3 className="text-xl font-light text-stone-900 mb-2">
                  {exhibition.title}
                </h3>
                <p className="text-stone-600 mb-2">
                  {exhibition.venue}, {exhibition.location}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {exhibition.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
