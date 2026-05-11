'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FractionDisplay from '@/components/FractionDisplay';
import PageDecorations from '@/components/PageDecorations';

interface QuizCollectionScreenProps {
  onNavigate: (screen: string) => void;
}

interface Question {
  id: number;
  type: 'LOTS' | 'HOTS';
  question: React.ReactNode;
  options: { id: string; value: React.ReactNode }[];
  correctAnswer: string;
}

export default function QuizCollectionScreen({ onNavigate }: QuizCollectionScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ questionId: number; answer: string; isCorrect: boolean }[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lives, setLives] = useState(10);

  const questions: Question[] = [
    // LOTS Questions (6)
    {
      id: 1,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="1" denominator="2" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="1" denominator="3" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="1" denominator="6" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="2" denominator="5" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="1" denominator="5" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="2" denominator="6" size="md" /> },
      ],
      correctAnswer: 'a',
    },
    {
      id: 2,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="2" denominator="3" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="1" denominator="4" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="3" denominator="7" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="2" denominator="12" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="1" denominator="6" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="2" denominator="7" size="md" /> },
      ],
      correctAnswer: 'b',
    },
    {
      id: 3,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="3" denominator="4" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="2" denominator="5" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="5" denominator="9" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="6" denominator="9" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="6" denominator="20" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="5" denominator="20" size="md" /> },
      ],
      correctAnswer: 'c',
    },
    {
      id: 4,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="1" denominator="5" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="2" denominator="3" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="3" denominator="8" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="2" denominator="15" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="3" denominator="15" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="2" denominator="8" size="md" /> },
      ],
      correctAnswer: 'b',
    },
    {
      id: 5,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="4" denominator="5" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="1" denominator="2" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="5" denominator="7" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="4" denominator="7" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="5" denominator="10" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="4" denominator="10" size="md" /> },
      ],
      correctAnswer: 'd',
    },
    {
      id: 6,
      type: 'LOTS',
      question: (
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <FractionDisplay numerator="2" denominator="7" size="lg" />
          <span className="text-3xl font-bold">×</span>
          <FractionDisplay numerator="3" denominator="4" size="lg" />
          <span className="text-3xl font-bold">=</span>
          <span className="text-3xl font-bold">?</span>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="6" denominator="28" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="5" denominator="11" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="6" denominator="11" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="5" denominator="28" size="md" /> },
      ],
      correctAnswer: 'a',
    },
    // HOTS Questions (4) - Word Problems
    {
      id: 7,
      type: 'HOTS',
      question: (
        <div className="text-xl font-bold text-gray-800 leading-relaxed">
          <p>Ibu mempunyai <span className="inline-flex items-baseline"><FractionDisplay numerator="3" denominator="4" size="sm" /></span> kg gula.</p>
          <p className="mt-2">Ibu menggunakan <span className="inline-flex items-baseline"><FractionDisplay numerator="1" denominator="2" size="sm" /></span> bagian untuk membuat kue.</p>
          <p className="mt-2">Berapa kg gula yang digunakan?</p>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="3" denominator="8" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="4" denominator="6" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="1" denominator="4" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="2" denominator="8" size="md" /> },
      ],
      correctAnswer: 'a',
    },
    {
      id: 8,
      type: 'HOTS',
      question: (
        <div className="text-xl font-bold text-gray-800 leading-relaxed">
          <p>Sebuah tali panjangnya <span className="inline-flex items-baseline"><FractionDisplay numerator="2" denominator="3" size="sm" /></span> meter.</p>
          <p className="mt-2">Budi memotong <span className="inline-flex items-baseline"><FractionDisplay numerator="1" denominator="4" size="sm" /></span> bagian dari tali tersebut.</p>
          <p className="mt-2">Berapa meter tali yang dipotong Budi?</p>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="3" denominator="7" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="2" denominator="12" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="1" denominator="6" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="2" denominator="7" size="md" /> },
      ],
      correctAnswer: 'b',
    },
    {
      id: 9,
      type: 'HOTS',
      question: (
        <div className="text-xl font-bold text-gray-800 leading-relaxed">
          <p>Ani memiliki pita sepanjang <span className="inline-flex items-baseline"><FractionDisplay numerator="4" denominator="5" size="sm" /></span> meter.</p>
          <p className="mt-2">Ia memberikan <span className="inline-flex items-baseline"><FractionDisplay numerator="1" denominator="2" size="sm" /></span> bagian kepada Siti.</p>
          <p className="mt-2">Berapa meter pita yang diberikan kepada Siti?</p>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="5" denominator="7" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="4" denominator="10" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="5" denominator="10" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="4" denominator="7" size="md" /> },
      ],
      correctAnswer: 'b',
    },
    {
      id: 10,
      type: 'HOTS',
      question: (
        <div className="text-xl font-bold text-gray-800 leading-relaxed">
          <p>Pak Tono mempunyai kebun seluas <span className="inline-flex items-baseline"><FractionDisplay numerator="5" denominator="6" size="sm" /></span> hektar.</p>
          <p className="mt-2">Ia menanam jagung di <span className="inline-flex items-baseline"><FractionDisplay numerator="2" denominator="5" size="sm" /></span> bagian kebunnya.</p>
          <p className="mt-2">Berapa hektar luas kebun yang ditanami jagung?</p>
        </div>
      ),
      options: [
        { id: 'a', value: <FractionDisplay numerator="7" denominator="11" size="md" /> },
        { id: 'b', value: <FractionDisplay numerator="10" denominator="11" size="md" /> },
        { id: 'c', value: <FractionDisplay numerator="10" denominator="30" size="md" /> },
        { id: 'd', value: <FractionDisplay numerator="7" denominator="30" size="md" /> },
      ],
      correctAnswer: 'c',
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (answerId: string) => {
    if (selectedAnswer) return; // Prevent changing answer
    
    setSelectedAnswer(answerId);
    const isCorrect = answerId === currentQuestion.correctAnswer;
    
    setAnswers([...answers, { 
      questionId: currentQuestion.id, 
      answer: answerId, 
      isCorrect 
    }]);

    if (!isCorrect && lives > 0) {
      setLives(lives - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      // Find the previous answer
      const prevAnswer = answers.find(a => a.questionId === questions[currentQuestionIndex - 1].id);
      setSelectedAnswer(prevAnswer?.answer || null);
    }
  };

  const getScore = () => {
    const correct = answers.filter(a => a.isCorrect).length;
    return Math.round((correct / questions.length) * 100);
  };

  const getMotivationalMessage = () => {
    const score = getScore();
    if (score === 100) {
      return { message: "LUAR BIASA! Kamu sangat hebat!", color: "text-green-600" };
    } else if (score >= 80) {
      return { message: "HEBAT! Kamu sudah sangat baik!", color: "text-green-500" };
    } else if (score >= 60) {
      return { message: "BAGUS! Terus berlatih ya!", color: "text-amber-600" };
    } else if (score >= 40) {
      return { message: "SEMANGAT! Kamu pasti bisa lebih baik!", color: "text-orange-500" };
    } else {
      return { message: "JANGAN MENYERAH! Ayo belajar lagi!", color: "text-red-500" };
    }
  };

  if (showResult) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const wrongCount = answers.filter(a => !a.isCorrect).length;
    const score = getScore();
    const motivation = getMotivationalMessage();

    return (
      <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
        <PageDecorations />
        <div className="text-center max-w-2xl z-10 w-full">
          <h1 className="text-5xl font-bold text-amber-700 mb-8 drop-shadow-lg" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
            HASIL KUIS
          </h1>

          <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8">
            <div className="text-8xl font-bold text-amber-600 mb-4">
              {score}
            </div>
            <div className="text-2xl font-bold text-gray-600 mb-6">NILAI</div>

            <div className="flex justify-center gap-12 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500">{correctCount}</div>
                <div className="text-lg font-semibold text-gray-600">BENAR</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500">{wrongCount}</div>
                <div className="text-lg font-semibold text-gray-600">SALAH</div>
              </div>
            </div>

            <div className={`text-2xl font-bold ${motivation.color} mt-4`}>
              {motivation.message}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setAnswers([]);
                setShowResult(false);
                setLives(10);
              }}
              className="px-8 py-6 text-xl font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg border-2 border-green-700 shadow-lg transform hover:scale-105 transition-transform"
            >
              ULANGI KUIS
            </Button>
            <Button
              onClick={() => onNavigate('howToPlay')}
              className="px-8 py-6 text-xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-2 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
            >
              KEMBALI
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />
      {/* Hearts display - 2 rows of 5 */}
      <div className="absolute top-8 right-8 flex flex-col gap-1">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-3xl ${i < lives ? '' : 'grayscale opacity-30'}`}>
              ❤️
            </span>
          ))}
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i + 5} className={`text-3xl ${i + 5 < lives ? '' : 'grayscale opacity-30'}`}>
              ❤️
            </span>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-8 left-8">
        <div className="bg-white rounded-lg border-2 border-black px-4 py-2 shadow-lg">
          <span className="text-lg font-bold text-gray-800">
            Soal {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className={`ml-2 px-2 py-1 rounded text-sm font-bold ${
            currentQuestion.type === 'LOTS' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
          }`}>
            {currentQuestion.type}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center max-w-4xl z-10 w-full mt-16">
        {/* Question */}
        <div className="bg-white rounded-lg border-4 border-black p-8 shadow-lg mb-8 mx-auto max-w-2xl">
          {currentQuestion.question}
        </div>

        {/* Answer options */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option.id;
            const isCorrect = option.id === currentQuestion.correctAnswer;
            const showFeedback = selectedAnswer !== null;

            let buttonClass = 'bg-amber-600 hover:bg-amber-700 text-white border-orange-800';
            
            if (showFeedback) {
              if (isCorrect) {
                buttonClass = 'bg-green-500 text-white border-green-700';
              } else if (isSelected && !isCorrect) {
                buttonClass = 'bg-red-500 text-white border-red-700';
              } else {
                buttonClass = 'bg-gray-300 text-gray-600 border-gray-400';
              }
            }

            return (
              <div key={option.id} className="bg-white rounded-lg border-4 border-black p-4 shadow-lg">
                <Button
                  onClick={() => handleAnswerClick(option.id)}
                  disabled={selectedAnswer !== null}
                  className={`w-full px-6 py-8 text-xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-all ${buttonClass}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold">{option.id.toUpperCase()}.</span>
                    {option.value}
                  </div>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 max-w-2xl mx-auto px-4">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-8 py-6 text-xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-transform ${
              currentQuestionIndex === 0 
                ? 'bg-gray-400 border-gray-500 cursor-not-allowed' 
                : 'bg-amber-600 hover:bg-amber-700 border-orange-800'
            } text-white`}
          >
            ← SEBELUMNYA
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedAnswer}
            className={`px-8 py-6 text-xl font-bold rounded-lg border-2 shadow-lg transform hover:scale-105 transition-transform ${
              !selectedAnswer 
                ? 'bg-gray-400 border-gray-500 cursor-not-allowed' 
                : 'bg-amber-600 hover:bg-amber-700 border-orange-800'
            } text-white`}
          >
            {currentQuestionIndex === questions.length - 1 ? 'LIHAT HASIL' : 'SELANJUTNYA →'}
          </Button>
        </div>
      </div>
    </div>
  );
}
