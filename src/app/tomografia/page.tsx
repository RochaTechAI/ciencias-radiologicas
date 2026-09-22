import AnatomyChat from '@/components/AnatomyChat';

export default function TomografiaPage() {
  const artigosCientificos = [
    {
      titulo: 'High-Resolution Computed Tomography of the Chest: Standardized Protocols and Clinical Applications',
      autores: 'Kazerooni et al.',
      journal: 'Radiology / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/11058631/',
      resumo: 'Revisão detalhada sobre protocolos de aquisição de alta resolução (TCAR), filtros de reconstrução e avaliação de doenças intersticiais pulmonares.',
    },
    {
      titulo: 'Dual-Energy CT in Clinical Practice: Physical Principles and Diagnostic Applications',
      autores: 'McCollough et al.',
      journal: 'RadioGraphics / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/26466178/',
      resumo: 'Estudo das aplicações da tomografia de dupla energia na caracterização de tecidos, redução de artefatos metálicos e mapas de iodo.',
    },
  ];

  const protocolosExames = [
    {
      regiao: 'Cabeça (Crânio & Encéfalo)',
      nome: 'TC de Crânio (Sem Contraste / Com Contraste)',
      indicacoes: 'AVC isquêmico/hemorrágico, TCE, cefaleia súbita, neoplasias e infecções.',
      parametros: 'Espessura de corte de 2,5mm a 5mm. Reconstruções com filtro suave (parênquima) e filtro duro (osso).',
      janelamento: 'Pênsula: WL 35, WW 80 | Osso: WL 400, WW 2000',
      usoContraste: 'Não indicado na fase aguda do TCE ou AVC hemorrágico. Indicado em suspeita de tumores, abscessos e trombose venosa cerebral.',
    },
    {
      regiao: 'Pescoço',
      nome: 'TC de Cervical / Cervicotorácica',
      indicacoes: 'Estadiamento de tumores de cabeça e pescoço, abscessos profundos, trauma cervical e linfadenopatias.',
      parametros: 'Cortes finos de 1,25mm a 2,5mm, com extensão do osso hioide até a carina.',
      janelamento: 'Partes Moles: WL 40, WW 350 | Osso: WL 400, WW 2000',
      usoContraste: 'Altamente recomendado (fase venosa/intermediária) para delinear vasos, linfonodos e margens tumorais.',
    },
    {
      regiao: 'Tórax',
      nome: 'TCAR / Angio-TC de Tórax',
      indicacoes: 'Embolia Pulmonar (TEP), doenças intersticiais (TCAR), nódulos pulmonares, dissecção de aorta.',
      parametros: 'Aquisição volumétrica helicoidal em inspiração total. Cortes submilimétricos (0,625mm a 1,25mm).',
      janelamento: 'Pulmão: WL -600, WW 1500 | Mediastino: WL 40, WW 400',
      usoContraste: 'Essencial na Angio-TC (TEP/Aorta). Não necessário para TCAR na pesquisa de pneumopatias intersticiais simples.',
    },
    {
      regiao: 'Abdômen & Pelve',
      nome: 'TC de Abdómen Total Multifásica',
      indicacoes: 'Caracterização de nódulos hepáticos, pancreatite, apendicite, urolitíase, traumas e estadiamento tumoral.',
      parametros: 'Fases de varredura: Sem contraste (pesquisa de cálculo), Arterial (35s), Portal (70s) e Tardio/Equilíbrio (3 a 5 min).',
      janelamento: 'Vísceras: WL 50, WW 350 | Osso: WL 400, WW 2000',
      usoContraste: 'Indispensável a análise multifásica para lesões hipervasculares hepáticas, renais e avaliação de sangramentos.',
    },
    {
      regiao: 'Membros (Superior & Inferior)',
      nome: 'TC de Articulações e Ossos Longos',
      indicacoes: 'Fraturas complexas, planejamento cirúrgico ortopédico, tumores ósseos e consolidação óssea.',
      parametros: 'Cortes finos submilimétricos com reconstrução tridimensional (3D/VR) e filtro de alta resolução espacial.',
      janelamento: 'Osso: WL 500, WW 2500 | Partes Moles: WL 50, WW 350',
      usoContraste: 'Indicado em suspeita de tumores ósseos/partes moles, prospecção de infecção (osteomielite) ou angiotomografia periférica.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      {/* Cabeçalho */}
      <header className="max-w-7xl mx-auto mb-10 border-b border-slate-200 pb-6">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Módulo de Diagnóstico por Imagem
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
          Tomografia Computadorizada (TC)
        </h1>
        <p className="text-slate-600 text-base mt-2 max-w-4xl leading-relaxed">
          Estudo completo dos princípios físicos da atenuação tecidual (Escala Hounsfield), protocolos de varredura das principais regiões anatômicas e aplicação clínica do meio de contraste iodado.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Conteúdo Principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* O que é e Quando Usar Contraste */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Meios de Contraste na Tomografia Computadorizada
            </h2>
            
            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>
                <strong>O que é o contraste iodado?</strong><br />
                O meio de contraste utilizado na Tomografia Computadorizada é uma solução intravenosa à base de <strong>Iodo</strong>. Como o iodo possui alto número atômico, ele atenua os raios X de forma intensa, aumentando a densidade das estruturas por onde circula.
              </p>
              <p>
                <strong>Para que serve e quando deve ser utilizado?</strong><br />
                O contraste permite diferenciar estruturas com densidades similares em estado nativo. Sua aplicação é fundamental para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Realçar vasos sanguíneos (artérias e veias) em exames de Angiotomografia.</li>
                <li>Diferenciar lesões benignas de malignas (pelo padrão de captação/vascularização).</li>
                <li>Identificar focos inflamatórios, abscessos e necroses teciduais.</li>
                <li>Estadiamento oncológico e avaliação de metástases.</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-amber-800 text-xs rounded-r">
                <strong>Nota de Segurança:</strong> Antes da administração do contraste iodado, deve-se avaliar a função renal do paciente (taxa de filtração glomerular/creatinina) e histórico de reações alérgicas.
              </div>
            </div>
          </section>

          {/* Escala Hounsfield */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Escala Hounsfield e Densidades Teciduais
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              A atenuação linear dos tecidos em relação à água pura define os valores em <strong>Unidades Hounsfield (HU)</strong>:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3 font-semibold">Estrutura Tecidual</th>
                    <th className="p-3 font-semibold">Densidade (HU)</th>
                    <th className="p-3 font-semibold">Classificação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-medium">Ar Pulmonar / Seios Paranasais</td>
                    <td className="p-3 font-mono font-bold text-blue-600">-1000 a -600 HU</td>
                    <td className="p-3">Hipodenso (Preto)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Gordura Tecidual</td>
                    <td className="p-3 font-mono font-bold text-blue-600">-120 a -50 HU</td>
                    <td className="p-3">Hipodenso (Cinza Escuro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Água / Cistos simples</td>
                    <td className="p-3 font-mono font-bold text-blue-600">0 a 20 HU</td>
                    <td className="p-3">Isodenso Neutro</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Parênquima / Músculo</td>
                    <td className="p-3 font-mono font-bold text-blue-600">+30 a +50 HU</td>
                    <td className="p-3">Isodenso (Cinza Intermediário)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Sangue Agudo (Coágulo)</td>
                    <td className="p-3 font-mono font-bold text-blue-600">+60 a +80 HU</td>
                    <td className="p-3">Hiperdenso (Cinza Claro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Osso Cortical / Contraste Iodado</td>
                    <td className="p-3 font-mono font-bold text-blue-600">+400 a +3000 HU</td>
                    <td className="p-3">Hiperdenso (Branco)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Protocolos Práticos */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Principais Protocolos Clínicos por Região
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
                  <p className="text-xs text-slate-600"><strong>Aquisição:</strong> {proto.parametros}</p>
                  <p className="text-xs text-slate-600"><strong>Janelamento:</strong> {proto.janelamento}</p>
                  <p className="text-xs text-blue-900 bg-blue-50/70 p-2 rounded border border-blue-100">
                    <strong>Uso do Contraste:</strong> {proto.usoContraste}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Artigos Científicos */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Artigos Científicos Recomendados
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

        {/* Coluna Lateral: Allan IA */}
        <aside className="lg:col-span-1">
          <div className="sticky top-6">
            <AnatomyChat
              moduleContext="Tomografia Computadorizada (TC)"
              title="Allan IA - Especialista em TC"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}