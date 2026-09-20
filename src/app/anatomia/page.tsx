'use client';

import React, { useState } from 'react';
import AnatomicalHuman from '@/components/AnatomiaHuman';
import { ANATOMY_DATA } from '@/data/anatomyData';

export default function AnatomiaPage() {
  const [activeSystem, setActiveSystem] = useState<'myology' | 'arthrology'>('myology');
  const [selectedRegion, setSelectedRegion] = useState<string>('cranio');

  const currentData = ANATOMY_DATA[selectedRegion] || ANATOMY_DATA['cranio'];

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <AnatomicalHuman
        onSelectRegion={setSelectedRegion}
        selectedRegion={selectedRegion}
        activeSystem={activeSystem}
        onSystemChange={setActiveSystem}
      />

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {activeSystem === 'arthrology' ? 'Sistema Esquelético / Articular' : 'Sistema Muscular'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">{currentData.label}</h2>
            <p className="text-sm text-slate-500 mt-1">{currentData.description}</p>
          </div>
        </div>

        {activeSystem === 'arthrology' ? (
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              Estruturas Ósseas ({currentData.bones.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {currentData.bones.map((bone, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition">
                  <p className="font-semibold text-slate-800 text-sm">{bone.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{bone.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
              Musculatura, Origens e Inserções ({currentData.muscles.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentData.muscles.map((muscle, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <p className="font-bold text-blue-900 text-sm">{muscle.name}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-slate-700 block">Origem:</span>
                      <span className="text-slate-500">{muscle.origin}</span>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-100">
                      <span className="font-semibold text-slate-700 block">Inserção:</span>
                      <span className="text-slate-500">{muscle.insertion}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 pt-1">
                    <span className="font-semibold">Ação:</span> {muscle.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-4 text-xs text-blue-900">
          <span className="font-bold block mb-1">Aplicações em Radiologia & Imagem:</span>
          {currentData.radiologyNotes}
        </div>
      </div>
    </main>
  );
}