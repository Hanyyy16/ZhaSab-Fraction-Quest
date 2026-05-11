'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageDecorations from '@/components/PageDecorations';

interface MultipleChoiceScreenProps {
  onNavigate: (screen: string) => void;
}

export default function MultipleChoiceScreen({ onNavigate }: MultipleChoiceScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const answers = [
    { id: 'pengurangan', label: 'PENGURANGAN' },
    { id: 'perkalian', label: 'PERKALIAN' },
    { id: 'pembagian', label: 'PEMBAGIAN' },
    { id: 'penjumlahan', label: 'PENJUMLAHAN' },
  ];

  const handleAnswerClick = (answerId: string) => {
    setSelectedAnswer(answerId);
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
        <h2 className="text-5xl font-bold text-amber-700 mb-12 drop-shadow-lg" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
          OPERASI APA YANG<br/>DIGUNAKAN?
        </h2>

        {/* Answer buttons grid */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          {answers.map((answer) => (
            <div key={answer.id} className="bg-white rounded-lg border-4 border-black p-4 shadow-lg">
              <Button
                onClick={() => handleAnswerClick(answer.id)}
                className={`w-full px-6 py-6 text-xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-all ${
                  selectedAnswer === answer.id
                    ? answer.id === 'perkalian'
                      ? 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                      : 'bg-red-500 hover:bg-red-600 text-white border-red-700'
                    : 'bg-amber-600 hover:bg-amber-700 text-white border-orange-800'
                }`}
              >
                {answer.label}
              </Button>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {selectedAnswer && (
          <div className="flex justify-between mt-12 max-w-2xl mx-auto px-4">
            <Button
              onClick={() => onNavigate('understanding')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              ← SEBELUMNYA
            </Button>
            <Button
              onClick={() => onNavigate('howToPlay')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              KEMBALI KE MENU
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
