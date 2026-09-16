'use client';

import { useState } from 'react';

export interface MedicalCase {
  _id: string;
  title: string;
  modality: string;
  patientHistory: string;
  imageUrl: string;
  findings: string;
  diagnosis: string;
}

export function CaseCard({ item }: { item: MedicalCase }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded">
          {item.modality}
        </span>
        <span className="text-[10px] text-gray-400 font-medium">Caso Prático</span>
      </div>

      <h4 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed">{item.patientHistory}</p>

      {item.imageUrl && (
        <div className="w-full h-40 bg-gray-100 rounded overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="w-full text-xs bg-slate-900 hover:bg-slate-800 text-white font-medium py-1.5 rounded transition"
      >
        {showAnswer ? 'Ocultar Diagnóstico' : 'Ver Achados e Diagnóstico'}
      </button>

      {showAnswer && (
        <div className="pt-2 border-t border-gray-100 space-y-1 text-xs">
          <p className="text-slate-700">
            <strong>Achados:</strong> {item.findings}
          </p>
          <p className="text-emerald-700 font-semibold">
            <strong>Diagnóstico:</strong> {item.diagnosis}
          </p>
        </div>
      )}
    </div>
  );
}