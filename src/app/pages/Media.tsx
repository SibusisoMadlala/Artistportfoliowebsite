import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

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
    <div className="min-h-screen pt-32 pb-24 bg-[#2a2422] text-[#f4f3ef]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="border-b border-[#f4f3ef]/20 pb-24 mb-24"
        > 
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <h1 className="text-6xl md:text-8xl font-heading leading-none">
                Media <span className="block text-[#804a00] font-script text-5xl md:text-6xl mt-4">& Press</span>
              </h1>
              <p className="font-body text-xl text-[#f4f3ef]/60 max-w-md">
                 Documenting the conversation between traditional practice and contemporary culture through global partnerships and critical discourse.
              </p>
           </div>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
          
          {/* Brand Collaborations List */}
          <div>
             <h2 className="font-marketing text-xs tracking-[0.3em] uppercase text-[#804a00] mb-12">
               Select Partnerships
             </h2>
             <div className="space-y-16">
                {collaborations.map((collab, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                   >
                      <div className="flex justify-between items-baseline mb-4">
                         <h3 className="text-3xl font-heading text-[#f4f3ef] group-hover:text-[#804a00] transition-colors">{collab.brand}</h3>
                         <span className="font-marketing text-xs text-[#f4f3ef]/40">{collab.year}</span>
                      </div>
                      <p className="font-body text-lg text-[#f4f3ef]/60 leading-relaxed">
                         {collab.description}
                      </p>
                   </motion.div>
                ))}
             </div>
          </div>

          {/* Press List */}
          <div>
            <h2 className="font-marketing text-xs tracking-[0.3em] uppercase text-[#804a00] mb-12">
               Press Coverage
             </h2>
             <div className="space-y-0">
                {press.map((item, index) => (
                   <motion.a
                      href="#" 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="block border-t border-[#f4f3ef]/10 py-8 group hover:bg-[#f4f3ef]/5 -mx-4 px-4 transition-colors"
                   >
                      <div className="flex justify-between items-start mb-2">
                         <span className="font-marketing text-xs text-[#f4f3ef]/40 uppercase tracking-widest">{item.publication}</span>
                         <ExternalLink className="w-4 h-4 text-[#f4f3ef]/20 group-hover:text-[#f4f3ef] transition-colors" />
                      </div>
                      <h3 className="text-2xl font-body italic text-[#f4f3ef] mb-2 group-hover:translate-x-2 transition-transform duration-300">
                        "{item.title}"
                      </h3>
                      <span className="font-marketing text-xs text-[#f4f3ef]/20">{item.year}</span>
                   </motion.a>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
