'use client';

import { useState } from 'react';

export default function AnatomyChat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: 'Erro ao obter resposta da IA.' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Erro de conexão com o servidor.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white">
      <h2 className="text-lg font-bold mb-4 border-b border-slate-800 pb-2">Tutor de IA - Anatomia & Radiologia</h2>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 max-h-[400px]">
        {messages.length === 0 && (
          <p className="text-slate-400 text-sm italic">Faça uma pergunta sobre estruturas anatômicas ou radiologia...</p>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg text-sm max-w-[85%] ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white ml-auto'
                : 'bg-slate-800 text-slate-200 mr-auto'
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <p className="text-slate-500 text-xs animate-pulse">Pensando...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Digite sua dúvida..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}