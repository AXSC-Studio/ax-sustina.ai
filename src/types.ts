export interface AnalysisResult {
  id: string;
  name: string;
  description: string;
  score: number;
  icon: string;
}

export interface AnalysisProgress {
  percentage: number;
  currentStep: string;
  items: AnalysisItem[];
}

export interface AnalysisItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface FileUpload {
  file: File;
  type: 'pitch' | 'financial';
  progress: number;
}

export type AnalysisScreen = 'input' | 'progress' | 'results';
