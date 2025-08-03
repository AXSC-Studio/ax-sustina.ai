import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

interface AnalysisProgressProps {
  onComplete: () => void;
}

const AnalysisProgress: React.FC<AnalysisProgressProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  const analysisItems = [
    { id: '1', name: 'ウェブサイト構造分析', completed: true },
    { id: '2', name: '財務データ処理', completed: true },
    { id: '3', name: '市場調査統合', completed: true },
    { id: '4', name: 'リスク評価計算', completed: true },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          AXAIが分析中...
        </h1>
        <p className="text-xl text-gray-600">
          高度なAIでビジネスデータを処理しています
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
          <div className="text-xl font-semibold text-gray-700 mb-4 text-center">
            分析進捗 <span className="text-primary-800 font-bold">{Math.floor(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div 
              className="h-full bg-accent-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysisItems.map((item) => (
            <div 
              key={item.id}
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg"
            >
              <div className="w-5 h-5 bg-accent-500 rounded-full mr-3 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-lg text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisProgress;
