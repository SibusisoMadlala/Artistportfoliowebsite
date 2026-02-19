export const catalogue = {
  title: 'Catalogue 2025',
  description: 'Complete exhibition catalogue (2025). Served from the project data folder.',
  // Resolve the PDF located in the same folder (src/app/data/2025 catalogue.pdf)
  pdfUrl: new URL('./2025 catalogue.pdf', import.meta.url).href,
  publishedAt: '2025-01-01',
  items: [] as Array<{ id: string; title: string; page?: number;}>
};

export type Catalogue = typeof catalogue;

export default catalogue;
