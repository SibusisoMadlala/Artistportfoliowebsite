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
  {
    id: '1',
    title: 'Ancestral Echoes',
    year: '2024',
    medium: 'Mixed Media on Canvas',
    dimensions: '150 x 120 cm',
    collection: 'UVALO ALUSEKHO',
    description: 'A profound exploration of inherited memories and cultural consciousness, this piece weaves together traditional motifs with contemporary expression.',
    imageUrl: '/ancestral-echoes.jpg',
    available: true,
    price: 'R 45,000'
  },
  {
    id: '2',
    title: 'Future Visions',
    year: '2024',
    medium: 'Digital Print on Archival Paper',
    dimensions: '100 x 80 cm',
    collection: 'UVALO ALUSEKHO',
    description: 'An Afro-futuristic meditation on the intersection of technology, spirituality, and African identity in the digital age.',
    imageUrl: '/Screenshot 2026-01-21 111113.png',
    available: true,
    price: 'R 32,000'
  },
  {
    id: '3',
    title: 'Sacred Geometry',
    year: '2023',
    medium: 'Acrylic on Canvas',
    dimensions: '180 x 140 cm',
    collection: 'IZINWELE NABANTU',
    description: 'An exploration of patterns found in nature and African cosmology, celebrating the interconnectedness of all beings.',
    imageUrl: '/Screenshot 2026-01-21 111145.png',
    available: false
  },
  {
    id: '4',
    title: 'Threads of Heritage',
    year: '2023',
    medium: 'Textile and Paint on Wood',
    dimensions: '120 x 100 cm',
    collection: 'IZINWELE NABANTU',
    description: 'A tactile journey through cultural narratives, incorporating traditional textiles and contemporary painting techniques.',
    imageUrl: '/Screenshot 2026-01-21 111825.png',
    available: true,
    price: 'R 38,000'
  },
  {
    id: '5',
    title: 'Spirit Pathways',
    year: '2024',
    medium: 'Oil on Canvas',
    dimensions: '160 x 120 cm',
    collection: 'UVALO ALUSEKHO',
    description: 'A visual representation of spiritual journeys and the pathways that connect the physical and metaphysical realms.',
    imageUrl: '/Screenshot 2026-01-21 111837.png',
    available: true,
    price: 'R 52,000'
  },
  {
    id: '6',
    title: 'Gallery of Ancestors',
    year: '2023',
    medium: 'Installation Art',
    dimensions: 'Variable',
    collection: 'IZINWELE NABANTU',
    description: 'An immersive installation piece that invites viewers to connect with ancestral wisdom and cultural memory.',
    imageUrl: '/Screenshot 2026-01-21 112603.png',
    available: false
  }
];

export const collections = [
  {
    name: 'UVALO ALUSEKHO',
    description: 'Fear does not exist - A series exploring courage, transformation, and the reimagining of African futures.',
    count: artworks.filter(a => a.collection === 'UVALO ALUSEKHO').length
  },
  {
    name: 'IZINWELE NABANTU',
    description: 'Hair and People - An intimate exploration of identity, heritage, and the stories woven into our very being.',
    count: artworks.filter(a => a.collection === 'IZINWELE NABANTU').length
  }
];
