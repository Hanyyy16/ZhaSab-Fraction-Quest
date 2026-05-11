'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface ExerciseScreenProps {
  onNavigate: (screen: string) => void;
}

export default function ExerciseScreen({ onNavigate }: ExerciseScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const answers = [
    { id: '2_12', numerator: 2, denominator: 12 },
    { id: '2_7', numerator: 2, denominator: 7 },
    { id: '3_8', numerator: 3, denominator: 8 },
    { id: '4_10', numerator: 4, denominator: 10 },
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
        <h2 className="text-5xl font-bold text-amber-700 mb-8 drop-shadow-lg" style={{textShadow: '2px 2px 0px rgba(0,0,0,0.2)'}}>
          LATIHAN 1
        </h2>

        {/* Question box */}
        <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          <p className="text-2xl font-bold text-gray-800 mb-4">
            BERAPAKAH HASIL DARI
          </p>
          <div className="flex items-center justify-center gap-4 text-2xl">
            <FractionDisplay numerator="2" denominator="3" className="scale-125" />
            ×
            <FractionDisplay numerator="1" denominator="4" className="scale-125" />
            <span>?</span>
          </div>
        </div>

        {/* Answer buttons grid */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          {answers.map((answer) => (
            <div key={answer.id} className="bg-white rounded-lg border-4 border-black p-4 shadow-lg">
              <Button
                onClick={() => handleAnswerClick(answer.id)}
                className={`w-full px-6 py-6 text-xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-all flex items-center justify-center ${
                  selectedAnswer === answer.id
                    ? answer.id === '2_12'
                      ? 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                      : 'bg-red-500 hover:bg-red-600 text-white border-red-700'
                    : 'bg-amber-600 hover:bg-amber-700 text-white border-orange-800'
                }`}
              >
                <FractionDisplay numerator={answer.numerator} denominator={answer.denominator} />
              </Button>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {selectedAnswer && (
          <div className="flex justify-between mt-12 max-w-2xl mx-auto px-4">
            <Button
              onClick={() => onNavigate('practiceStart')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              ← SEBELUMNYA
            </Button>
            <Button
              onClick={() => onNavigate('simplification')}
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
