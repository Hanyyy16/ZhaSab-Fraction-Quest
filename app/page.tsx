'use client';

import { useState } from 'react';
import HomeScreen from '@/components/screens/HomeScreen';
import HowToPlayScreen from '@/components/screens/HowToPlayScreen';
import UnderstandingQuestionScreen from '@/components/screens/UnderstandingQuestionScreen';
import MultipleChoiceScreen from '@/components/screens/MultipleChoiceScreen';
import FractionConceptScreen from '@/components/screens/FractionConceptScreen';
import PracticeStartScreen from '@/components/screens/PracticeStartScreen';
import ExerciseScreen from '@/components/screens/ExerciseScreen';
import SimplificationScreen from '@/components/screens/SimplificationScreen';
import SuccessScreen from '@/components/screens/SuccessScreen';
import QuizCollectionScreen from '@/components/screens/QuizCollectionScreen';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleNavigation = (screenName: string) => {
    setCurrentScreen(screenName);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={handleNavigation} />;
      case 'howToPlay':
        return <HowToPlayScreen onNavigate={handleNavigation} />;
      case 'understanding':
        return <UnderstandingQuestionScreen onNavigate={handleNavigation} />;
      case 'multipleChoice':
        return <MultipleChoiceScreen onNavigate={handleNavigation} />;
      case 'fractionConcept':
        return <FractionConceptScreen onNavigate={handleNavigation} />;
      case 'practiceStart':
        return <PracticeStartScreen onNavigate={handleNavigation} />;
      case 'exercise':
        return <ExerciseScreen onNavigate={handleNavigation} />;
      case 'simplification':
        return <SimplificationScreen onNavigate={handleNavigation} />;
      case 'success':
        return <SuccessScreen onNavigate={handleNavigation} />;
      case 'quizCollection':
        return <QuizCollectionScreen onNavigate={handleNavigation} />;
      default:
        return <HomeScreen onNavigate={handleNavigation} />;
    }
  };

  return <div className="min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-100">{renderScreen()}</div>;
}
