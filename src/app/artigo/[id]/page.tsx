import Link from 'next/link';

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 bg-white text-slate-900 space-y-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-slate-400 space-x-2">
        <Link href="/" className="hover:text-slate-600">Início</Link>
        <span>/</span>
        <Link href="#" className="hover:text-slate-600">Tomografia Computadorizada</Link>
      </nav>

      {/* Cabeçalho do Artigo */}
      <div className="space-y-3">
        <span className="text-xs font-medium text-sky-700 uppercase tracking-wide">
          Tomografia Computadorizada
        </span>
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-slate-900">
          Princípios da Reconstrução Multiplanar (MPR) em TC de Tórax
        </h1>
        <p className="text-sm text-slate-600">
          Análise técnica sobre como a interpolação de dados volumétricos auxilia na identificação de pequenos nódulos subpleurais.
        </p>
        <div className="text-xs text-slate-400 pt-2 flex items-center gap-4 border-b border-slate-100 pb-4">
          <span>Por Prof. Dr. Silva</span>
          <span>·</span>
          <span>12 de Setembro, 2026</span>
          <span>·</span>
          <span>6 min de leitura</span>
        </div>
      </div>

      {/* Conteúdo do Artigo */}
      <div className="prose prose-slate text-sm leading-relaxed space-y-6">
        <p>
          A reconstrução multiplanar (MPR) é uma das ferramentas pós-processamento mais utilizadas na rotina do radiologista e do tecnólogo. Ela permite a avaliação de estruturas vasculares e bronquiais sob diferentes planos anatômicos.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 pt-4">1. Aquisição Volumétrica e Espessura de Corte</h2>
        <p>
          Para obter imagens MPR de alta definição, é essencial que a aquisição seja realizada com detectores finos, gerando voxels isotrópicos.
        </p>

        {/* Box Informativo Discreto */}
        <div className="p-4 border-l-2 border-slate-800 bg-slate-50 text-xs text-slate-700 space-y-1">
          <strong className="font-semibold block text-slate-900">Nota Técnica:</strong>
          <span> Voxels isotrópicos possuem dimensões idênticas em todos os eixos (X, Y, Z), evitando distorções visuais quando a imagem é reconstruída no plano coronal ou sagital.</span>
        </div>

        {/* Tabela Simples */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-900 font-semibold">
                <th className="py-2 pr-4">Modalidade</th>
                <th className="py-2 pr-4">Espessura (mm)</th>
                <th className="py-2">Aplicação Primária</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-2 pr-4">Corte Fino (HRCT)</td>
                <td className="py-2 pr-4">1.0 mm</td>
                <td className="py-2">Avaliação parenquimatosa fina</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Reconstrução Padrão</td>
                <td className="py-2 pr-4">3.0 mm - 5.0 mm</td>
                <td className="py-2">Análise geral do mediastino</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Referências Bibliográficas */}
        <div className="pt-10 border-t border-slate-100 space-y-2 text-xs text-slate-500">
          <h3 className="font-semibold text-slate-900">Referências Bibliográficas</h3>
          <ol className="list-decimal pl-4 space-y-1">
            <li>BUSHBERG, J. T. et al. The Essential Physics of Medical Imaging. 3rd ed.</li>
            <li>COLÉGIO BRASILEIRO DE RADIOLOGIA (CBR). Diretrizes de Tomografia Computadorizada de Tórax, 2025.</li>
          </ol>
        </div>
      </div>
    </article>
  );
}