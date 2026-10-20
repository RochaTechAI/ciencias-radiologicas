import AnatomyChat from '@/components/AnatomyChat';

export default function RessonanciaPage() {
  const artigosCientificos = [
    {
      titulo: 'Principles of Magnetic Resonance Imaging: Physics, Sequences, and Applications',
      autores: 'Bushberg et al.',
      journal: 'The Essential Physics of Medical Imaging / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/22158652/',
      resumo: 'Revisão aprofundada dos princípios da física de ressonância magnética, alinhamento de spin, sequências de pulso Spin-Echo, Gradient-Echo e contraste ponderado em T1 e T2.',
    },
    {
      titulo: 'Gadolinium-Based Contrast Agents: Safety, Toxicity, and Nephrogenic Systemic Fibrosis',
      autores: 'Grobner et al.',
      journal: 'Radiology / PubMed',
      link: 'https://pubmed.ncbi.nlm.nih.gov/16641331/',
      resumo: 'Estudo crítico sobre a farmacocinética dos agentes de contraste à base de gadolínio, perfis de segurança renal e diretrizes para prevenção de Fibrose Sistêmica Nefrogênica.',
    },
  ];

  const protocolosExames = [
    {
      regiao: 'Cabeça (Encéfalo)',
      nome: 'RM de Encéfalo / Angio-RM',
      indicacoes: 'AVC isquêmico agudo (DWI/ADC), Esclerose Múltipla, neoplasias gliais, aneurismas e demências.',
      parametros: 'Sequências essenciais: T1 axial/sagital, T2 axial, FLAIR (supressão de líquor), Difusão (DWI) e mapa ADC, T2* / SWI (suscetibilidade magnética).',
      janelamento: 'Contraste de partes moles excelente; T1 destaca anatomia, T2/FLAIR destacam edemas e lesões desmielinizantes.',
      usoContraste: 'Indicado em suspeita de tumores, processos infecciosos/inflamatórios, esclerose múltipla em atividade e Angio-RM venosa/arterial.',
    },
    {
      regiao: 'Pescoço & Coluna Cervical',
      nome: 'RM de Coluna Cervical / Partes Moles Cervicais',
      indicacoes: 'Hérnias discais, mielopatia compressiva, plexo braquial, tumores cervicais e linfadenopatias.',
      parametros: 'Cortes finos em T1 e T2 nos planos Sagital e Axial, STIR (supressão de gordura) para edema ósseo/ligamentar.',
      janelamento: 'Diferenciação precisa entre disco intervertebral, saco dural, raiz nervosa e medula espinhal.',
      usoContraste: 'Recomendado no pós-operatório (diferenciar fibrose cicatricial de re-hérnia) e em lesões expansivas intramedulares.',
    },
    {
      regiao: 'Tórax & Coração',
      nome: 'RM Cardíaca / Mama / Mediastino',
      indicacoes: 'Viabilidade miocárdica (realce tardio), miocardite, estadiamento de câncer de mama e massas mediastinais.',
      parametros: 'Cine-RM (Balanced SSFP), sequências com sincronização cardíaca e respiratória, mapas de T1 e T2 miocárdico.',
      janelamento: 'Alto contraste tecidual para caracterização de gordura, fibrose, edema miocárdico e parênquima mamário.',
      usoContraste: 'Essencial na pesquisa de viabilidade/isquemia miocárdica (Gadolinio tardio) e no rastreamento de lesões mamárias suspeitas.',
    },
    {
      regiao: 'Abdômen & Pelve',
      nome: 'RM de Fígado / Colangio-RM / Próstata (mpMRI)',
      indicacoes: 'Caracterização de lesões hepáticas focais, colandrolitíase, carcinoma prostático (PI-RADS) e endometriose profunda.',
      parametros: 'Sequências T1 em fase/fora de fase (gordura), T2 de alta resolução, DWI (difusão), Colangio-T2 3D.',
      janelamento: 'Excelente resolução em tecidos moles; T2 evidencia fluidos/ductos biliares e zonalidade prostática.',
      usoContraste: 'Contraste dinâmico trifásico (Arterial, Portal, Tardio) e hepatobiliar (ex: Primovist) para diferenciação nodular hepática.',
    },
    {
      regiao: 'Membros & Musculoesquelético',
      nome: 'RM Articular (Joelho, Ombro, Quadril)',
      indicacoes: 'Lesões meniscais e ligamentares (LCA/LCP), manguito rotador, labrum, osteonecrose e condropatias.',
      parametros: 'Sequências T1, T2 com supressão de gordura (DP Fat-Sat / STIR) nos três planos ortogonais.',
      janelamento: 'Detecção precoce de edema ósseo trabecular, roturas tendíneas e derrames articulares.',
      usoContraste: 'Utilizado em Artro-RM (intra-articular) para lesões labrais/cartilaginosas complexas ou tumores de tecidos moles.',
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
          Ressonância Magnética (RM)
        </h1>
        <p className="text-slate-600 text-base mt-2 max-w-4xl leading-relaxed">
          Estudo avançado da física dos spins nucleares de Hidrogênio (¹H), tempos de relaxamento longitudinal (T1) e transversal (T2), sequências de pulso e a utilização do meio de contraste paramagnético à base de Gadolínio.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Conteúdo Principal */}
        <div className="lg:col-span-2 space-y-8">
          {/* Meios de Contraste em RM */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Meios de Contraste em Ressonância Magnética
            </h2>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>
                <strong>O que é o contraste à base de Gadolínio?</strong><br />
                Ao contrário da Tomografia (que utiliza Iodo para bloquear raios X), a Ressonância Magnética utiliza o íon **Gadolínio (Gd³⁺)**, um elemento paramagnético que altera os campos magnéticos locais e acelera o tempo de relaxamento longitudinal (T1) dos prótons de água adjacentes.
              </p>
              <p>
                <strong>Efeito na Imagem e Indicações Clínicas:</strong><br />
                O Gadolínio encurta o tempo T1 dos tecidos onde se acumula, gerando um **hipersinal (brilho intenso)** nas sequências ponderadas em T1. É indicado para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Demonstrar quebra da barreira hematoencefálica (tumores cerebrais, esclerose múltipla ativa, abscessos).</li>
                <li>Mapear a vascularização e realce dinâmico de nódulos hepáticos, mamários, renais e prostáticos.</li>
                <li>Avaliar viabilidade miocárdica (pesquisa de fibrose/infarto por realce tardio).</li>
                <li>Estudo de angiorressonância de vasos arteriais e venosos.</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-3 text-amber-800 text-xs rounded-r">
                <strong>Nota de Segurança e Nefroproteção:</strong> Deve-se verificar a Taxa de Filtração Glomerular (TFG). Pacientes com insuficiência renal severa (TFG &lt; 30 mL/min/1.73m²) possuem risco para **Fibrose Sistêmica Nefrogênica (NSF)**, devendo-se utilizar compostos macrocíclicos de alta estabilidade.
              </div>
            </div>
          </section>

          {/* Ponderações T1, T2 e FLAIR */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Ponderações e Comportamento dos Tecidos
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              A caracterização tecidual na RM baseia-se na intensidade de sinal (hiposinal, isosinal, hipersinal) dependendo dos parâmetros de tempo de repetição (TR) e tempo de eco (TE):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3 font-semibold">Tecido / Estrutura</th>
                    <th className="p-3 font-semibold">Ponderação T1</th>
                    <th className="p-3 font-semibold">Ponderação T2</th>
                    <th className="p-3 font-semibold">FLAIR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-3 font-medium">Líquor (LCR) / Água livre</td>
                    <td className="p-3 font-bold text-blue-800">Hiposinal (Escuro)</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal (Brilhante)</td>
                    <td className="p-3 font-bold text-slate-500">Atenuado (Escuro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Gordura / Medula Amarela</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal (Brilhante)</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal / Intermediário</td>
                    <td className="p-3 text-slate-700">Intermediário</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Substância Cinzenta Cerebral</td>
                    <td className="p-3 text-slate-700">Isosinal (Cinza)</td>
                    <td className="p-3 text-slate-700">Intermediário Claro</td>
                    <td className="p-3 text-slate-700">Intermediário</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Substância Branca Cerebral</td>
                    <td className="p-3 text-slate-700">Mais Clara que a Cinzenta</td>
                    <td className="p-3 text-slate-700">Mais Escura que a Cinzenta</td>
                    <td className="p-3 text-slate-700">Escura</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Edema / Lesão Inflamatória</td>
                    <td className="p-3 text-slate-500">Hiposinal (Escuro)</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal (Brilhante)</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal (Destacado)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Gadolínio (Contraste)</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal Intenso (Branco)</td>
                    <td className="p-3 text-slate-500">Sem alteração significativa</td>
                    <td className="p-3 font-bold text-blue-600">Hipersinal em T1+C</td>
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
                  <p className="text-xs text-slate-600"><strong>Sequências:</strong> {proto.parametros}</p>
                  <p className="text-xs text-slate-600"><strong>Ponderação:</strong> {proto.janelamento}</p>
                  <p className="text-xs text-blue-900 bg-blue-50/70 p-2 rounded border border-blue-100">
                    <strong>Uso do Contraste (Gadolínio):</strong> {proto.usoContraste}
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
              moduleContext="Ressonância Magnética (RM)"
              title="Allan IA - Especialista em RM"
            />
          </div>
        </aside>
      </div>
    </main>
  );
}