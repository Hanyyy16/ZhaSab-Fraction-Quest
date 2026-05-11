'use client';

import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface ConceptSlide1ScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ConceptSlide1Screen({ onNavigate }: ConceptSlide1ScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        <h2 className="text-5xl font-bold text-amber-700 mb-12 drop-shadow-lg" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
          KONSEP PERKALIAN PECAHAN
        </h2>

        {/* White explanation box */}
        <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          <p className="text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
            Keterangan:
          </p>
          <div className="mb-6">
            <FractionDisplay numerator="a" denominator="b" className="scale-150 mb-2" />
          </div>
          <p className="text-xl text-gray-600 mb-6">
            a = pembilang dan b = penyebut
          </p>
          <div className="border-t-2 border-gray-300 pt-6">
            <p className="text-2xl font-bold text-gray-800 mb-6">
              <FractionDisplay numerator="a" denominator="b" className="scale-125 inline-block mr-3" /> 
              × 
              <FractionDisplay numerator="a" denominator="b" className="scale-125 inline-block ml-3" />
            </p>
            <p className="text-xl text-gray-700 font-semibold">
              a × a<br/>b × b
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-12 max-w-2xl mx-auto">
          <Button
            onClick={() => onNavigate('multipleChoice')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            ← SEBELUMNYA
          </Button>
          <Button
            onClick={() => onNavigate('conceptSlide2')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            SELANJUTNYA →
          </Button>
        </div>
      </div>
    </div>
  );
}
