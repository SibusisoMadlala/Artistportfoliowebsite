import { motion } from 'motion/react';

export function Collaborations() {
  const images = [
    // gallery-image-12 to 15
    '/images/gallery-image-12.jpeg',
    '/images/gallery-image-13.jpeg',
    '/images/gallery-image-14.jpeg',
    '/images/gallery-image-15.jpeg',
    // gallery-image-27 to 33
    '/images/gallery-image-27.jpeg',
    '/images/gallery-image-28.jpeg',
    '/images/gallery-image-29.jpeg',
    '/images/gallery-image-30.jpeg',
    '/images/gallery-image-31.jpeg',
    '/images/gallery-image-32.jpeg',
    '/images/gallery-image-33.jpeg',
    // gallery-image-35 to 37
    '/images/gallery-image-35.jpeg',
    '/images/gallery-image-36.jpeg',
    '/images/gallery-image-37.jpeg',
  ];

  const videos = [
    '/videos/archive-video-1.mp4',
    '/videos/archive-video-2.mp4'
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
            Collaborations
          </h1>

          <div className="space-y-12">
            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">
                Working Across Cultural and Commercial Contexts
              </h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Zama Magubane Arts engages in collaborations that extend artistic practice into commercial, public, and institutional environments without compromising cultural integrity. Commercial work is approached as a strategic translation of existing artistic language rather than a departure from it.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Each collaboration is shaped through dialogue, research, and alignment, ensuring that African rooted narratives are represented with clarity, respect, and depth.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-8"></div>

            {/* Approach */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Approach to Collaboration</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Collaborations begin with a shared understanding of values, context, and intent. The practice prioritises partnerships where artistic authorship is recognised and protected, and where the work is allowed to operate with meaning rather than decoration.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Commercial engagements are treated as long term relationships rather than transactional outputs. This approach allows the work to retain coherence across platforms while meeting professional and operational standards.
              </p>
            </div>

            {/* Media Grid 1 - Videos and First Batch of Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                {videos.map((vid, idx) => (
                    <div key={`vid-${idx}`} className="aspect-video bg-stone-100 overflow-hidden">
                        <video autoPlay muted loop playsInline controls className="w-full h-full object-cover">
                            <source src={vid} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {images.slice(0, 8).map((src, idx) => (
                    <div key={`img1-${idx}`} className="aspect-square bg-stone-100 overflow-hidden">
                        <img src={src} alt={`Collaboration ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>

            <div className="border-t border-stone-200 pt-8"></div>

            {/* Forms of Collaboration */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Forms of Collaboration</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Zama Magubane Arts collaborates across a range of commercial and applied contexts. These include brand partnerships, product and surface design, spatial and environmental applications, campaign based visual systems, and commissioned works.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Collaborations may draw from existing collections or involve the development of new visual languages grounded in prior research and practice.
              </p>
            </div>

             <div className="border-t border-stone-200 pt-8"></div>

            {/* Previous Collaborations */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Previous Collaborations</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                The practice has engaged in collaborations with both local and international brands and organisations. Past partnerships include New Balance, Reebok, NikNaks South Africa, and Potrends.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Each collaboration was developed with attention to cultural representation, audience, and long term value rather than short term visibility.
              </p>
            </div>
            
            {/* Media Grid 2 - Remaining Images */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
                {images.slice(8).map((src, idx) => (
                    <div key={`img2-${idx}`} className="aspect-square bg-stone-100 overflow-hidden">
                        <img src={src} alt={`Collaboration ${idx + 9}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                ))}
            </div>

            <div className="border-t border-stone-200 pt-8"></div>


            {/* Commercial Integrity */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Commercial Integrity</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Zama Magubane Arts does not pursue volume driven commercial work. Projects are selected based on alignment, scope, and the ability to maintain authorship and conceptual clarity.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Commercial projects are structured with clear terms around usage, attribution, and duration, ensuring protection of the work and the practice over time.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-8"></div>

            {/* Working With... */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Working With Zama Magubane Arts</h2>
              <p className="text-stone-700 leading-relaxed mb-4">
                Organisations seeking collaboration are expected to approach the work with respect for its cultural grounding and intellectual foundation. Proposals should clearly outline intent, application, scale, and timeline.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Commercial discussions are conducted with professionalism and transparency, supported by clear agreements and documentation.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-8"></div>

            {/* Enquiries & Closing */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-light text-stone-900 mb-4">Enquiries</h2>
              <p className="text-stone-700 leading-relaxed mb-8">
                Collaboration and commercial enquiries can be submitted through the contact page with a detailed outline of the proposed project and intended use.
              </p>
              
              <div className="bg-stone-50 p-8 rounded-lg mt-8">
                  <p className="text-stone-700 leading-relaxed italic">
                    "Collaborations within Zama Magubane Arts operate as an extension of cultural practice, allowing art to move responsibly across commercial spaces while retaining its depth, authorship, and integrity."
                  </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
