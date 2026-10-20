'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, XCircle, HelpCircle, ArrowLeft, RefreshCw } from 'lucide-react';

interface Questao {
  id: number;
  banca: string;
  ano: string;
  area: string;
  enunciado: string;
  opcoes: string[];
  respostaCorreta: number;
  explicacao: string;
}

export default function SimuladosPage() {
  const questoes: Questao[] = [
    {
      id: 1,
      banca: 'EBSERH / VUNESP',
      ano: '2024',
      area: 'Proteção Radiológica',
      enunciado: 'Segundo a norma CNEN-NN-3.01 (Diretrizes Básicas de Proteção Radiológica), o limite de dose efetiva anual para Indivíduos Ocupacionalmente Expostos (IOE) em atividades normais é de:',
      opcoes: [
        'A) 1 mSv por ano.',
        'B) 20 mSv por ano, média aritmética em 5 anos consecutivos, não excedendo 50 mSv em um único ano.',
        'C) 50 mSv por ano sem restrições em anos subsequentes.',
        'D) 5 mSv por ano para estagiários acima de 18 anos.',
        'E) 100 mSv a cada 2 anos.',
      ],
      respostaCorreta: 1, // B
      explicacao: 'Conforme a CNEN-NN-3.01, para trabalhadores (IOE), o limite de dose efetiva é de 20 mSv/ano (média em 5 anos), com o teto de 50 mSv em qualquer ano isolado. Para o público geral, o limite é de 1 mSv/ano.',
    },
    {
      id: 2,
      banca: 'Residência Médica / Unifesp',
      ano: '2023',
      area: 'Ressonância Magnética',
      enunciado: 'Em exames de Ressonância Magnética do Encéfalo, a sequência FLAIR (Fluid Attenuated Inversion Recovery) caracteriza-se por:',
      opcoes: [
        'A) Potencializar o sinal de gordura e anular o osso cortical.',
        'B) Suprimir o sinal do Líquido Cefalorraquidiano (LCR) livre, facilitando a identificação de lesões hiperintensas periventriculares.',
        'C) Apresentar tempo de inversão (TI) ultracurto para realce de cálcio.',
        'D) Utilizar gradientes de difusão de alta intensidade para avaliar AVC hiperagudo.',
        'E) Anular o sinal da substância branca cerebral.',
      ],
      respostaCorreta: 1, // B
      explicacao: 'A sequência FLAIR utiliza um Tempo de Inversão (TI ~ 2000-2500ms) calibrado para anular o sinal do LCR puro (fisiológico), tornando-o escuro e destacando edemas, placas de desmielinização (ex: Esclerose Múltipla) e glioses que aparecem brilhantes.',
    },
    {
      id: 3,
      banca: 'Concurso Perito / Polícia Científica',
      ano: '2023',
      area: 'Tomografia Computadorizada',
      enunciado: 'Na escala de Unidades Hounsfield (HU) utilizada em Tomografia Computadorizada, os valores aproximados para o ar atmosférico, água pura e osso compacto são, respectivamente:',
      opcoes: [
        'A) 0 HU, -1000 HU e +100 HU',
        'B) -1000 HU, 0 HU e +1000 HU (ou mais)',
        'C) -500 HU, +50 HU e +500 HU',
        'D) -100 HU, 0 HU e +2000 HU',
        'E) 0 HU, +100 HU e +1000 HU',
      ],
      respostaCorreta: 1, // B
      explicacao: 'A escala HU é calibrada com base no coeficiente de atenuação linear da água (0 HU) e do ar (-1000 HU). Tecidos densos como o osso cortical variam de +700 HU a +2000 HU.',
    },
  ];

  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [revelados, setRevelados] = useState<Record<number, boolean>>({});

  const selecionarOpcao = (questaoId: number, opcaoIdx: number) => {
    if (revelados[questaoId]) return;
    setRespostas((prev) => ({ ...prev, [questaoId]: opcaoIdx }));
  };

  const verificarResposta = (questaoId: number) => {
    setRevelados((prev) => ({ ...prev, [questaoId]: true }));
  };

  const reiniciarSimulado = () => {
    setRespostas({});
    setRevelados({});
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-6">
          <div>
            <Link 
              href="/estudos" 
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Central de Estudos
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Simulado de Questões Comentadas
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              Testes práticos direcionados para EBSERH, concursos públicos e residências
            </p>
          </div>

          <button
            onClick={reiniciarSimulado}
            className="flex items-center gap-1.5 text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-2 rounded-lg font-semibold transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reiniciar Simulado
          </button>
        </header>

        <div className="space-y-6">
          {questoes.map((q) => {
            const respondido = respostas[q.id] !== undefined;
            const revelado = revelados[q.id];
            const acertou = respostas[q.id] === q.respostaCorreta;

            return (
              <article 
                key={q.id} 
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded">
                      {q.banca} ({q.ano})
                    </span>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-0.5 rounded">
                      {q.area}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">Questão #{q.id}</span>
                </div>

                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  {q.enunciado}
                </p>

                <div className="space-y-2">
                  {q.opcoes.map((opcao, idx) => {
                    const selecionada = respostas[q.id] === idx;
                    const eCorreta = q.respostaCorreta === idx;

                    let estiloOpcao = 'border-slate-200 hover:border-slate-300 bg-slate-50';

                    if (selecionada && !revelado) {
                      estiloOpcao = 'border-blue-500 bg-blue-50 text-blue-900 font-semibold';
                    }

                    if (revelado) {
                      if (eCorreta) {
                        estiloOpcao = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                      } else if (selecionada && !eCorreta) {
                        estiloOpcao = 'border-red-500 bg-red-50 text-red-900';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => selecionarOpcao(q.id, idx)}
                        disabled={revelado}
                        className={`w-full text-left p-3 text-xs rounded-xl border transition-all flex items-center justify-between ${estiloOpcao}`}
                      >
                        <span>{opcao}</span>
                        {revelado && eCorreta && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {revelado && selecionada && !eCorreta && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {respondido && !revelado && (
                  <button
                    onClick={() => verificarResposta(q.id)}
                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-lg transition"
                  >
                    Conferir Gabarito
                  </button>
                )}

                {revelado && (
                  <div className={`p-4 rounded-xl text-xs space-y-1.5 ${acertou ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-slate-100 border border-slate-200 text-slate-800'}`}>
                    <div className="flex items-center gap-1.5 font-bold">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      Comentário do Gabarito:
                    </div>
                    <p className="leading-relaxed">{q.explicacao}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}