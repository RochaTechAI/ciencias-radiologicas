'use client';

import Link from 'next/link';
import { Globe, Search } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [lang, setLang] = useState<'PT' | 'EN' | 'ES'>('PT');

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Artigos & Notícias', href: '#artigos' },
    { label: 'Área de Estudos', href: '#estudos' },
    { label: 'Tomografia', href: '#tomografia' },
    { label: 'Ressonância', href: '#ressonancia' },
    { label: 'Ultrassonografia', href: '#ultrassonografia' },
    { label: 'Medicina Nuclear', href: '#medicina-nuclear' },
  ];

  return (
    <header className="w-full bg-white font-sans border-b border-gray-100">
      {/* Topbar Escura Minimalista */}
      <div className="bg-[#111827] text-white py-1.5 px-6 text-xs flex justify-between items-center">
        <span className="text-gray-400 font-medium">cienciasradiologicas.com</span>
        
        <div className="flex items-center gap-1 cursor-pointer text-gray-300 hover:text-white">
          <Globe className="w-3.5 h-3.5" />
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value as 'PT' | 'EN' | 'ES')}
            className="bg-transparent text-xs text-gray-300 focus:outline-none cursor-pointer"
          >
            <option value="PT" className="text-black">PT-BR</option>
            <option value="EN" className="text-black">EN-US</option>
            <option value="ES" className="text-black">ES-ES</option>
          </select>
        </div>
      </div>

      {/* Header Principal */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-bold text-xs text-slate-900">
            CR
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
              Ciências Radiológicas
            </h1>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide">
              INCENTIVANDO O CONHECIMENTO CIENTÍFICO
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar no blog ou estudos..."
              className="pl-8 pr-4 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-full w-56 focus:outline-none focus:border-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <Link
            href="/studio"
            className="bg-[#0A192F] text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-slate-800 transition"
          >
            Painel Admin
          </Link>
        </div>
      </div>

      {/* Menu Pílula Cinza (Igual ao Futurecom) */}
      <div className="max-w-7xl mx-auto px-6 pb-4">
        <nav className="bg-[#EAECEF] rounded-lg px-4 py-2 flex items-center gap-6 text-xs font-medium text-slate-700 overflow-x-auto">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-black whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}