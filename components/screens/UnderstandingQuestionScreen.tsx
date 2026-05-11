'use client';

import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface UnderstandingQuestionScreenProps {
  onNavigate: (screen: string) => void;
}

export default function UnderstandingQuestionScreen({ onNavigate }: UnderstandingQuestionScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        {/* White box with question */}
        <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          <p className="text-2xl font-bold text-gray-800 leading-relaxed">
            UNTUK MEMBUAT 1 KUE
          </p>
          <p className="text-2xl font-bold text-gray-800 leading-relaxed flex items-center justify-center gap-2 my-2">
            DIBUTUHKAN <FractionDisplay numerator="1" denominator="2" className="mx-1" /> KG TEPUNG.
          </p>
          <br/>
          <p className="text-2xl font-bold text-gray-800 leading-relaxed flex items-center justify-center gap-2 my-2">
            JIKA MEMBUAT <FractionDisplay numerator="3" denominator="4" className="mx-1" /> RESEP,
          </p>
          <p className="text-2xl font-bold text-gray-800 leading-relaxed">
            BERAPA TEPUNG YANG<br/>DIBUTUHKAN?
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-12 max-w-2xl mx-auto px-4">
          <Button
            onClick={() => onNavigate('fractionConcept')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            ← SEBELUMNYA
          </Button>
          <Button
            onClick={() => onNavigate('multipleChoice')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            SELANJUTNYA →
          </Button>
        </div>
      </div>
    </div>
  );
}
