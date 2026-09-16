'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const [lang, setLang] = useState<'PT' | 'EN' | 'ES'>('PT');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'PT', label: 'Português' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-2 py-1 rounded border border-slate-200 bg-white hover:border-slate-300 transition"
        aria-label="Selecionar Idioma"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500" />
        <span>{lang}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded shadow-sm py-1 z-50">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLang(item.code as 'PT' | 'EN' | 'ES');
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 text-xs font-medium transition ${
                lang === item.code ? 'bg-slate-50 text-sky-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}