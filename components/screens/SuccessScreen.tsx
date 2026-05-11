'use client';

import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface SuccessScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SuccessScreen({ onNavigate }: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        <h1 className="text-7xl font-bold text-amber-700 mb-12 drop-shadow-lg animate-bounce" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
          HORE KAMU BENAR!
        </h1>

        {/* Answer box */}
        <div className="bg-white rounded-lg border-4 border-black p-12 shadow-lg mb-8 mx-auto max-w-2xl">
          <div className="flex justify-center">
            <FractionDisplay numerator="1" denominator="6" className="scale-200" />
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => onNavigate('home')}
            className="px-12 py-8 text-2xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            KEMBALI KE HOME
          </Button>
        </div>
      </div>
    </div>
  );
}
