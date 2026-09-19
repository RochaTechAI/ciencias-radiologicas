import { client } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY, Post } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post: Post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      <Link href="/" className="text-sm font-medium text-sky-600 hover:underline">
        ← Voltar para a página inicial
      </Link>

      <div className="space-y-4">
        <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold text-slate-900 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {post.description}
        </p>
        <p className="text-xs text-slate-400">
          Publicado a {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>

      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-96 object-cover rounded-xl shadow-sm"
        />
      )}
    </article>
  );
}