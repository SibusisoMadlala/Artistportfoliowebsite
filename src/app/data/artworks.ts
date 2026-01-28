export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  collection: string;
  description: string;
  imageUrl: string;
  available: boolean;
  price?: string;
}

export const artworks: Artwork[] = [
  // Uvalo Alusekho (11 images from 01-11, plus 20, 21)
  {
    id: 'u1',
    title: 'Uvalo Alusekho I',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-01.jpeg',
    available: true
  },
  {
    id: 'u2',
    title: 'Uvalo Alusekho II',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-02.jpeg',
    available: true
  },
  {
    id: 'u3',
    title: 'Uvalo Alusekho III',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-03.jpeg',
    available: true
  },
  {
    id: 'u4',
    title: 'Uvalo Alusekho IV',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-04.jpeg',
    available: true
  },
  {
    id: 'u5',
    title: 'Uvalo Alusekho V',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-05.jpeg',
    available: true
  },
  {
    id: 'u6',
    title: 'Uvalo Alusekho VI',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-06.jpeg',
    available: true
  },
  {
    id: 'u7',
    title: 'Uvalo Alusekho VII',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-07.jpeg',
    available: true
  },
  {
    id: 'u8',
    title: 'Uvalo Alusekho VIII',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-08.jpeg',
    available: true
  },
  {
    id: 'u9',
    title: 'Uvalo Alusekho IX',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-09.jpeg',
    available: true
  },
  {
    id: 'u10',
    title: 'Uvalo Alusekho X',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-10.jpeg',
    available: true
  },
  {
    id: 'u11',
    title: 'Uvalo Alusekho XI',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-11.jpeg',
    available: true
  },
  {
    id: 'u20',
    title: 'Uvalo Alusekho XII',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-20.jpeg',
    available: true
  },
  {
    id: 'u21',
    title: 'Uvalo Alusekho XIII',
    year: '2024',
    medium: 'Mixed Media',
    dimensions: 'Variable',
    collection: 'Uvalo Alusekho',
    description: 'Part of the Uvalo Alusekho series, exploring fearlessness and ancestral presence.',
    imageUrl: '/images/gallery-image-21.jpeg',
    available: true
  },

  // Odokrwala (images 22-26)
  {
    id: 'o1',
    title: 'Odokrwala I',
    year: '2023',
    medium: 'Digital Print',
    dimensions: 'Variable',
    collection: 'Odokrwala',
    description: 'Part of the Odokrwala series, reflecting on African male initiation.',
    imageUrl: '/images/gallery-image-22.jpeg',
    available: true
  },
  {
    id: 'o2',
    title: 'Odokrwala II',
    year: '2023',
    medium: 'Digital Print',
    dimensions: 'Variable',
    collection: 'Odokrwala',
    description: 'Part of the Odokrwala series, reflecting on African male initiation.',
    imageUrl: '/images/gallery-image-23.jpeg',
    available: true
  },
  {
    id: 'o3',
    title: 'Odokrwala III',
    year: '2023',
    medium: 'Digital Print',
    dimensions: 'Variable',
    collection: 'Odokrwala',
    description: 'Part of the Odokrwala series, reflecting on African male initiation.',
    imageUrl: '/images/gallery-image-24.jpeg',
    available: true
  },
  {
    id: 'o4',
    title: 'Odokrwala IV',
    year: '2023',
    medium: 'Digital Print',
    dimensions: 'Variable',
    collection: 'Odokrwala',
    description: 'Part of the Odokrwala series, reflecting on African male initiation.',
    imageUrl: '/images/gallery-image-25.jpeg',
    available: true
  },
  {
    id: 'o5',
    title: 'Odokrwala V',
    year: '2023',
    medium: 'Digital Print',
    dimensions: 'Variable',
    collection: 'Odokrwala',
    description: 'Part of the Odokrwala series, reflecting on African male initiation.',
    imageUrl: '/images/gallery-image-26.jpeg',
    available: true
  }
];

export const collections = [
  {
    name: 'Uvalo Alusekho',
    description: `Uvalo Alusekho is a body of work that translates spiritual and psychological transformation into visual language. The collection emerged from a period of deep reflection on fear, survival, and ancestral presence, and is grounded in African spiritual understanding rather than abstraction alone.

Research for this body of work included engagement with ancestral philosophies, ritual practices, sacred spaces, and the relationship between the body and energy. The process examined how emotion, vibration, and belief manifest physically through posture, gesture, and spatial awareness.

Material choices and compositional decisions were informed by concepts of protection, grounding, and spiritual authority. The works explore confidence across both physical and metaphysical realms, positioning fearlessness as an inherited and cultivated state.`,
    count: artworks.filter(a => a.collection === 'Uvalo Alusekho').length
  },
  {
    name: 'Odokrwala',
    description: `Odokrwala is a body of work focused on African male initiation, specifically the journey of men to the mountain and the processes through which manhood, brotherhood, and responsibility are formed. The work examines initiation as a cultural system that shapes identity, discipline, and communal belonging rather than as spectacle or metaphor.

Research for this collection is grounded in observation, listening, and respect for cultural boundaries. The process prioritises representation without intrusion, acknowledging the limits of access and the responsibility of interpreting a practice that is not the artist’s own to perform. The work does not seek to reveal what is protected, but to reflect on presence, absence, and transformation as they are witnessed from the outside.

Material choices and visual language are deliberately restrained. Form, posture, grouping, and spatial relationships are used to communicate solidarity, transition, and collective identity. Emphasis is placed on brotherhood, silence, and the weight of expectation carried into manhood.

Odokrwala positions initiation as a living cultural practice that continues to shape African masculinity, community ethics, and generational continuity, while maintaining respect for what must remain unseen.`,
    count: artworks.filter(a => a.collection === 'Odokrwala').length
  }
];
