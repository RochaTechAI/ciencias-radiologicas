import { groq } from 'next-sanity';

// Query para listar todos os artigos na Homepage
export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }
`;

// Interface para o TypeScript
export interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  publishedAt: string;
  imageUrl?: string;
}
// Query para procurar um artigo específico pelo slug
export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    body,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }
`;