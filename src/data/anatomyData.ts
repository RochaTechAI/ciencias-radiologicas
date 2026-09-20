export interface BoneInfo {
  name: string;
  description: string;
}

export interface MuscleInfo {
  name: string;
  origin: string;
  insertion: string;
  action: string;
}

export interface RegionData {
  id: string;
  label: string;
  description: string;
  bones: BoneInfo[];
  muscles: MuscleInfo[];
  radiologyNotes: string;
}

export const ANATOMY_DATA: Record<string, RegionData> = {
  cranio: {
    id: 'cranio',
    label: 'Cabeça & Pescoço',
    description: 'Compreende a caixa craniana, ossos da face, coluna cervical e a musculatura da mastigação, mímica facial e pescoço.',
    radiologyNotes: 'Avaliação de traumatismos cranioencefálicos (TCE), fraturas de Le Fort, AVCs, rinossinusites e lesões cervicais em TC e RM.',
    bones: [
      { name: 'Frontal', description: 'Osso ímpar que forma a testa, o teto das órbitas e o seio frontal.' },
      { name: 'Parietal (2)', description: 'Ossos pares que formam o teto e as paredes látero-superiores do crânio.' },
      { name: 'Temporal (2)', description: 'Abrigam as estruturas do ouvido médio/interno e a cavidade glenoide para a ATM.' },
      { name: 'Occipital', description: 'Osso posterior do crânio contendo o forame magno e os cóndilos occipitais.' },
      { name: 'Esfenóide', description: 'Osso articulador central na base do crânio, contém a sela túrcica e os seios esfenoidais.' },
      { name: 'Etmóide', description: 'Osso mediano entre as órbitas, compõe a lâmina crivosa e os cornetos nasais superiores.' },
      { name: 'Maxila (2)', description: 'Formam o teto da cavidade oral, piso da órbita, parede da cavidade nasal e arcada superior.' },
      { name: 'Mandíbula', description: 'Osso móvel da face que suporta os dentes inferiores e articula-se na ATM.' },
      { name: 'Zigomático (2)', description: 'Formam as maçãs do rosto e a parede lateral da órbita.' },
      { name: 'Nasal (2)', description: 'Pequenos ossos simétricos que formam a ponte do nariz.' },
      { name: 'Lacrimal (2)', description: 'Pequenos ossos na parede medial da órbita contendo a fossa do saco lacrimal.' },
      { name: 'Palatino (2)', description: 'Formam a parte posterior do palato duro e o assoalho da cavidade nasal.' },
      { name: 'Concha Nasal Inferior (2)', description: 'Lâminas ósseas curvas localizadas nas paredes laterais da cavidade nasal.' },
      { name: 'Vômer', description: 'Osso plano e ímpar que compõe a parte póstero-inferior do septo nasal.' },
      { name: 'Hióide', description: 'Osso em formato de U no pescoço, suspenso por músculos e ligamentos (sem articulação direta).' },
      { name: 'Vértebras Cervicais (C1-C7)', description: 'Incluem o Atlas (C1) e o Áxis (C2), responsáveis pela sustentação e mobilidade da cabeça.' },
    ],
    muscles: [
      { name: 'Temporal', origin: 'Fossa temporal e fáscia temporal', insertion: 'Processo coronóide da mandíbula', action: 'Elevação e retração da mandíbula' },
      { name: 'Masseter', origin: 'Arco zigomático', insertion: 'Face lateral do ramo e ângulo da mandíbula', action: 'Elevação forte da mandíbula (oclusão)' },
      { name: 'Pterigoideu Medial', origin: 'Fossa pterigoide do esfenóide', insertion: 'Face medial do ângulo da mandíbula', action: 'Elevação e protrusão da mandíbula' },
      { name: 'Pterigoideu Lateral', origin: 'Lâmina lateral do processo pterigoide e asa maior do esfenóide', insertion: 'Fóvea pteragóidea do condilo da mandíbula', action: 'Protrusão e movimentos laterais da mandíbula' },
      { name: 'Esternocleidomastóideo', origin: 'Manúbrio do esterno e terço medial da clavícula', insertion: 'Processo mastóide do osso temporal', action: 'Flexão, inclinação lateral e rotação contralateral do pescoço' },
      { name: 'Trapezoide (Porção Superior)', origin: 'Linha nucal superior e protuberância occipital externa', insertion: 'Terço lateral da clavícula e acrômio', action: 'Elevação e extensão da cabeça e pescoço' },
      { name: 'Platisma', origin: 'Fáscia do peitoral maior e deltoide', insertion: 'Margem inferior da mandíbula e pele do rosto', action: 'Deprime a mandíbula e tensiona a pele do pescoço' },
      { name: 'Escalenos (Anterior, Médio e Posterior)', origin: 'Processos transversos de C2 a C7', insertion: '1ª e 2ª costelas', action: 'Elevação das primeiras costelas (inspiração) e flexão/inclinação do pescoço' },
      { name: 'Orbicular da Boca', origin: 'Maxila e mandíbula em torno dos lábios', insertion: 'Pele e mucosa dos lábios', action: 'Fechamento e protrusão dos lábios' },
      { name: 'Orbicular do Olho', origin: 'Margem orbital medial e ligamento palpebral', insertion: 'Pele ao redor da órbita e pálpebras', action: 'Fechamento das pálpebras' },
      { name: 'Ocipitofrontal', origin: 'Linha nucal superior e aponeurose epicraniana', insertion: 'Pele do supercílio e glabela', action: 'Elevação das sobrancelhas e franzir da testa' },
      { name: 'Bucinador', origin: 'Processos alveolares da maxila e mandíbula', insertion: 'Ângulo da boca (módiolo)', action: 'Comprime as bochechas contra os dentes (sopro e mastigação)' },
    ],
  },

  torax: {
    id: 'torax',
    label: 'Tórax & Coluna',
    description: 'Caixa torácica protetora dos órgãos cardiorrespiratórios e a coluna vertebral torácica e lombar de sustentação.',
    radiologyNotes: 'Identificação de fraturas costais, escoliose, hérnias discais, pneumotórax e consolidações pulmonares em Radiografias, TC e RM.',
    bones: [
      { name: 'Esterno', description: 'Osso plano anterior dividido em manúbrio, corpo e processo xifóide.' },
      { name: 'Costelas Verdadeiras (1ª a 7ª)', description: 'Pares de costelas que se articulam diretamente ao esterno via cartilagem costal.' },
      { name: 'Costelas Falsas (8ª a 10ª)', description: 'Pares que se conectam indiretamente ao esterno unindo-se à cartilagem da 7ª costela.' },
      { name: 'Costelas Flutuantes (11ª e 12ª)', description: 'Pares de costelas com extremidades anteriores livres, sem fixação esternal.' },
      { name: 'Vértebras Torácicas (T1-T12)', description: 'Vértebras articuladas com as costelas, caracterizadas por processos espinhosos inclinados.' },
      { name: 'Vértebras Lombafes (L1-L5)', description: 'Vértebras volumosas de grande sustentação de carga no segmento inferior do tronco.' },
      { name: 'Sacro', description: 'Estrutura óssea triangular formada pela fusão de 5 vértebras sacrais (S1-S5).' },
      { name: 'Cóccix', description: 'Pequena estrutura terminal articulada composta pela fusão de 3 a 5 vértebras coccígeas.' },
    ],
    muscles: [
      { name: 'Peitoral Maior', origin: 'Metade medial da clavícula, esterno e cartilagens costais 1-6', insertion: 'Crista do tubérculo maior do úmero', action: 'Adução, rotação interna e flexão do braço' },
      { name: 'Peitoral Menor', origin: 'Faces externas das costelas 3ª a 5ª', insertion: 'Processo coracóide da escápula', action: 'Depressão e rotação inferior da escápula; músculo acessório na inspiração' },
      { name: 'Subclávio', origin: '1ª costela e sua cartilagem', insertion: 'Face inferior do terço médio da clavícula', action: 'Estabilização da clavícula e depressão do ombro' },
      { name: 'Serrátil Anterior', origin: 'Faces externas das costelas 1ª a 8ª', insertion: 'Margem medial da face anterior da escápula', action: 'Protração e rotação superior da escápula; fixa a escápula na parede torácica' },
      { name: 'Intercostais Externos', origin: 'Margem inferior das costelas superiores', insertion: 'Margem superior das costelas inferiores', action: 'Elevação das costelas durante a inspiração forçada' },
      { name: 'Intercostais Internos', origin: 'Margem inferior das costelas superiores', insertion: 'Margem superior das costelas inferiores', action: 'Depressão das costelas durante a expiração forçada' },
      { name: 'Diafragma', origin: 'Processo xifóide, cartilagens costais 7-12 e vértebras L1-L3', insertion: 'Centro tendíneo do diafragma', action: 'Principal músculo inspiratório (aumenta o volume vertical do tórax)' },
      { name: 'Reto do Abdômen', origin: 'Sínfise púbica e crista púbica', insertion: 'Cartilagens costais 5-7 e processo xifóide', action: 'Flexão da coluna vertebral e compressão das vísceras abdominais' },
      { name: 'Oblíquo Externo do Abdômen', origin: 'Faces externas das costelas 5ª a 12ª', insertion: 'Crista ilíaca, linha alba e tubérculo púbico', action: 'Flexão, rotação contralateral e inclinação lateral do tronco' },
      { name: 'Oblíquo Interno do Abdômen', origin: 'Fáscia toracolombar e crista ilíaca', insertion: 'Cartilagens costais 10-12 e linha alba', action: 'Flexão, rotação ipsilateral e inclinação lateral do tronco' },
      { name: 'Transverso do Abdômen', origin: 'Cartilagens costais 7-12, fáscia toracolombar e crista ilíaca', insertion: 'Linha alba e crista púbica', action: 'Compressão do conteúdo abdominal e estabilização lombar' },
      { name: 'Eretor da Espinha (Iliocostal, Longuíssimo e Espinal)', origin: 'Crista ilíaca, sacro e processos espinhosos lombares', insertion: 'Costelas e processos transversos/espinhosos torácicos e cervicais', action: 'Extensão e inclinação lateral da coluna vertebral' },
      { name: 'Grande Dorsal (Latíssimo do Dorso)', origin: 'Processos espinhosos de T7-L5, fáscia toracolombar e crista ilíaca', insertion: 'Assoalho do sulco intertubercular do úmero', action: 'Extensão, adução e rotação interna do braço' },
      { name: 'Rombóide Maior e Menor', origin: 'Processos espinhosos de C7 a T5', insertion: 'Margem medial da escápula', action: 'Retração, elevação e rotação inferior da escápula' },
    ],
  },

  membros_superiores: {
    id: 'membros_superiores',
    label: 'Membros Superiores',
    description: 'Cintura escapular, braço, antebraço, pulso e estrutura complexa das mãos.',
    radiologyNotes: 'Pesquisa de fraturas da extremidade distal do rádio, escafóide, luxação acromioclavicular e lesões de tendões em RM e RX.',
    bones: [
      { name: 'Clavícula', description: 'Osso longo sigmóide que conecta o esqueleto axial ao membro superior.' },
      { name: 'Escápula', description: 'Osso plano triangular contendo a cavidade glenóide, acrômio e espinha.' },
      { name: 'Úmero', description: 'Maior osso do membro superior, articulado na cavidade glenóide e no cotovelo.' },
      { name: 'Rádio', description: 'Osso lateral do antebraço, essencial nos movimentos de pronação e supinação.' },
      { name: 'Ulna', description: 'Osso medial do antebraço com o olécrano formando a proeminência do cotovelo.' },
      { name: 'Escafóide', description: 'Osso do carpo situado na fileira proximal (lado radial), susceptível a necrose avascular.' },
      { name: 'Semilunar', description: 'Osso do carpo articulado com o rádio na fileira proximal.' },
      { name: 'Piramidal', description: 'Osso do carpo piramidal na região medial da fileira proximal.' },
      { name: 'Pisiforme', description: 'Pequeno osso sesamóide localizado sobre o osso piramidal.' },
      { name: 'Trapézio', description: 'Osso do carpo na fileira distal articulado com o 1º metacarpal.' },
      { name: 'Trapezóide', description: 'Osso da fileira distal do carpo, articulado com o 2º metacarpal.' },
      { name: 'Capitato', description: 'O maior osso do carpo, localizado centralmente na fileira distal.' },
      { name: 'Hamato', description: 'Osso do carpo caracterizado por um gancho proeminente (hâmulo).' },
      { name: 'Metacarpais (I a V)', description: 'Cinco ossos longos da palma da mão, numerados do polegar ao dedo mínimo.' },
      { name: 'Falanges Proximais (5)', description: 'Primeira fileira de ossos dos dedos das mãos.' },
      { name: 'Falanges Médias (4)', description: 'Ossos intermediários dos dedos II ao V (ausente no polegar).' },
      { name: 'Falanges Distais (5)', description: 'Ossos terminais das pontas dos dedos.' },
    ],
    muscles: [
      { name: 'Deltoide', origin: 'Clavícula, acrômio e espinha da escápula', insertion: 'Tuberosidade deltoidea do úmero', action: 'Abdução principal do braço (além de flexão e extensão)' },
      { name: 'Supraespinal', origin: 'Fossa supraespinal da escápula', insertion: 'Tubérculo maior do úmero', action: 'Início da abdução do braço (0-15°) e estabilização umeral' },
      { name: 'Infraespinal', origin: 'Fossa infraespinal da escápula', insertion: 'Tubérculo maior do úmero', action: 'Rotação externa do braço' },
      { name: 'Redondo Menor', origin: 'Margem lateral da escápula', insertion: 'Tubérculo maior do úmero', action: 'Rotação externa e adução do braço' },
      { name: 'Subescapular', origin: 'Fossa subescapular da escápula', insertion: 'Tubérculo menor do úmero', action: 'Rotação interna do braço' },
      { name: 'Redondo Maior', origin: 'Ângulo inferior da escápula', insertion: 'Crista do tubérculo menor do úmero', action: 'Adução, extensão e rotação interna do braço' },
      { name: 'Coracobraquial', origin: 'Processo coracóide da escápula', insertion: 'Terço médio da face medial do úmero', action: 'Flexão e adução do braço' },
      { name: 'Bíceps Braquial', origin: 'Cabeça longa: tubérculo supraglenoidal; Cabeça curta: processo coracóide', insertion: 'Tuberosidade do rádio e aponeurose bicipital', action: 'Flexão do cotovelo e supinação do antebraço' },
      { name: 'Braquial Anterior', origin: 'Metade distal da face anterior do úmero', insertion: 'Processo coronóide e tuberosidade da ulna', action: 'Flexão do cotovelo em qualquer posição de pronação' },
      { name: 'Tríceps Braquial', origin: 'Cabeça longa: tubérculo infraglenoidal; Cabeças lateral/medial: úmero', insertion: 'Olécrano da ulna', action: 'Extensão principal do cotovelo' },
      { name: 'Pronador Redondo', origin: 'Epicôndilo medial do úmero e processo coronóide', insertion: 'Terço médio da face lateral do rádio', action: 'Pronação e flexão do antebraço' },
      { name: 'Flexor Radial do Carpo', origin: 'Epicôndilo medial do úmero', insertion: 'Base do 2º e 3º metacarpais', action: 'Flexão e abdução do pulso' },
      { name: 'Flexor Ulnar do Carpo', origin: 'Epicôndilo medial e olécrano', insertion: 'Pisiforme, hamato e 5º metacarpal', action: 'Flexão e adução do pulso' },
      { name: 'Flexor Superficial dos Dedos', origin: 'Epicôndilo medial do úmero e rádio', insertion: 'Falanges médias dos dedos II a V', action: 'Flexão das articulações interfalângicas proximais e pulso' },
      { name: 'Flexor Profundo dos Dedos', origin: 'Face anterior e medial da ulna', insertion: 'Bases das falanges distais dos dedos II a V', action: 'Flexão das falanges distais' },
      { name: 'Braquiorradial', origin: 'Crista supraepicondilar lateral do úmero', insertion: 'Processo estilóide do rádio', action: 'Flexão do cotovelo em posição neutra' },
      { name: 'Extensor Radial Longo do Carpo', origin: 'Crista supraepicondilar lateral do úmero', insertion: 'Base do 2º metacarpal', action: 'Extensão e abdução do pulso' },
      { name: 'Extensor dos Dedos', origin: 'Epicôndilo lateral do úmero', insertion: 'Expansões extensoras dos dedos II a V', action: 'Extensão dos dedos e do pulso' },
      { name: 'Extensor Ulnar do Carpo', origin: 'Epicôndilo lateral e margem posterior da ulna', insertion: 'Base do 5º metacarpal', action: 'Extensão e adução do pulso' },
      { name: 'Supinador', origin: 'Epicôndilo lateral e crista do supinador da ulna', insertion: 'Faces anterior e lateral do rádio proximal', action: 'Supinação forte do antebraço' },
    ],
  },

  joelho: {
    id: 'joelho',
    label: 'Membros Inferiores',
    description: 'Cintura pélvica, coxa, articulação complexa do joelho, perna, tornozelo e pé.',
    radiologyNotes: 'Diagnóstico de gonartrose, fraturas de colo femoral/pélvicas, lesões ligamentares (LCA/LCP/Mêniscos) em RM, RX e TC.',
    bones: [
      { name: 'Ilíaco / Osso do Quadril (2)', description: 'Osso plano do quadril formado pela fusão de Ílio, Ísquio e Púbis.' },
      { name: 'Fêmur', description: 'O maior, mais pesado e mais resistente osso do corpo humano.' },
      { name: 'Patela', description: 'Maior osso sesamóide do corpo, contido dentro do tendão quadricipital.' },
      { name: 'Tíbia', description: 'Osso medial e principal elemento de suporte de peso da perna.' },
      { name: 'Fíbula', description: 'Osso lateral fino da perna, importante para inserções musculares e estabilidade do tornozelo.' },
      { name: 'Tálus', description: 'Osso do tarso que se articula com a tíbia e fíbula formando a articulação do tornozelo.' },
      { name: 'Calcâneo', description: 'O maior osso do pé, formando o calcanhar e sustentando o peso sustentado pelo tálus.' },
      { name: 'Navicular', description: 'Osso do tarso medial localizado anterior ao tálus.' },
      { name: 'Cubóide', description: 'Osso lateral do tarso articulado com o calcâneo.' },
      { name: 'Cuneiformes (Medial, Intermédio e Lateral)', description: 'Três ossos em formato de cunha localizados entre o navicular e os metatarsais.' },
      { name: 'Metatarsais (I a V)', description: 'Cinco ossos longos do dorso/planta do pé, numerados do hálux ao dedo mínimo.' },
      { name: 'Falanges Proximais (5)', description: 'Primeira fileira de ossos dos dedos dos pés.' },
      { name: 'Falanges Médias (4)', description: 'Ossos intermediários dos dedos II ao V (ausente no hálux).' },
      { name: 'Falanges Distais (5)', description: 'Ossos terminais das extremidades dos dedos dos pés.' },
    ],
    muscles: [
      { name: 'Glúteo Máximo', origin: 'Ílio posterior, sacro e cóccix', insertion: 'Trato iliotibial e tuberosidade glútea do fêmur', action: 'Extensão forte e rotação lateral da coxa no quadril' },
      { name: 'Glúteo Médio', origin: 'Face externa do ílio', insertion: 'Trocânter maior do fêmur', action: 'Abdução da coxa e estabilização da pelve na marcha' },
      { name: 'Glúteo Mínimo', origin: 'Face externa do ílio (inferior ao médio)', insertion: 'Trocânter maior do fêmur', action: 'Abdução e rotação interna da coxa' },
      { name: 'Tensor da Fáscia Lata', origin: 'Espinha ilíaca ântero-superior', insertion: 'Trato iliotibial (na tíbia lateral)', action: 'Tensiona a fáscia lata, auxilia na abdução e flexão da coxa' },
      { name: 'Iliopsoas (Psoas Maior + Ilíaco)', origin: 'Vértebras T12-L5 e fossa ilíaca', insertion: 'Trocânter menor do fêmur', action: 'Principal flexor da articulação do quadril' },
      { name: 'Sartório', origin: 'Espinha ilíaca ântero-superior', insertion: 'Superfície medial proximal da tíbia (pata de ganso)', action: 'Flexão, abdução e rotação lateral da coxa e flexão do joelho' },
      { name: 'Reto Femoral (Quadríceps)', origin: 'Espinha ilíaca ântero-inferior', insertion: 'Tuberosidade da tíbia via patela', action: 'Extensão do joelho e flexão do quadril' },
      { name: 'Vasto Lateral (Quadríceps)', origin: 'Trocânter maior e linha áspera do fêmur', insertion: 'Tuberosidade da tíbia via patela', action: 'Extensão da articulação do joelho' },
      { name: 'Vasto Medial (Quadríceps)', origin: 'Linha intertrocantérica e linha áspera', insertion: 'Tuberosidade da tíbia via patela', action: 'Extensão do joelho e estabilização patelar' },
      { name: 'Vasto Intermédio (Quadríceps)', origin: 'Faces anterior e lateral do fêmur', insertion: 'Tuberosidade da tíbia via patela', action: 'Extensão da articulação do joelho' },
      { name: 'Bíceps Femoral (Isquiotibial)', origin: 'Cabeça longa: tuberosidade isquiática; Cabeça curta: fêmur', insertion: 'Cabeça da fíbula', action: 'Flexão do joelho e extensão do quadril' },
      { name: 'Semitendíneo (Isquiotibial)', origin: 'Tuberosidade isquiática', insertion: 'Superfície medial da tíbia proximal (pata de ganso)', action: 'Flexão do joelho e extensão do quadril' },
      { name: 'Semimembranoso (Isquiotibial)', origin: 'Tuberosidade isquiática', insertion: 'Côndilo medial da tíbia', action: 'Flexão do joelho e extensão do quadril' },
      { name: 'Gastrocnêmio (Sura)', origin: 'Côndilos medial e lateral do fêmur', insertion: 'Tuber do calcâneo via tendão de Aquiles', action: 'Flexão plantar do tornozelo e flexão do joelho' },
      { name: 'Sóleus (Sura)', origin: 'Cabeça da fíbula e margem medial da tíbia', insertion: 'Tuber do calcâneo via tendão de Aquiles', action: 'Flexão plantar do tornozelo (essencial na postura ereta)' },
      { name: 'Tibial Anterior', origin: 'Côndilo lateral e face lateral da tíbia', insertion: 'Cuneiforme medial e base do 1º metatarsal', action: 'Dorsiflexão e inversão do pé' },
      { name: 'Tibial Posterior', origin: 'Membrana interóssea, tíbia e fíbula', insertion: 'Navicular, cuneiformes e metatarsais II-IV', action: 'Flexão plantar e inversão do pé' },
      { name: 'Fibular Longo', origin: 'Cabeça e dois terços superiores da fíbula', insertion: 'Cuneiforme medial e 1º metatarsal', action: 'Eversão e flexão plantar do pé' },
      { name: 'Fibular Curto', origin: 'Dois terços inferiores da fíbula', insertion: 'Tuberosidade do 5º metatarsal', action: 'Eversão e flexão plantar do pé' },
      { name: 'Extensor Longo dos Dedos', origin: 'Côndilo lateral da tíbia e fíbula', insertion: 'Falanges média e distal dos dedos II a V', action: 'Extensão dos dedos do pé e dorsiflexão' },
    ],
  },
};