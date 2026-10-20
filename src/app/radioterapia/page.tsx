export default function RadioterapiaPage() {
  const artigosCientificos = [
    {
      titulo: 'Intensity-Modulated Radiation Therapy (IMRT) and Volumetric Modulated Arc Therapy (VMAT) in Clinical Oncology',
      autores: 'Teoh et al.',
      journal: 'BMC Cancer / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/21871092/',
      resumo: 'Análise comparativa entre IMRT e VMAT, destacando conformabilidade de dose no volume-alvo (PTV) e preservação de órgãos em risco (OAR).',
    },
    {
      titulo: 'Stereotactic Body Radiation Therapy (SBRT) for Early-Stage Non-Small Cell Lung Cancer: Clinical Outcomes and Physics Protocols',
      autores: 'Timmerman et al.',
      journal: 'Journal of Clinical Oncology / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/20406933/',
      resumo: 'Estudo seminal sobre os princípios físicos e biológicos de esquemas hipofracionados de alta precisão no tratamento de neoplasias pulmonares primárias.',
    },
  ];

  const protocolosExames = [
    {
      regiao: 'Cabeça e Pescoço',
      nome: 'Radioterapia Conformada / IMRT em Neoplasias Cervicofaciais',
      indicacoes: 'Carcinomas espinocelulares de orofaringe, nasofaringe, laringe e cavidade oral.',
      tecnica: 'IMRT / VMAT com máscara termoplástica de imobilização e TC de simulação com contraste.',
      planejamento: 'Dose total: 66 Gy a 70 Gy em 33 a 35 frações (1.8 - 2.0 Gy/dia). Preservação estrita das glândulas parótidas (prevenção de xerostomia) e medula espinhal.',
    },
    {
      regiao: 'Sistema Nervoso Central (SNC)',
      nome: 'Radiocirurgia Estereotáxica (SRS) / SRT',
      indicacoes: 'Metástases cerebrais únicas ou oligo, meningiomas, neurinomas do acústico e malformações arteriovenosas (MAV).',
      parametros: 'Sistemas de alta precisão (CyberKnife / Gamma Knife / Linac dedicado) com fusão de imagem TC + RM.',
      planejamento: 'Dose única alta (16 a 24 Gy em SRS) ou hipofracionada (24 a 30 Gy em 3 a 5 frações). Queda rápida de dose fora do PTV.',
    },
    {
      regiao: 'Tórax & Mama',
      nome: 'Radioterapia Adjuvante de Mama / Tórax (VMAT com DIBH)',
      indicacoes: 'Pós-mastectomia ou cirurgia conservadora no câncer de mama; tumores de pulmão de pequenas/não pequenas células.',
      tecnica: 'DIBH (Deep Inspiration Breath Hold) para afastar a área cardíaca do campo de irradiação em mamas esquerdas.',
      planejamento: 'Fracionamento normofracionado (50 Gy em 25 frações) ou hipofracionado (40.05 Gy em 15 frações). Monitoramento do V20 pulmonar e dose média cardíaca.',
    },
    {
      regiao: 'Pelve Masculina (Próstata)',
      nome: 'IGRT + VMAT em Adenocarcinomas de Próstata',
      indicacoes: 'Câncer de próstata localizado de risco baixo, intermediário ou alto.',
      tecnica: 'IGRT (Radioterapia Guiada por Imagem) com fiduciais de ouro intraprostáticos ou Cone-Beam CT (CBCT) diário.',
      planejamento: 'Dose total convencional de 78 Gy (39 frações) ou Hipofracionamento Moderado (60 Gy em 20 frações). Restrições severas de dose no reto (V65) e bexiga.',
    },
    {
      regiao: 'Ginecologia / Pelve Feminina',
      nome: 'Teleterapia Pelvina Combinada com Braquiterapia de Alta Taxa de Dose (HDR)',
      indicacoes: 'Carcinoma do colo do útero e endométrio.',
      tecnica: 'Irradiação pélvica total por teleterapia seguida de Braquiterapia HDR intracavitária com aplicadores dedicados (Fletcher-Suit / Ring).',
      planejamento: 'Teleterapia (45 Gy) + Braquiterapia HDR (4 frações de 7 Gy no Ponto A). Avaliação cuidadosa das doses no reto, sigmoide e bexiga.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      {/* Cabeçalho */}
      <header className="max-w-7xl mx-auto mb-10 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Módulo de Oncologia Radiológica
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
          Radioterapia & Radiobiologia
        </h1>
        <p className="text-slate-600 text-base mt-2 max-w-4xl leading-relaxed">
          Estudo das radiações ionizantes aplicadas ao tratamento neoplásico: física dos fotões e eletrões de alta energia, equações da radiobiologia (modelo Linear-Quadrático), planejamento tridimensional e técnicas de alta precisão (IMRT, VMAT, IGRT e SRS).
        </p>
      </header>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Seção 1: Radiobiologia e Princípios Físicos */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Fundamentos da Radiobiologia Médica
          </h2>

          <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              <strong>Efeito Biológico da Radiação Ionizante:</strong><br />
              A radioterapia utiliza fotões de alta energia (gerados em aceleradores lineares na faixa de 6 a 15 MV) ou feixes de eletrões para induzir quebras duplas na fita do DNA (quebras de fita dupla - DSB) das células tumorais, impedindo sua proliferação mitótica.
            </p>
            <p>
              <strong>Os 4 "R"s da Radiobiologia:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Reparo:</strong> Capacidade do tecido sadio em reparar danos subletais no DNA entre as frações de dose.</li>
              <li><strong>Redistribuição:</strong> Progressão das células tumorais para fases mais sensíveis do ciclo celular (G2/M).</li>
              <li><strong>Reoxigenação:</strong> Aumento da oxigenação celular em tecidos tumorais anteriormente hipóxicos à medida que o tumor regressa.</li>
              <li><strong>Repovoamento:</strong> Proliferação de células sobreviventes durante tratamentos demasiadamente prolongados.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-3 text-blue-900 text-xs rounded-r font-mono">
              <strong>Unidade de Dose Absorvida:</strong> Gray (Gy) = 1 Joule por quilograma (J/kg).
            </div>
          </div>
        </section>

        {/* Seção 2: Cadeia de Volumes em Radioterapia */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Definição Internacional de Volumes Target (ICRU 50/62)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th className="p-3 font-semibold">Volume</th>
                  <th className="p-3 font-semibold">Definição Clínica</th>
                  <th className="p-3 font-semibold">Objetivo no Planejamento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-medium font-mono text-blue-600">GTV (Gross Tumor Volume)</td>
                  <td className="p-3">Massa tumoral visível palpável ou demonstrável por exames de imagem (TC/RM/PET).</td>
                  <td className="p-3">Receber a dose prescrita completa.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium font-mono text-blue-600">CTV (Clinical Target Volume)</td>
                  <td className="p-3">GTV acrescido de margem para doença microscópica subclínica ao redor da lesão.</td>
                  <td className="p-3">Erradicação de microextensões e linfonodos de risco.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium font-mono text-blue-600">PTV (Planning Target Volume)</td>
                  <td className="p-3">CTV acrescido de margem geométrica para incertezas de posicionamento e movimentação interna.</td>
                  <td className="p-3">Garantir que o CTV receba a dose correta durante todo o tratamento.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium font-mono text-red-600">OAR (Organs at Risk)</td>
                  <td className="p-3">Órgãos saudáveis adjacentes cuja sensibilidade à radiação pode limitar a dose prescrita.</td>
                  <td className="p-3">Manter doses estritamente abaixo dos limiares de tolerância tecidual (constraints).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Seção 3: Protocolos por Região */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Protocolos Clínicos e Planejamento por Região
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
                <p className="text-xs text-slate-700"><strong>Indicações:</strong> {proto.indicacoes}</p>
                <p className="text-xs text-slate-600"><strong>Técnica Utilizada:</strong> {proto.tecnica}</p>
                <p className="text-xs text-blue-900 bg-blue-50/70 p-2 rounded border border-blue-100">
                  <strong>Esquema de Dose & Restrições:</strong> {proto.planejamento}
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