'use client';

import { Button } from '@/components/ui/button';
import PageDecorations from '@/components/PageDecorations';

interface PracticeStartScreenProps {
  onNavigate: (screen: string) => void;
}

export default function PracticeStartScreen({ onNavigate }: PracticeStartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        <div className="bg-white rounded-lg border-4 border-black p-12 shadow-lg mb-8">
          <Button
            onClick={() => onNavigate('exercise')}
            className="px-16 py-12 text-3xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            TEKAN AKU UNTUK MEMULAI
          </Button>
        </div>

        {/* Navigation button */}
        <div className="flex justify-start mt-8 ml-4">
          <Button
            onClick={() => onNavigate('howToPlay')}
            className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
          >
            ← SEBELUMNYA
          </Button>
        </div>
      </div>
    </div>
  );
}
