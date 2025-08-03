# Sustina.ai - AI搭載ビジネス分析

<div align="center">

![Sustina.ai Logo](https://via.placeholder.com/120x120/1f472a/ffffff?text=AX)

**Axla Inc.が開発するAI搭載ビジネス分析プラットフォーム**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Live Demo](https://ax-sustina.ai) • [📖 Documentation](https://docs.ax-sustina.ai) • [🐛 Issues](https://github.com/AXSC-Studio/ax-sustina.ai/issues)

</div>

## 📖 概要

Sustina.aiは企業のサステナビリティとビジネス継続性を包括的に分析するAI搭載プラットフォームです。ウェブサイト解析、財務データ処理、市場調査統合を通じて、10の主要指標でビジネスの持続可能性を評価します。

## 🚀 セットアップ

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 開発サーバーの起動
```bash
npm run dev
```

### 3. ブラウザで確認
http://localhost:3000 で自動的に開きます

## 🛠️ 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティファーストCSS
- **Lucide React** - アイコンライブラリ

## 📁 ディレクトリ構造

```
ax-sustina.ai/
├── public/                 # 静的ファイル
├── src/
│   ├── components/         # Reactコンポーネント
│   │   ├── Header.tsx      # ヘッダーコンポーネント
│   │   ├── InputForm.tsx   # 入力フォーム
│   │   ├── AnalysisProgress.tsx # 分析進捗表示
│   │   └── ResultsDisplay.tsx   # 結果表示
│   ├── types.ts           # TypeScript型定義
│   ├── index.css          # グローバルCSS
│   ├── main.tsx           # エントリーポイント
│   └── App.tsx            # メインアプリケーション
├── index.html             # HTMLテンプレート
├── package.json           # 依存関係
├── vite.config.ts         # Vite設定
├── tsconfig.json          # TypeScript設定
├── tailwind.config.js     # Tailwind設定
└── postcss.config.js      # PostCSS設定
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: #1f472a (Axla Inc.グリーン)
- **Accent**: #38c37b (サブカラー)
- **Text**: 20px基準のボディテキスト

### コンポーネント
- モダンなSaaS風UI
- レスポンシブデザイン対応
- アクセシビリティ配慮

## 📦 利用可能スクリプト

- `npm run dev` - 開発サーバー起動
- `npm run build` - プロダクションビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run lint` - ESLintによるコード検査

## 🔧 開発メモ

### フォルダ名について
`.ai` 拡張子は一部のツールで誤認識される可能性がありますが、一般的なファイルシステムでは問題ありません。

### 今後の実装予定
- [ ] バックエンドAPI統合
- [ ] 実際のファイルアップロード機能
- [ ] ユーザー認証
- [ ] レポートエクスポート機能
- [ ] リアルタイムデータ分析

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

© 2025 Axla Inc. All rights reserved.

## 👥 チーム

- **AXSC Studio** - 開発チーム
- **Axla Inc.** - プロダクトオーナー

## 🔗 関連リンク

- [Axla Inc. 公式サイト](https://axla.inc)
- [AXSC Studio](https://github.com/AXSC-Studio)
- [プロジェクト Wiki](https://github.com/AXSC-Studio/ax-sustina.ai/wiki)
