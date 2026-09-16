import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ciências Radiológicas | Incentivando o Conhecimento Científico',
  description: 'Notícias da saúde, artigos de radiologia e casos clínicos comentados.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-slate-900 min-h-screen flex flex-col antialiased`}>
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="bg-slate-900 text-slate-400 text-center py-6 border-t border-slate-800 text-xs mt-12">
          <p>© {new Date().getFullYear()} cienciasradiologicas.com — Incentivando o Conhecimento Científico.</p>
        </footer>
      </body>
    </html>
  );
}