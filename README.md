# 物語の泉 (The Spring of Stories)

AI が紡ぐ文学の世界 — AI 生成の短編小説を快適に読むための Web アプリケーションです。

## 概要

「物語の泉」は、AI によって生成された短編小説を閲覧・読書できるプラットフォームです。ミステリ、時代小説、SF、ホラー、社会派、青春の 6 ジャンルにわたる 12 作品以上の小説を収録しています。

## 主な機能

- **ジャンル別ブラウジング** — 6 つのカテゴリから作品を探せるインタラクティブなグリッド UI
- **快適な読書体験** — 日本語タイポグラフィに最適化されたリーダー画面
- **レスポンシブデザイン** — モバイルからデスクトップまで対応

## 技術スタック

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**

## プロジェクト構成

```
src/
├── app/
│   ├── page.tsx                 # トップページ
│   ├── layout.tsx               # ルートレイアウト（フォント・メタデータ）
│   ├── globals.css              # グローバルスタイル
│   └── novel/[slug]/page.tsx    # 小説リーダーページ
├── components/
│   ├── Header.tsx               # スクロール連動ヘッダー
│   ├── HeroSection.tsx          # ヒーローセクション
│   ├── CategoryGrid.tsx         # ジャンル選択グリッド
│   ├── NovelList.tsx            # フィルター付き作品一覧
│   ├── ReaderHeader.tsx         # リーダー用ヘッダー
│   ├── Footer.tsx               # フッター
│   └── HeaderContext.tsx        # ヘッダー表示状態の Context
└── lib/
    └── novels.ts                # 小説データ・型定義
```

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認できます。

## ビルド

```bash
npm run build
npm start
```

## 収録ジャンル

| ジャンル | カテゴリ ID |
|---------|-----------|
| ミステリ | `mystery` |
| 時代小説 | `historical` |
| SF | `sf` |
| ホラー | `horror` |
| 社会派 | `social` |
| 青春 | `youth` |
