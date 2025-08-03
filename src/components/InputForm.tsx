import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface InputFormProps {
  onStartAnalysis: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ onStartAnalysis }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [pitchDeck, setPitchDeck] = useState<File | null>(null);
  const [plStatement, setPlStatement] = useState<File | null>(null);

  const handleFileUpload = (type: 'pitch' | 'pl', file: File) => {
    if (type === 'pitch') {
      setPitchDeck(file);
    } else {
      setPlStatement(file);
    }
  };

  const handleSubmit = () => {
    onStartAnalysis();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          AI搭載ビジネス分析
        </h1>
        <p className="text-xl text-gray-600">
          高度なインテリジェンスによる要件定義
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Website URL */}
        <div className="text-left">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            ウェブサイトURL
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="https://example.com"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <button className="btn-secondary w-full mt-3">
            ウェブサイトを分析
          </button>
        </div>

        {/* Pitch Deck */}
        <div className="text-left">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            ピッチデック
          </label>
          <div 
            className="upload-area"
            onClick={() => document.getElementById('pitchDeck')?.click()}
          >
            <input
              type="file"
              id="pitchDeck"
              className="hidden"
              accept=".pdf,.ppt,.pptx"
              onChange={(e) => e.target.files?.[0] && handleFileUpload('pitch', e.target.files[0])}
            />
            <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <div className="text-lg font-medium text-gray-700 mb-1">
              ピッチデックをドロップしてください
            </div>
            <div className="text-base text-gray-500">
              PDF、PPT、PPTX 最大10MB
            </div>
          </div>
          <button className="btn-secondary w-full mt-3">
            デックをアップロード
          </button>
        </div>

        {/* P&L Statement */}
        <div className="text-left">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            損益計算書
          </label>
          <div 
            className="upload-area"
            onClick={() => document.getElementById('plStatement')?.click()}
          >
            <input
              type="file"
              id="plStatement"
              className="hidden"
              accept=".xlsx,.csv,.pdf"
              onChange={(e) => e.target.files?.[0] && handleFileUpload('pl', e.target.files[0])}
            />
            <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <div className="text-lg font-medium text-gray-700 mb-1">
              損益計算書をドロップしてください
            </div>
            <div className="text-base text-gray-500">
              XLS、XLSX、CSV 最大10MB
            </div>
          </div>
          <button className="btn-secondary w-full mt-3">
            P&Lをアップロード
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <button 
          className="btn-primary"
          onClick={handleSubmit}
        >
          AI分析を開始
        </button>
      </div>
    </div>
  );
};

export default InputForm;
