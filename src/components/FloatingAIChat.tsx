'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, X } from 'lucide-react';
import AnatomyChat from './AnatomyChat';

// Dicionário de contextos dinâmicos por rota (Convenção Next.js App Router)
const ROUTE_CONTEXTS: Record<string, { context: string; title: string }> = {
  '/anatomia': { context: 'Anatomia Humana 3D', title: 'Allan IA - Anatomia' },
  '/tomografia': { context: 'Tomografia Computadorizada (TC)', title: 'Allan IA - Especialista em TC' },
  '/ressonancia': { context: 'Ressonância Magnética (RM)', title: 'Allan IA - Especialista em RM' },
  '/radioterapia': { context: 'Radioterapia e Radiobiologia', title: 'Allan IA - Especialista em Radioterapia' },
  '/medicina-nuclear': { context: 'Medicina Nuclear e PET-CT', title: 'Allan IA - Especialista em Medicina Nuclear' },
};

export function FloatingAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Mapeia o contexto da página atual com fallback para o geral
  const currentModule = ROUTE_CONTEXTS[pathname] || {
    context: 'Ciências Radiológicas e Anatomia',
    title: 'Allan IA - Especialista em Radiologia',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Container Flutuante do Chat */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[420px] h-[520px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
          <div className="flex items-center justify-between bg-slate-950 px-4 py-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-sky-400">
              Tutor Virtual de IA
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
              title="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden">
            <AnatomyChat
              key={pathname}
              moduleContext={currentModule.context}
              title={currentModule.title}
            />
          </div>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all flex items-center justify-center group"
        title="Abrir Allan IA"
      >
        <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}