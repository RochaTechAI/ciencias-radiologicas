import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { POSTS_QUERY, Post } from '@/sanity/lib/queries';

export const revalidate = 60;

export default async function ArticlesListPage() {
  const posts: Post[] = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      <header className="max-w-6xl mx-auto mb-10 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Publicações & Pesquisa
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
          Artigos & Notícias da Saúde
        </h1>
        <p className="text-slate-600 text-sm mt-2">
          Acompanhe todas as publicações, casos clínicos e inovações nas ciências radiológicas.
        </p>
      </header>

      <section className="max-w-6xl mx-auto">
        {!posts || posts.length === 0 ? (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
            Nenhum artigo cadastrado no momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post._id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {post.category && (
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
                      {post.category}
                    </span>
                  )}
                  <span className="text-[11px] text-slate-400 font-medium">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : ''}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {post.description || 'Clique para ler o artigo completo.'}
                  </p>
                </div>

                <Link
                  href={`/artigo/${typeof post.slug === 'string' ? post.slug : (post.slug as any)?.current}`}
                  className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-800 underline inline-block"
                >
                  Ler Artigo Completo →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}