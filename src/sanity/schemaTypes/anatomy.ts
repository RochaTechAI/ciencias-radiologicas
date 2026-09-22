import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: message,
      config: {
        systemInstruction: `Você é um Tutor Virtual de Anatomia e Radiologia Médica do portal Ciências Radiológicas. 
        Sua missão é responder dúvidas com precisão científica, linguagem clara e objetiva para estudantes e profissionais de saúde.
        Não use emojis nas respostas.`
      }
    });

    return NextResponse.json({ response: response.text });
  } catch (error) {
    console.error('Erro na API do Chat:', error);
    return NextResponse.json({ error: 'Falha ao processar resposta da IA.' }, { status: 500 });
  }
}