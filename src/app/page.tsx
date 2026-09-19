import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, Post } from '@/sanity/lib/queries';
import Link from 'next/link';

export const revalidate = 60; // Revalida os dados a cada 60 segundos

export default async function HomePage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
      {/* Artigo em Destaque */}
      {featuredPost && (
        <section className="grid md:grid-cols-2 gap-8 items-center border-b border-slate-200 pb-12">
          <div className="space-y-4">
            <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
              {featuredPost.category}
            </span>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight hover:text-sky-600 transition-colors">
              <Link href={`/artigo/${featuredPost.slug}`}>
                {featuredPost.title}
              </Link>
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              {featuredPost.description}
            </p>
            <div className="text-xs text-slate-400">
              {new Date(featuredPost.publishedAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          </div>
          {featuredPost.imageUrl && (
            <Link href={`/artigo/${featuredPost.slug}`} className="block overflow-hidden rounded-lg">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          )}
        </section>
      )}

      {/* Lista de Artigos Recentes */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
          Últimas Publicações
        </h2>
        
        {recentPosts.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum outro artigo cadastrado no momento.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article key={post._id} className="border border-slate-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}
                <span className="text-xs font-semibold text-sky-600 uppercase">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 hover:text-sky-600 transition-colors">
                  <Link href={`/artigo/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}