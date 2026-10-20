import Link from 'next/link';
import { 
  BookOpen, 
  BrainCircuit, 
  FileCheck2, 
  GraduationCap, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function EstudosPage() {
  const modulosEstudo = [
    {
      titulo: 'Banco de Simulados & Questões',
      descricao: 'Resolva questões comentadas de concursos (EBSERH, Residências, CNEN) divididas por modalidade e nível de dificuldade.',
      icone: FileCheck2,
      badge: 'Prática Intensiva',
      corBadge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      href: '/estudos/simulados',
      qtd: '120+ Questões Comentadas',
    },
    {
      titulo: 'Flashcards Dinâmicos',
      descricao: 'Memorização ativa baseada no método de repetição espaçada. Memorize acidentes ósseos, sequências de RM e radiofármacos.',
      icone: BrainCircuit,
      badge: 'Memorização Ativa',
      corBadge: 'bg-purple-100 text-purple-800 border-purple-200',
      href: '/estudos/flashcards',
      qtd: '150+ Cards Iterativos',
    },
    {
      titulo: 'Biblioteca Técnica & Resumos',
      descricao: 'Compêndio de Física das Radiações, Proteção Radiológica (CNEN-NN-3.01), Dosimetria e Parâmetros de Aquisição.',
      icone: BookOpen,
      badge: 'Teoria Aprofundada',
      corBadge: 'bg-blue-100 text-blue-800 border-blue-200',
      href: '/estudos/biblioteca-tecnica',
      qtd: '18 Guia-Resumos',
    },
    {
      titulo: 'Glossário Radiológico & Siglas',
      descricao: 'Dicionário técnico com termos de TC, RM, Artefatos de Imagem, Oncologia e Termos de Imagem Molecular.',
      icone: Layers,
      badge: 'Consulta Rápida',
      corBadge: 'bg-amber-100 text-amber-800 border-amber-200',
      href: '/estudos/dicionario-termo',
      qtd: '200+ Termos Mapeados',
    },
  ];

  const pilaresFundamentais = [
    {
      titulo: 'Proteção Radiológica (CNEN)',
      foco: 'Princípio ALARA, Limites de Dose Equivalente/Efetiva, Blindagem e Monitoração Individual.',
      cor: 'border-l-amber-500',
    },
    {
      titulo: 'Física das Radiações & Interações',
      foco: 'Efeito Fotoelétrico, Espalhamento Compton, Produção de Pares e Bremsstrahlung.',
      cor: 'border-l-blue-500',
    },
    {
      titulo: 'Qualidade & Artefatos de Imagem',
      foco: 'Resolução Espacial, SNR, CNR, Volume Parcial, Metal, Suscetibilidade Magnética e Reconstruções.',
      cor: 'border-l-sky-500',
    },
    {
      titulo: 'Anatomia Radiológica Aplicada',
      foco: 'Identificação topográfica em Cortes Axiais, Coronais e Sagitais em TC e RM.',
      cor: 'border-l-emerald-500',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      {/* Banner Principal de Boas-Vindas */}
      <header className="max-w-7xl mx-auto mb-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md">
            <GraduationCap className="w-4 h-4" />
            Central Acadêmica Radiológica
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Área de Estudos Avançados
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Plataforma didática de alto desempenho construída para estudantes e profissionais. Combine repetição espaçada, simulados interativos e o suporte do <strong>Allan IA</strong> para dominar exames e concursos.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Subseções de Estudo */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Módulos Interativos de Aprendizagem</h2>
              <p className="text-xs text-slate-500">Escolha o método ideal para o seu momento de estudo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modulosEstudo.map((modulo, idx) => {
              const Icone = modulo.icone;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-slate-100 rounded-xl text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icone className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${modulo.corBadge}`}>
                        {modulo.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {modulo.titulo}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {modulo.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400">
                      {modulo.qtd}
                    </span>
                    <Link
                      href={modulo.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-all group-hover:translate-x-1"
                    >
                      Acessar Módulo <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Pilares Fundamentais */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">Eixos Temáticos Essenciais</h2>
            <p className="text-xs text-slate-500">Tópicos com maior recorrência em provas institucionais e prática clínica</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pilaresFundamentais.map((pilar, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-50 p-4 rounded-xl border-l-4 ${pilar.cor} border-t border-r border-b border-slate-200 space-y-2`}
              >
                <h3 className="font-bold text-sm text-slate-900">{pilar.titulo}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pilar.foco}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Integração com Allan IA */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Tutoria em Tempo Real
            </div>
            <h3 className="text-2xl font-bold">Precisa sanar uma dúvida teórica ou resolver uma questão?</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              O <strong>Allan IA</strong> está ativo em todas as páginas. Clique no botão flutuante no canto inferior direito para solicitar explicações detalhadas de fórmulas, física ou anatomia.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}