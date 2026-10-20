export default function MedicinaNuclearPage() {
  const artigosCientificos = [
    {
      titulo: 'PET/CT in Clinical Oncology: Principles, Application, and Pitfalls',
      autores: 'Boellaard et al.',
      journal: 'Journal of Nuclear Medicine / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/25900980/',
      resumo: 'Diretrizes padronizadas sobre a preparação de pacientes, protocolo de injeção do 18F-FDG, quantificação do valor de captação padronizado (SUV) e interpretação de exames em oncologia.',
    },
    {
      titulo: 'PSMA PET/CT for Primary Staging and Biochemical Recurrence of Prostate Cancer',
      autores: 'Hofman et al.',
      journal: 'The Lancet / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/32209449/',
      resumo: 'Estudo multicêntrico (ProPSMA) demonstrando a superioridade do PET-CT com PSMA no estadiamento e reestadiamento de adenocarcinomas prostáticos frente aos métodos convencionais.',
    },
  ];

  const protocolosExames = [
    {
      regiao: 'Cabeça & Neuroimagem',
      nome: 'PET-CT Cerebral com 18F-FDG / SPECT de Perfusão (ECD/HMPAO)',
      indicacoes: 'Avaliação de demências (Doença de Alzheimer vs. Demência Frontotemporal), mapeamento de focos epileptogênicos e diferenciação entre radionecrose e recidiva tumoral.',
      radiofarmaco: '18F-FDG (Fludeoxicitose) ou 99mTc-ECD / HMPAO.',
      protocolo: 'Jejum prévio de 4 a 6 horas; controle glicêmico rigoroso (< 150 mg/dL); repouso sensorial (ambiente escuro e silencioso) por 20 minutos antes e após a injeção do radiofármaco.',
    },
    {
      regiao: 'Tórax & Coração',
      nome: 'Cintilografia de Perfusão Miocárdica (Estresse / Repouso com 99mTc-MIBI)',
      indicacoes: 'Pesquisa de isquemia miocárdica induzida por esforço, viabilidade celular e doença arterial coronariana (DAC).',
      radiofarmaco: '99mTc-Sestamibi (MIBI) ou 99mTc-Tetrofosmin.',
      protocolo: 'Aquisição em duas etapas (Repouso e Estresse físico/farmacológico com Dipiridamol/Adenosina). Sincronização ECG (Gated-SPECT) para cálculo de fração de ejeção do ventrículo esquerdo.',
    },
    {
      regiao: 'Corpo Inteiro (Oncologia Avançada)',
      nome: 'PET-CT com 18F-FDG / 68Ga-PSMA / 68Ga-DOTATATE',
      indicacoes: 'Estadiamento e reestadiamento oncológico, avaliação de resposta terapêutica e pesquisa de tumores neuroendócrinos.',
      radiofarmaco: '18F-FDG (metabolismo glicídico), 68Ga-PSMA (antígeno de membrana específico da próstata) ou 68Ga-DOTATATE (receptores de somatostatina).',
      protocolo: 'Captação do radiofármaco em repouso por 60 minutos; varredura helicoidal da base do crânio ao meio da coxa (ou corpo inteiro). Fusão de imagem anatômica (TC) com funcional (PET).',
    },
    {
      regiao: 'Sistema Endócrino',
      nome: 'Cintilografia e Captação de Tireoide (131I / 99mTc-Pertecnetato)',
      indicacoes: 'Diagnóstico diferencial de hipertireoidismo (Doença de Graves vs. Bócio Multinodular) e pesquisa de tecido tireoidiano remanescente pós-tireoidectomia.',
      radiofarmaco: 'Iodo-131 (131I) ou Pertecnetato de Sódio (99mTcO4-).',
      protocolo: 'Pausa de medicamentos antitireoidianos e dieta pobre em iodo por 14 dias. Medição de captação percentual em 2 e 24 horas.',
    },
    {
      regiao: 'Sistema Musculoesquelético',
      nome: 'Cintilografia Óssea de Corpo Inteiro (Trifásica)',
      indicacoes: 'Pesquisa de metástases ósseas blásticas, osteomielite, afrouxamento prótesico e Doença de Paget.',
      radiofarmaco: '99mTc-MDP (Metilenodifosfonato).',
      protocolo: 'Aquisição em 3 fases no local de dor (Fluxo sanguíneo, Equilíbrio/Partes Moles) e Fase Tardia (Corpo Inteiro) de 2 a 4 horas após a injeção do radiotraçador.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      {/* Cabeçalho */}
      <header className="max-w-7xl mx-auto mb-10 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Módulo de Imagem Molecular e Teranóstico
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
          Medicina Nuclear & PET-CT
        </h1>
        <p className="text-slate-600 text-base mt-2 max-w-4xl leading-relaxed">
          Estudo da fisiologia e do metabolismo tecidual in vivo mediante a administração de radiofármacos. Princípios de emissão fotônica (Gama), aniquilação de pósitrons (PET), cintilografia plana, SPECT e medicina nuclear terapêutica (Radioiodoterapia, Lu-177).
        </p>
      </header>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Seção 1: Principais Radiofármacos e Radionucleídeos */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Radiofármacos e Princípios Físicos
          </h2>

          <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              <strong>O que é um Radiofármaco?</strong><br />
              Trata-se de uma molécula biológica acoplada a um <strong>radionucleídeo (isótopo radioativo)</strong>. A fração biológica direciona o composto ao órgão ou receptor específico, enquanto o isótopo emite radiação ionizante detectável por detectores externos (Gama Câmaras ou Cristais de PET).
            </p>
            
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3 font-semibold">Isótopo Radioativo</th>
                    <th className="p-3 font-semibold">Tipo de Emissão</th>
                    <th className="p-3 font-semibold">Meia-Vida Física (T1/2)</th>
                    <th className="p-3 font-semibold">Aplicação Principal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-medium font-mono text-blue-600">Tecnécio-99m (99mTc)</td>
                    <td className="p-3">Gama pura (140 keV)</td>
                    <td className="p-3 font-mono">6,0 horas</td>
                    <td className="p-3">Cintilografia Óssea, Miocárdica, Renal e Cerebral (SPECT).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium font-mono text-blue-600">Flúor-18 (18F)</td>
                    <td className="p-3">Pósitron (β+ / 511 keV)</td>
                    <td className="p-3 font-mono">110 minutos</td>
                    <td className="p-3">PET-CT Oncológico, Neurológico e Cardíaco (18F-FDG / PSMA).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium font-mono text-blue-600">Gálio-68 (68Ga)</td>
                    <td className="p-3">Pósitron (β+ / 511 keV)</td>
                    <td className="p-3 font-mono">68 minutos</td>
                    <td className="p-3">PET-CT para receptores somatostatina e PSMA.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium font-mono text-red-600">Iodo-131 (131I)</td>
                    <td className="p-3">Beta (β-) e Gama (364 keV)</td>
                    <td className="p-3 font-mono">8,0 dias</td>
                    <td className="p-3">Diagnóstico e Radioiodoterapia de Câncer de Tireoide.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Seção 2: Imagem Híbrida (SPECT-CT e PET-CT) */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Princípios do PET-CT e Coincidência de Aniquilação
          </h2>

          <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              Em exames de <strong>Tomografia por Emissão de Pósitrons (PET)</strong>, o pósitron emitido pelo radiofármaco colide com um elétron do tecido vizinho, gerando o fenômeno de <strong>aniquilação</strong>. Essa aniquilação libera dois fotões gama de <strong>511 keV</strong> em direções exatamente opostas (180°).
            </p>
            <p>
              Os cristais cintiladores do tomógrafo detectam esses fotões em <strong>coincidência temporal</strong>, localizando a origem exata da emissão no espaço tridimensional. A fusão com a Tomografia Computadorizada (TC) permite correlação anatômica precisa e correção de atenuação física.
            </p>
          </div>
        </section>

        {/* Seção 3: Protocolos Clínicos por Região */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Protocolos Clínicos e Radiofarmacológicos
          </h2>
          <div className="space-y-4">
            {protocolosExames.map((proto, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <h3 className="font-bold text-base text-slate-900">{proto.nome}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded">
                    {proto.regiao}
                  </span>
                </div>
                <p className="text-xs text-slate-700"><strong>Indicações Clínicas:</strong> {proto.indicacoes}</p>
                <p className="text-xs text-blue-900 font-mono"><strong>Radiofármaco Utilizado:</strong> {proto.radiofarmaco}</p>
                <p className="text-xs text-slate-600 bg-white p-2 rounded border border-slate-200">
                  <strong>Protocolo de Preparo e Aquisição:</strong> {proto.protocolo}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção 4: Literatura Científica */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Literatura Científica Recomendada
          </h2>
          <div className="space-y-3">
            {artigosCientificos.map((artigo, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                <h3 className="font-semibold text-sm text-slate-900">{artigo.titulo}</h3>
                <p className="text-xs text-blue-600 font-medium">{artigo.autores} • <em>{artigo.journal}</em></p>
                <p className="text-xs text-slate-600 leading-relaxed">{artigo.resumo}</p>
                <a
                  href={artigo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-blue-600 hover:text-blue-800 underline pt-1"
                >
                  Acessar Artigo no PubMed →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}