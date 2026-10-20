'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, BookMarked } from 'lucide-react';

interface Termo {
  sigla: string;
  nome: string;
  definicao: string;
  modalidade: string;
}

export default function DicionarioTermoPage() {
  const termos: Termo[] = [
    {
      sigla: 'ALARA',
      nome: 'As Low As Reasonably Achievable',
      definicao: 'Princípio fundamental da radioproteção que determina que as doses de radiação devem ser mantidas tão baixas quanto razoavelmente exequíveis.',
      modalidade: 'Proteção Radiológica',
    },
    {
      sigla: 'HU',
      nome: 'Hounsfield Units (Unidades Hounsfield)',
      definicao: 'Escala quantitativa de atenuação de raios X em Tomografia Computadorizada, onde a água é 0 HU e o ar é -1000 HU.',
      modalidade: 'Tomografia',
    },
    {
      sigla: 'FLAIR',
      nome: 'Fluid Attenuated Inversion Recovery',
      definicao: 'Sequência de Ressonância Magnética que anula o sinal de fluidos livres (como LCR), destacando lesões hiperintensas no SNC.',
      modalidade: 'Ressonância',
    },
    {
      sigla: 'PET',
      nome: 'Positron Emission Tomography',
      definicao: 'Modalidade de imagem molecular que detecta pares de fotões gama de 511 keV resultantes da aniquilação de pósitrons.',
      modalidade: 'Medicina Nuclear',
    },
    {
      sigla: 'IMRT',
      nome: 'Intensity-Modulated Radiation Therapy',
      definicao: 'Técnica de radioterapia que modula a intensidade do feixe de radiação para conformar a dose ao volume do tumor preservando tecidos sadios.',
      modalidade: 'Radioterapia',
    },
  ];

  const [busca, setBusca] = useState('');

  const termosFiltrados = termos.filter(
    (t) =>
      t.sigla.toLowerCase().includes(busca.toLowerCase()) ||
      t.nome.toLowerCase().includes(busca.toLowerCase()) ||
      t.definicao.toLowerCase().includes(busca.toLowerCase()) ||
      t.modalidade.toLowerCase().includes(busca.toLowerCase())
  );

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
            Glossário Radiológico & Siglas
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Dicionário técnico unificado de termos em TC, RM, Medicina Nuclear e Radioterapia
          </p>
        </header>

        {/* Campo de Busca */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por sigla, nome ou palavra-chave..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
          />
        </div>

        {/* Lista de Termos */}
        <div className="space-y-4">
          {termosFiltrados.length === 0 ? (
            <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-xs text-slate-500">
              Nenhum termo encontrado para a busca.
            </div>
          ) : (
            termosFiltrados.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-2">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-base text-blue-600">{item.sigla}</span>
                    <span className="text-xs text-slate-500">• {item.nome}</span>
                  </div>
                  <span className="text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded">
                    {item.modalidade}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{item.definicao}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}