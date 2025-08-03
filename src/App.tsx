import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import AnalysisProgress from './components/AnalysisProgress';
import ResultsDisplay from './components/ResultsDisplay';
import type { AnalysisScreen } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AnalysisScreen>('input');

  const handleStartAnalysis = () => {
    setCurrentScreen('progress');
  };

  const handleAnalysisComplete = () => {
    setCurrentScreen('results');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'input':
        return <InputForm onStartAnalysis={handleStartAnalysis} />;
      case 'progress':
        return <AnalysisProgress onComplete={handleAnalysisComplete} />;
      case 'results':
        return <ResultsDisplay />;
      default:
        return <InputForm onStartAnalysis={handleStartAnalysis} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16 p-6 max-w-7xl mx-auto">
        <div className="py-10">
          {renderScreen()}
        </div>
      </main>
    </div>
  );
}

export default App;
