'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, RotateCw, ChevronLeft, ChevronRight, BrainCircuit } from 'lucide-react';

interface Flashcard {
  id: number;
  categoria: string;
  pergunta: string;
  resposta: string;
  dica?: string;
}

export default function FlashcardsPage() {
  const cards: Flashcard[] = [
    {
      id: 1,
      categoria: 'Física das Radiações',
      pergunta: 'Qual a diferença principal entre o Efeito Fotoelétrico e o Espalhamento Compton?',
      resposta: 'No Efeito Fotoelétrico, o fotão incidente é totalmente absorvido por um elétron interno (predomina em baixas energias e alto Z). No Espalhamento Compton, o fotão de alta energia colide com um elétron externo, é espalhado com menor energia e gera radiação secundária.',
      dica: 'Pense em Absorção Total vs. Espalhamento com Perda Parcial de Energia.',
    },
    {
      id: 2,
      categoria: 'Ressonância Magnética',
      pergunta: 'O que define o Tempo de Inversão (TI) em uma sequência STIR?',
      resposta: 'O TI na sequência STIR (Short Tau Inversion Recovery) é calibrado exatamente no ponto de nulo do T1 da gordura (aproximadamente 150-180 ms em 1.5T), promovendo a supressão total do sinal do tecido adiposo.',
      dica: 'O foco é anular a gordura, diferentemente do FLAIR que anula o LCR.',
    },
    {
      id: 3,
      categoria: 'Proteção Radiológica',
      pergunta: 'Quais são as três regras fundamentais da Proteção Radiológica em Radiodiagnóstico?',
      resposta: '1. Tempo: Minimizar o tempo de exposição.\n2. Distância: Maximizar a distância da fonte (Lei do Inverso do Quadrado da Distância).\n3. Blindagem: Utilizar barreiras físicas (Avental de chumbo, biombos plumbíferos).',
      dica: 'Lembre-se do trio: Tempo, Distância e Blindagem.',
    },
    {
      id: 4,
      categoria: 'Medicina Nuclear',
      pergunta: 'Qual a energia da fotoemissão gama do Tecnécio-99m (99mTc) e sua meia-vida física?',
      resposta: 'O Tecnécio-99m emite radiação gama pura com energia de 140 keV e possui uma meia-vida física (T 1/2) de aproximadamente 6,0 horas.',
      dica: 'Isótopo padrão para Gama Câmaras / SPECT.',
    },
    {
      id: 5,
      categoria: 'Tomografia Computadorizada',
      pergunta: 'O que é e como é calculated o Pitch em TC Multislice?',
      resposta: 'Pitch é a razão entre o deslocamento da mesa por rotação de 360° do gantry e a colimação total do feixe de raios X. Pitch = 1 indica avanço contínuo sem lacunas; Pitch > 1 reduz dose e tempo de exame.',
      dica: 'Pitch = Deslocamento da Mesa / Colimação do Feixe.',
    },
  ];

  const [indexAtual, setIndexAtual] = useState(0);
  const [virado, setVirado] = useState(false);

  const card = cards[indexAtual];

  const proximo = () => {
    setVirado(false);
    setIndexAtual((prev) => (prev + 1) % cards.length);
  };

  const anterior = () => {
    setVirado(false);
    setIndexAtual((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center justify-between border-b border-slate-200 pb-6">
          <div>
            <Link 
              href="/estudos" 
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Voltar para Central de Estudos
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Flashcards de Memorização Ativa
            </h1>
            <p className="text-xs text-slate-600 mt-1">
              Repetição espaçada para anatomia, física e protocolos
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full border border-purple-200">
            Card {indexAtual + 1} de {cards.length}
          </span>
        </header>

        {/* Cartão Interativo */}
        <div className="perspective-1000">
          <div 
            onClick={() => setVirado(!virado)}
            className={`min-h-[320px] w-full bg-white border-2 rounded-2xl p-8 shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between ${
              virado ? 'border-purple-500 bg-purple-50/30' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                {card.categoria}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" /> Clique para virar
              </span>
            </div>

            <div className="my-6 text-center space-y-3">
              {!virado ? (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Pergunta</span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                    {card.pergunta}
                  </h2>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">Resposta Detalhada</span>
                  <p className="text-base text-slate-800 leading-relaxed font-medium whitespace-pre-wrap">
                    {card.resposta}
                  </p>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-500 border-t border-slate-100 pt-4 flex items-center justify-between">
              <span>{virado ? '✓ Dica retida' : `💡 Dica: ${card.dica || 'Pense nos fundamentos'}`}</span>
              <span className="font-semibold text-purple-600">{virado ? 'Frente/Verso' : 'Clique para ver a resposta'}</span>
            </div>
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="flex items-center justify-between pt-4">
          <button
            onClick={anterior}
            className="flex items-center gap-1 text-xs bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" /> Anterior
          </button>

          <button
            onClick={() => setVirado(!virado)}
            className="flex items-center gap-2 text-xs bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2.5 rounded-xl transition shadow"
          >
            <BrainCircuit className="w-4 h-4" /> {virado ? 'Ver Pergunta' : 'Ver Resposta'}
          </button>

          <button
            onClick={proximo}
            className="flex items-center gap-1 text-xs bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold px-4 py-2.5 rounded-xl transition shadow-sm"
          >
            Próximo <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}