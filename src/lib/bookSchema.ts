import type { Book } from '../data/site';
import { site } from '../data/site';

export function bookSchema(book: Book) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    alternateName: book.subtitle,
    description: book.synopsis[0],
    image: `${site.url}${book.cover}`,
    url: `${site.url}/${book.slug}`,
    inLanguage: 'pt-BR',
    author: { '@type': 'Person', name: 'Pedro de Celso Gardini' },
    ...(book.status === 'available'
      ? {
          isbn: book.specs.find((spec) => spec.label === 'ISBN')?.value,
          numberOfPages:
            Number(book.specs.find((spec) => spec.label === 'Páginas')?.value) || undefined,
          publisher: {
            '@type': 'Organization',
            name: book.specs.find((spec) => spec.label === 'Publicação')?.value,
          },
          bookFormat: 'https://schema.org/Paperback',
          offers: book.buy?.map((option) => ({
            '@type': 'Offer',
            url: option.url,
            price: option.price?.replace(/[^\d,]/g, '').replace(',', '.'),
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          })),
        }
      : { creativeWorkStatus: 'Em preparação' }),
  };
}
