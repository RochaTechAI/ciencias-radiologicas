import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Chave GEMINI_API_KEY não configurada no .env.local.' },
        { status: 500 }
      );
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction:
          'Você é um Tutor Virtual de Anatomia e Radiologia Médica do portal Ciências Radiológicas. Responda com precisão científica e sem emojis.',
      },
    });

    return NextResponse.json({ response: response.text });
  } catch (error: any) {
    console.error('Erro na API do Chat:', error);
    return NextResponse.json(
      { error: error?.message || 'Falha ao processar resposta da IA.' },
      { status: 500 }
    );
  }
}