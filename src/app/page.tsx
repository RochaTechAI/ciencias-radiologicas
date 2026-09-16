import Link from 'next/link';
import { CaseCard, MedicalCase } from '@/components/CaseCard';

interface Article {
  _id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  imageUrl: string;
}

export default function HomePage() {
  const articles: Article[] = [
    {
      _id: '1',
      title: 'Conectividade, IA generativa e avanços no diagnóstico por imagem',
      category: 'Saúde & Tecnologia',
      description: 'Análise técnica sobre como os algoritmos de aprendizado profundo estão otimizando o fluxo de trabalho nos centros radiológicos e aumentando a precisão na detecção precoce de lesões.',
      date: '15/09/2026 14:30',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      _id: '2',
      title: 'Reconstrução Tridimensional e IA na TC de Tórax',
      category: 'Tomografia',
      description: 'Aplicações práticas da inteligência artificial na volumetria de nódulos pulmonares.',
      date: '14/09/2026 10:15',
      imageUrl: '',
    },
    {
      _id: '3',
      title: 'Diferenças de Sinal T1 e T2 na Ressonância do Encéfalo',
      category: 'Ressonância',
      description: 'Guia de interpretação de ponderações fundamentais para diagnósticos neurológicos.',
      date: '12/09/2026 16:45',
      imageUrl: '',
    },
    {
      _id: '4',
      title: 'Novos Protocolos de Biossegurança e Proteção Radiológica',
      category: 'Segurança',
      description: 'Diretrizes atualizadas para minimização de dose em exames pediátricos.',
      date: '10/09/2026 08:30',
      imageUrl: '',
    },
    {
      _id: '5',
      title: 'Contraste Iodado x Gadolínio: Indicações Clínicas',
      category: 'Farmacologia',
      description: 'Revisão sobre profilaxia e gerenciamento de reações adversas aos meios de contraste.',
      date: '08/09/2026 11:20',
      imageUrl: '',
    },
  ];

  const sampleCase: MedicalCase = {
    _id: 'caso-01',
    title: 'Dor Torácica Aguda em Paciente Jovem',
    modality: 'TC',
    patientHistory: 'Paciente de 28 anos apresenta dor torácica súbita e dispneia leve.',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    findings: 'Hipertransparência avascular no ápice pulmonar direito com colapso parcial do parênquima.',
    diagnosis: 'Pneumotórax Espontâneo Primário',
  };

  const featuredPost = articles[0];
  const topArticles = articles.slice(1);

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Categoria do Destaque */}
      <span className="text-xs font-semibold text-sky-600 block mb-2">
        {featuredPost.category}
      </span>

      {/* Grid Principal: Conteúdo (Esquerda) + Sidebar (Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUNA ESQUERDA: Artigo Principal */}
        <div id="artigos" className="lg:col-span-8 space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">
            {featuredPost.title}
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            {featuredPost.description}
          </p>

          <div className="text-xs text-slate-500 flex items-center gap-2 border-b border-gray-100 pb-4">
            <span>Por <strong className="text-slate-800">Redação Ciências Radiológicas</strong></span>
            <span>•</span>
            <span>{featuredPost.date}</span>
          </div>

          {featuredPost.imageUrl && (
            <div className="w-full h-[380px] bg-slate-900 rounded-lg overflow-hidden relative">
              <img
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          )}

          <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
            <p>
              A integração de novas ferramentas no diagnóstico por imagem tem permitido a reconstrução de exames complexos com menor dose de radiação e tempo de aquisição reduzido.
            </p>
            <p>
              Na área educacional, os bancos de dados anatômicos com correlação tomográfica facilitam o treinamento contínuo de residentes e estudantes de radiologia.
            </p>
          </div>
        </div>

        {/* COLUNA DIREITA: Sidebar (Mais Lidos + Caso Clínico) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Box "Mais Lidos" */}
          <div className="bg-[#EAECEF]/60 p-6 rounded-lg space-y-4">
            <h3 className="text-base font-bold text-slate-900 border-b border-gray-300 pb-2">
              Mais Lidos
            </h3>

            <div className="space-y-4">
              {topArticles.map((item: Article, index: number) => (
                <div key={item._id} className="flex gap-3 items-start">
                  <span className="text-xl font-bold text-slate-800 leading-none">
                    {index + 1}
                  </span>
                  <div>
                    <span className="text-[10px] text-sky-700 font-semibold uppercase block">
                      {item.category}
                    </span>
                    <Link
                      href={`/artigo/${item._id}`}
                      className="text-xs font-semibold text-slate-800 hover:text-sky-600 transition leading-snug"
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Área de Estudos */}
          <div id="estudos" className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-gray-200 pb-2">
              Caso Clínico do Dia
            </h3>
            <CaseCard item={sampleCase} />
          </div>

        </div>

      </div>
    </main>
  );
}