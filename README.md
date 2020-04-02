# Care Kitchen

日々の食べたものの栄養素がグラフ化できる健康管理アプリ！！
URL: http://18.180.1.58/

## 説明

- 食べたものを入力すると、摂取したカロリーや栄養素がグラフで視覚化されます。
- 身長や体重も日々記録することで、BMI値もグラフ化！
- 全国のユーザーが投稿した健康レシピを検索できる！！

## お試し用ログインパスワード
- email：gest@gmail.com
- password：gestgest
- アプリURL URL: http://18.180.1.58/

## 実装した機能

- ログイン機能
- レシピ投稿機能
- レシピ検索機能
- いいね機能
- ユーザーが複数人のアバターを管理できる
- 毎日のBMIをグラフ化
- レシピに含まれる栄養素をグラフ化
- 毎日食べたものの栄養素をグラフ化
- ユーザー、レシピ、アバターの編集・削除機能

## 使用した技術

- haml,scss,javascript (フロント)
- ruby on rails, jQuery (サーバー)
- mySQL (データベース)
- ウィザード形式によるログイン機能
- csvファイル導入 (食材のデータ)
- 5つのテーブルのデータを同時保存 (レシピ投稿)
- インクリメンタルサーチ (食材の検索)
- ページネーション(gem kaminari)
- 中間テーブルへのカラム追加・保存
- chart.js (BMI,栄養素,摂取カロリーのグラフ化)
- AWS (デプロイ)
- capistrano (自動デプロイ)
- S3 (本番環境の画像保存先)

## デモイメージ
<img width="1280" alt="timedemo1" src="https://user-images.githubusercontent.com/59483718/76194062-b5691c80-6228-11ea-9d37-5db18ebf8e3e.jpg">

<img width="1280" alt="kitchendemo2" src="https://user-images.githubusercontent.com/59483718/76194095-cb76dd00-6228-11ea-9559-24cc9e041c0b.png">

<img width="1280" alt="timedemo3" src="https://user-images.githubusercontent.com/59483718/76194111-d7fb3580-6228-11ea-97fb-21996afb81d1.jpg">

## ER図
<img width="862" alt="kitchenerd" src="https://user-images.githubusercontent.com/59483718/76194761-3379f300-622a-11ea-9942-bff4c30f6184.png">