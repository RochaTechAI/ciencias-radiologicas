'use client';

import { useState, useRef, useEffect } from 'react';

interface AnatomyChatProps {
  moduleContext?: string;
  title?: string;
}

export default function AnatomyChat({
  moduleContext = 'Anatomia e Radiologia Geral',
  title = 'Allan IA - Especialista em Radiologia',
}: AnatomyChatProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          context: moduleContext,
        }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Erro ao obter resposta do especialista.' },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erro de conexão com o servidor.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white shadow-lg">
      <div className="border-b border-slate-800 pb-3 mb-4">
        <h2 className="text-lg font-bold text-sky-400">{title}</h2>
        <p className="text-xs text-slate-400">Módulo ativo: {moduleContext}</p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 min-h-[350px] max-h-[450px]">
        {messages.length === 0 && (
          <div className="p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
            <p className="text-slate-300 text-sm">
              Olá! Sou o <strong>Allan IA</strong>, seu tutor virtual. Como posso ajudar em seus estudos de <strong>{moduleContext}</strong> hoje?
            </p>
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-sky-600 text-white ml-auto max-w-[85%]'
                : 'bg-slate-800 text-slate-200 mr-auto max-w-[90%] whitespace-pre-wrap border border-slate-700'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && (
          <div className="bg-slate-800/50 p-3 rounded-lg mr-auto max-w-[80%] border border-slate-700">
            <p className="text-sky-400 text-xs animate-pulse font-medium">
              Allan IA está analisando com rigor científico...
            </p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={`Pergunte ao Allan IA sobre ${moduleContext}...`}
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-sky-600 hover:bg-sky-500 text-white text-sm px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}