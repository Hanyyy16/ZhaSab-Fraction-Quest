'use client';

import { Button } from '@/components/ui/button';
import PageDecorations from '@/components/PageDecorations';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export default function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100 flex items-center justify-center p-4">
      <PageDecorations />


      {/* Main content */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-6xl font-bold text-amber-700 mb-12 drop-shadow-lg" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
          PERKALIAN PECAHAN
        </h1>

        <Button
          onClick={() => onNavigate('howToPlay')}
          className="px-16 py-8 text-4xl font-bold bg-amber-600 hover:bg-amber-700 text-white rounded-lg border-4 border-orange-800 shadow-lg transform hover:scale-105 transition-transform"
        >
          AYO BERMAIN
        </Button>

        {/* Hearts display */}
        <div className="absolute top-8 right-8 text-4xl">
          ❤️❤️❤️❤️❤️
        </div>
      </div>
    </div>
  );
}
