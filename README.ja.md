# 不動産賃貸管理プラットフォーム

## プロジェクト概要

このプロジェクトは、物件オーナー・管理者と賃借人をつなぐ総合的な不動産賃貸管理プラットフォームです。物件の検索、申し込み、契約管理から家賃支払いまでの全プロセスをデジタル化し、効率的な不動産賃貸管理を実現します。

## 特徴

- **高度な物件検索機能**: 地域、価格帯、寝室数、バスルーム数など多様な条件での検索
- **ユーザー管理**: テナント（賃借人）と管理者（オーナー）両方のユーザータイプをサポート
- **申込・契約管理**: オンラインでの物件申し込みと契約書管理
- **支払い追跡**: 家賃支払いの追跡と管理
- **地図統合**: 位置情報を活用した物件検索
- **お気に入り機能**: ユーザーが気に入った物件の保存

## 技術スタック

### フロントエンド（Client）

- **Next.js**: React ベースのフレームワーク
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: モダンな UI デザイン
- **Redux Toolkit**: 状態管理
- **Framer Motion**: アニメーション
- **Mapbox API**: 地図統合

### バックエンド（Server）

- **Node.js**: サーバーサイド環境
- **Express**: WebAPI フレームワーク
- **Prisma**: データベース ORM
- **PostgreSQL**: リレーショナルデータベース
- **PostGIS**: 地理空間データ拡張

## プロジェクト構造

```
client/             # フロントエンドアプリケーション
  src/              # ソースコード
    app/            # Next.js App Router
    components/     # 再利用可能なコンポーネント
    hooks/          # カスタムReactフック
    lib/            # ユーティリティ関数
    state/          # Redux状態管理
    types/          # TypeScript型定義

server/             # バックエンドアプリケーション
  prisma/           # Prismaスキーマと移行
  src/              # ソースコード
    controllers/    # APIコントローラー
    middleware/     # ミドルウェア
    routes/         # APIルート定義
```

## 開発環境のセットアップ

### 前提条件

- Node.js (v18 以上)
- PostgreSQL (v14 以上)
- PostGIS 拡張

### クライアントのセットアップ

```bash
# クライアントディレクトリに移動
cd client

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### サーバーのセットアップ

```bash
# サーバーディレクトリに移動
cd server

# 依存関係のインストール
npm install

# .envファイルの作成（環境変数の設定）
# DATABASE_URL="postgresql://user:password@localhost:5432/rental_db?schema=public"

# データベースマイグレーションの実行
npx prisma migrate dev

# 開発サーバーの起動
npm run dev
```

## デプロイ

### クライアント（Next.js）

- Vercel へのデプロイが推奨されます
- Netlify、AWS Amplify なども選択肢として

### サーバー（Node.js/Express）

- AWS EC2、Heroku、Google Cloud Run など

## こだわりポイント

1. **モダンな UI/UX 設計**: アニメーションと直感的な操作性
2. **地図統合検索**: 視覚的な物件探し体験
3. **多様な検索フィルター**: 細かい条件設定が可能
4. **レスポンシブデザイン**: あらゆるデバイスに対応
5. **リアルタイムデータ更新**: 最新の物件情報の表示
6. **セキュアな認証システム**: 安全なユーザー管理
7. **地理空間データの活用**: 効率的な位置情報処理

## ライセンス

MIT

---

© 2025 不動産賃貸管理プラットフォーム
