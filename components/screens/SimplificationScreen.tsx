'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface SimplificationScreenProps {
  onNavigate: (screen: string) => void;
}

export default function SimplificationScreen({ onNavigate }: SimplificationScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display */}
      <div className="absolute top-8 right-8 text-4xl">
        ❤️❤️❤️❤️❤️
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full">
        {/* Question mark icons */}
        <div className="text-7xl font-bold text-amber-700 mb-8" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
          ? ? ?
        </div>

        {/* Question box */}
        <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          <p className="text-2xl font-bold text-gray-800 leading-relaxed">
            APAKAH HASIL PECAHAN<br/>TERSEBUT DAPAT<br/>DISEDERHANAKAN?
          </p>
        </div>

        {/* Answer buttons */}
        <div className="flex gap-6 justify-center max-w-xl mx-auto mb-8">
          <div className="bg-white rounded-lg border-4 border-black p-4 shadow-lg flex-1">
            <Button
              onClick={() => handleAnswerClick('ya')}
              className={`w-full px-8 py-6 text-2xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-all ${
                selectedAnswer === 'ya'
                  ? 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                  : 'bg-amber-600 hover:bg-amber-700 text-white border-orange-800'
              }`}
            >
              YA
            </Button>
          </div>

          <div className="bg-white rounded-lg border-4 border-black p-4 shadow-lg flex-1">
            <Button
              onClick={() => handleAnswerClick('tidak')}
              className={`w-full px-8 py-6 text-2xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-all ${
                selectedAnswer === 'tidak'
                  ? 'bg-red-500 hover:bg-red-600 text-white border-red-700'
                  : 'bg-amber-600 hover:bg-amber-700 text-white border-orange-800'
              }`}
            >
              TIDAK
            </Button>
          </div>
        </div>

        {/* Navigation buttons */}
        {selectedAnswer && (
          <div className="flex justify-between mt-12 max-w-2xl mx-auto px-4">
            <Button
              onClick={() => onNavigate('exercise')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              ← SEBELUMNYA
            </Button>
            <Button
              onClick={() => onNavigate('success')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              SELANJUTNYA →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
