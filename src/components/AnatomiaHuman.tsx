'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

interface AnatomicalCanvasProps {
  onSelectRegion: (id: string) => void;
  selectedRegion: string | null;
  activeSystem: 'myology' | 'arthrology';
  onSystemChange: (system: 'myology' | 'arthrology') => void;
}

// Componente que carrega dinamicamente o modelo com base no sistema ativo
function DynamicAnatomyModel({ system }: { system: 'myology' | 'arthrology' }) {
  const modelPath = `/models/${system}.glb`;
  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      object={scene}
      scale={1.0}
      position={[0, -1.0, 0]}
    />
  );
}

export default function AnatomicalHuman({
  onSelectRegion,
  selectedRegion,
  activeSystem = 'myology', // <-- Define valor padrão para evitar undefined
  onSystemChange,
}: AnatomicalCanvasProps) {
  return (
    <div className="w-full h-[600px] bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-sm">
      
      {/* Botões no topo para alternar entre os sistemas */}
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-slate-200 shadow-sm">
        <button
          onClick={() => onSystemChange('myology')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
            activeSystem === 'myology'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Sistema Muscular
        </button>
        <button
          onClick={() => onSystemChange('arthrology')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
            activeSystem === 'arthrology'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Sistema Ósseo / Articular
        </button>
      </div>

      {/* Dica de utilização */}
      <div className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 text-[11px] font-medium">
        💡 Arraste com o mouse para girar e use o scroll para aproximar
      </div>

      <Canvas camera={{ position: [0, 0.4, 3.2], fov: 45 }}>
        <color attach="background" args={['#f8fafc']} />

        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 10, 7]} intensity={1.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />

        <Suspense
          fallback={
            <Html center>
              <div className="text-xs text-slate-600 font-medium bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                Carregando modelo anatômico...
              </div>
            </Html>
          }
        >
          <DynamicAnatomyModel system={activeSystem} />
        </Suspense>

        <OrbitControls enablePan={true} minDistance={1.0} maxDistance={5} target={[0, 0, 0]} />
      </Canvas>

      {/* Barra de seleção rápida de regiões na base */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between px-6 text-xs text-slate-600 font-medium">
        <span>Região Anatômica em Foco:</span>
        <div className="flex gap-2">
          <button
            onClick={() => onSelectRegion('cranio')}
            className={`px-3 py-1 rounded-md transition ${
              selectedRegion === 'cranio'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Cabeça & Pescoço
          </button>
          <button
            onClick={() => onSelectRegion('torax')}
            className={`px-3 py-1 rounded-md transition ${
              selectedRegion === 'torax'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Tórax & Coluna
          </button>
          <button
            onClick={() => onSelectRegion('membros_superiores')}
            className={`px-3 py-1 rounded-md transition ${
              selectedRegion === 'membros_superiores'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Membros Superiores
          </button>
          <button
            onClick={() => onSelectRegion('joelho')}
            className={`px-3 py-1 rounded-md transition ${
              selectedRegion === 'joelho'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Membros Inferiores
          </button>
        </div>
      </div>
    </div>
  );
}

// Pré-carregamento dos modelos
useGLTF.preload('/models/myology.glb');
useGLTF.preload('/models/arthrology.glb');