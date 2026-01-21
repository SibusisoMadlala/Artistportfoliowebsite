export interface Exhibition {
  id: string;
  title: string;
  type: 'upcoming' | 'past';
  venue: string;
  location: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: '1',
    title: 'UVALO ALUSEKHO: New Works',
    type: 'upcoming',
    venue: 'Zeitz MOCAA',
    location: 'Cape Town, South Africa',
    date: 'March 15 - May 30, 2026',
    description: 'A solo exhibition featuring new works from the UVALO ALUSEKHO series, exploring themes of courage, transformation, and Afro-futurism.'
  },
  {
    id: '2',
    title: 'Contemporary African Artists Collective',
    type: 'upcoming',
    venue: 'The Norval Foundation',
    location: 'Cape Town, South Africa',
    date: 'April 10 - June 20, 2026',
    description: 'Group exhibition featuring emerging and established African artists pushing the boundaries of contemporary art.'
  },
  {
    id: '3',
    title: 'Heritage & Innovation',
    type: 'past',
    venue: 'Goodman Gallery',
    location: 'Johannesburg, South Africa',
    date: 'September 2025',
    description: 'A collaborative exhibition exploring the intersection of traditional African heritage and contemporary artistic innovation.'
  },
  {
    id: '4',
    title: 'IZINWELE NABANTU',
    type: 'past',
    venue: 'Stevenson Gallery',
    location: 'Cape Town, South Africa',
    date: 'June - August 2025',
    description: 'Solo exhibition centered on the IZINWELE NABANTU collection, examining identity, hair politics, and cultural narratives.'
  }
];
