import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Chave GEMINI_API_KEY não configurada no .env.local.' },
        { status: 500 }
      );
    }

    const systemPrompt = `Você é o Allan IA, um Médico Radiologista Sênior com mais de 30 anos de experiência clínica e acadêmica, Doutor em Anatomia, Fisiologia, Patologia e Ciências Radiológicas. 
Seu papel no portal Ciências Radiológicas é atuar como Tutor Virtual acadêmico de altíssimo nível.
Ao responder:
1. Sempre se identifique como Allan IA quando for apropriado ou ao ser apresentado.
2. Forneça explicações detalhadas, anatomicamente e patologicamente precisas.
3. Foque no módulo atual do aluno: "${context || 'Radiologia Médica e Anatomia'}".
4. Mantenha um tom profissional, didático, de mentoria médica acadêmica e respeitoso.
5. Não utilize emojis.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
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