'use client';

import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface FractionConceptScreenProps {
  onNavigate: (screen: string) => void;
}

export default function FractionConceptScreen({ onNavigate }: FractionConceptScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        {'❤️❤️❤️❤️❤️'}
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-700 mb-8 drop-shadow-lg" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
          KONSEP PERKALIAN PECAHAN
        </h2>

        {/* White explanation box */}
        <div className="bg-white rounded-lg border-4 border-black p-6 md:p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          {/* Fraction notation explanation */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Bentuk Pecahan:
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <FractionDisplay numerator="a" denominator="b" size="lg" color="#E52521" />
              <span className="text-xl text-gray-600">=</span>
              <div className="text-left">
                <p className="text-lg text-gray-700"><span className="font-bold text-red-600">a</span> = pembilang (atas)</p>
                <p className="text-lg text-gray-700"><span className="font-bold text-red-600">b</span> = penyebut (bawah)</p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 pt-6 mb-6">
            <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Cara Mengalikan Pecahan:
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-4">
              <FractionDisplay numerator="a" denominator="b" size="md" />
              <span className="text-2xl font-bold text-amber-600">x</span>
              <FractionDisplay numerator="c" denominator="d" size="md" />
              <span className="text-2xl font-bold text-gray-600">=</span>
              <FractionDisplay numerator="a x c" denominator="b x d" size="md" />
            </div>
            <p className="text-lg text-gray-600 italic">
              Kalikan pembilang dengan pembilang,<br/>
              penyebut dengan penyebut
            </p>
          </div>

          {/* Example */}
          <div className="border-t-2 border-gray-300 pt-6 bg-amber-50 rounded-lg p-4">
            <p className="text-xl font-bold text-amber-700 mb-4">
              Contoh:
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <FractionDisplay numerator="1" denominator="2" size="md" color="#2563eb" />
              <span className="text-2xl font-bold text-amber-600">x</span>
              <FractionDisplay numerator="3" denominator="4" size="md" color="#2563eb" />
              <span className="text-2xl font-bold text-gray-600">=</span>
              <FractionDisplay numerator="1 x 3" denominator="2 x 4" size="md" color="#16a34a" />
              <span className="text-2xl font-bold text-gray-600">=</span>
              <FractionDisplay numerator="3" denominator="8" size="md" color="#dc2626" />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 max-w-2xl mx-auto">
          <Button
            onClick={() => onNavigate('howToPlay')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            ← SEBELUMNYA
          </Button>
          <Button
            onClick={() => onNavigate('understanding')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            SELANJUTNYA →
          </Button>
        </div>
      </div>
    </div>
  );
}
