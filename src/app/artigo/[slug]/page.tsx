import { client } from '@/sanity/lib/client';

interface ArticleProps {
  params: Promise<{ slug: string }>;
}

async function getArticle(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    category,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`;
  return await client.fetch(query, { slug });
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-xl font-bold text-slate-800">Artigo não encontrado.</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
      <span className="text-xs font-semibold text-sky-600 uppercase">
        {article.category}
      </span>

      <h1 className="text-3xl font-bold text-slate-900 leading-tight">
        {article.title}
      </h1>

      <p className="text-sm text-slate-600 leading-relaxed">
        {article.description}
      </p>

      {article.imageUrl && (
        <div className="w-full h-96 bg-slate-100 rounded-lg overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </main>
  );
}