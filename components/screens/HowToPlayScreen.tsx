'use client';

import { Button } from '@/components/ui/button';
import PageDecorations from '@/components/PageDecorations';

interface HowToPlayScreenProps {
  onNavigate: (screen: string) => void;
}

export default function HowToPlayScreen({ onNavigate }: HowToPlayScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10">
        <h1 className="text-6xl font-bold text-amber-700 mb-20 drop-shadow-lg" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
          BAGAIMANA CARA BERMAIN?
        </h1>

        <div className="flex gap-6 justify-center flex-wrap">
          {/* Button 1 - Cek Pemahaman */}
          <div className="bg-white rounded-lg border-4 border-black p-6 shadow-lg">
            <Button
              onClick={() => onNavigate('fractionConcept')}
              className="px-10 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              CEK PEMAHAMAN<br/>YUK
            </Button>
          </div>

          {/* Button 2 - Ayo Mengerjakan */}
          <div className="bg-white rounded-lg border-4 border-black p-6 shadow-lg">
            <Button
              onClick={() => onNavigate('practiceStart')}
              className="px-10 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              AYO<br/>MENGERJAKAN
            </Button>
          </div>

          {/* Button 3 - Kumpulan Soal */}
          <div className="bg-white rounded-lg border-4 border-black p-6 shadow-lg">
            <Button
              onClick={() => onNavigate('quizCollection')}
              className="px-10 py-6 text-xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg border-2 border-green-700 shadow-lg transform hover:scale-105 transition-transform"
            >
              KUMPULAN<br/>SOAL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
