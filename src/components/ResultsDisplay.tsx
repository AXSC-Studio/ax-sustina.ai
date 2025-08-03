import React from 'react';
import { FileText, Users, Search, Award, DollarSign, Building, Sword, BarChart, RotateCcw, Leaf, Download } from 'lucide-react';
import type { AnalysisResult } from '../types';

const ResultsDisplay: React.FC = () => {
  const overallScore = 82;
  
  const results: AnalysisResult[] = [
    {
      id: '1',
      name: 'コンテンツ継続性指標',
      description: 'サイトコンテンツの一貫性とサステナビリティ',
      score: 87,
      icon: 'FileText'
    },
    {
      id: '2',
      name: 'ユーザーエンゲージメント係数',
      description: 'ユーザーインサイトと行動分析',
      score: 92,
      icon: 'Users'
    },
    {
      id: '3',
      name: 'SEO効率指数',
      description: '検索エンジン最適化ランキング',
      score: 78,
      icon: 'Search'
    },
    {
      id: '4',
      name: 'リーダーシップ評判指標',
      description: '経営陣と評判レベル',
      score: 85,
      icon: 'Award'
    },
    {
      id: '5',
      name: '財務安定性指標',
      description: '財務健全性とビジネス安定性',
      score: 74,
      icon: 'DollarSign'
    },
    {
      id: '6',
      name: '技術インフラ堅牢性',
      description: '技術スタックとインフラ安定性',
      score: 89,
      icon: 'Building'
    },
    {
      id: '7',
      name: '市場競争優位性',
      description: '市場ポジションと競合分析',
      score: 81,
      icon: 'Sword'
    },
    {
      id: '8',
      name: '顧客基盤多様化',
      description: '顧客多様性と依存リスク',
      score: 76,
      icon: 'BarChart'
    },
    {
      id: '9',
      name: '収益モデル持続可能性',
      description: '収益持続可能性評価',
      score: 83,
      icon: 'RotateCcw'
    },
    {
      id: '10',
      name: '社会的影響とESGコンプライアンス',
      description: '環境、社会、ガバナンス評価',
      score: 79,
      icon: 'Leaf'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      FileText: <FileText className="w-5 h-5" />,
      Users: <Users className="w-5 h-5" />,
      Search: <Search className="w-5 h-5" />,
      Award: <Award className="w-5 h-5" />,
      DollarSign: <DollarSign className="w-5 h-5" />,
      Building: <Building className="w-5 h-5" />,
      Sword: <Sword className="w-5 h-5" />,
      BarChart: <BarChart className="w-5 h-5" />,
      RotateCcw: <RotateCcw className="w-5 h-5" />,
      Leaf: <Leaf className="w-5 h-5" />
    };
    return icons[iconName] || <FileText className="w-5 h-5" />;
  };

  const handleExport = () => {
    alert('レポートエクスポート機能はバックエンド統合で実装予定です。');
  };

  return (
    <div className="text-left">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          ビジネス分析結果
        </h1>
        <p className="text-xl text-gray-600">
          包括的なAI搭載評価が完了しました
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Overall Score */}
        <div className="bg-white border border-gray-200 rounded-2xl p-12 mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            総合サステナビリティスコア
          </h2>
          <div className="w-32 h-32 border-8 border-gray-200 border-t-primary-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-5xl font-bold text-gray-900">{overallScore}</span>
          </div>
          <p className="text-lg text-gray-600">
            主要なサステナビリティ指標において強いパフォーマンス
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {results.map((result) => (
            <div key={result.id} className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center flex-1">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mr-4 flex items-center justify-center text-primary-800">
                  {getIcon(result.icon)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {result.name}
                  </h3>
                  <p className="text-base text-gray-600">
                    {result.description}
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-accent-500 ml-4">
                {result.score}
              </div>
            </div>
          ))}
        </div>

        {/* Export Button */}
        <div className="text-center">
          <button 
            className="btn-secondary inline-flex items-center"
            onClick={handleExport}
          >
            <Download className="w-5 h-5 mr-2" />
            レポートをエクスポート
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
