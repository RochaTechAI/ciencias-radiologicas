import Link from 'next/link';
import { ArrowLeft, BookOpen, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function BibliotecaTecnicaPage() {
  const resumos = [
    {
      titulo: 'Física da Produção de Raios X',
      icone: Zap,
      topicos: [
        'Radiação de Freamento (Bremsstrahlung): Interação do elétron com o campo elétrico do núcleo do anodo.',
        'Radiação Característica: Transição eletrônica entre camadas de energia do tungstênio (K, L, M).',
        'Efeito da Filtração: Remoção de fotões de baixa energia para reduzir dose na pele do paciente.',
      ],
    },
    {
      titulo: 'Diretrizes CNEN-NN-3.01 & Dosimetria',
      icone: ShieldCheck,
      topicos: [
        'Limite de Dose IOE: 20 mSv/ano (média em 5 anos), teto de 50 mSv em ano único.',
        'Limite de Dose Público: 1 mSv/ano.',
        'Monitoração Individual: Dosímetro dobras de tórax (leitura mensal TLD/OSL).',
      ],
    },
    {
      titulo: 'Sequências de Pulso em Ressonância Magnética',
      icone: Activity,
      topicos: [
        'Spin Echo (SE): Pulso de 90° + pulso de 180° para redefasamento de spins.',
        'Gradient Echo (GRE): Ângulo de inclinação parcial (Flip Angle < 90°), ideal para rapidez e suscetibilidade.',
        'Diffusion Weighted Imaging (DWI): Medição do movimento browniano de moléculas de água.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="border-b border-slate-200 pb-6">
          <Link 
            href="/estudos" 
            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Central de Estudos
          </Link>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Biblioteca Técnica & Resumos
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Guias de referência rápida, equações e tabelas de parâmetros
          </p>
        </header>

        <div className="space-y-6">
          {resumos.map((resumo, idx) => {
            const Icone = resumo.icone;
            return (
              <section key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <Icone className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">{resumo.titulo}</h2>
                </div>

                <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                  {resumo.topicos.map((topico, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-bold text-blue-600">•</span>
                      <span>{topico}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}