# メモコレ(Memorial Recollection)

[![IMAGE ALT TEXT HERE](https://jphacks.com/wp-content/uploads/2021/07/JPHACKS2021_ogp.jpg)](https://www.youtube.com/watch?v=LUPQFB4QyVo)

## 製品概要
### 背景(製品開発のきっかけ、課題等）
社会人2年目、久々の飲み会にて学生時代の伊豆旅行について振り返るTとO

T「海の綺麗な露天風呂入ったよな」

O「えーっと，その後は道の駅天城越えに行ったんだっけ」

T「天城越え流しながらねｗ」

O「そうだったわ，なつかしーｗｗ」

T「道の駅で鹿肉コロッケ一個しかなくて俺が食べれなかったんだよな」

O「え，そんなことあったっけ」

 T「写真見ようぜ写真！」

お互いスマホを取り出し，写真アプリを開くが……

O「見つからないなー，いつ行ったんだっけ」

T「春だった気がする？」

しかし，何年の春を探しても，写真は見つからないのだった．

O「違うじゃん，夏じゃん」

------

あなたにも，こんな経験ありませんか？

"メモコレ"は思い出の整理と振り返りを手助けをします。

ユーザーが思い出話に花を咲かせるとき、その話題は訪問地を起点に展開されるのではないでしょうか？さらに、例えばある訪問地で食べた特産品の話からさらに別の訪問地の特産品の話へ展開されるようなこともあるでしょう。
このようなユーザーの話題の展開に着目した結果、時系列で並んだ訪問地ごとに写真を振り返ることができる機能を実装しました。


写真の類似度やライク，コメントなどから計算された写真ごとのスコアから訪問地のハイライトを抽出し，盛り上がっているシーンのものが大きく表示されます．

また、写真に含まれている情報から関連写真を表示することで、話題のつきない楽しい時間を提供します。


### 製品説明（具体的な製品の説明）
### 特長
1. 旅の仲間と撮影した写真から自動で旅のアルバムを作成します.

2. 訪問地ごとに似通ったシーンの写真を抽出し, 象徴的な写真をハイライトします.

3. カテゴリー等の類似度から関連写真を選択し, 連鎖的に思い出を振り返ります.


### 解決出来ること
　既存の写真アプリでは、帰宅後写真を改めて整理しなければなりませんでした。
また、整理することが面倒であるが故に、写真が撮りっぱなしになってしまうことも少なくありません。これは後日旅の思い出を振り返ることの妨げになってしまいます。
本製品は旅行と同時進行でアルバムを作成することで、この問題を解決することを目的としました。

### 動画
・実機デモ https://drive.google.com/file/d/1ujsBarCkumE0EsJgY2VI31Mjl_b2pX1O/view?usp=sharing

### 今後の展望
・写真撮影モードの開発
・コメント機能，ライク機能の開発
・ライクやコメント，画像解析による写真のスコアリング機能の開発
・iPhone，Androidアプリ化

### 注力したこと（こだわり等）
* 情報系の学生とデザイン系の学生が研究室超えて集まり，ユーザー体験の設計と、動作するプロトタイプ制作をパラレルに取り組み、ユーザー体験の設計に充てる時間を大きく確保して取り組みました。
* バックエンドではpython環境下でDjangoを用いたDBサーバを行いました。第１タームでは今後の作業の効率化を行うため、データベースに情報を効率的に登録するための基盤作りと、フロントエンド側にjsonファイルを送信するフレームワークの作成を行いました。第２タームでは研究室の要素技術である画像解析, 音声解析の技術を用いてライクやコメント，画像解析による写真のスコアリング機能の開発を行っていきます。

## 開発技術
### 活用した技術
* python
* html
* css
* javascript

#### フレームワーク・ライブラリ・モジュール
* Django
* Swiper
* JQuery

#### デバイス
* Webブラウザ
* 

### 独自技術
#### ハッカソンで開発した独自機能・技術
* ライクやコメント，画像解析による写真のスコアリング機能の開発(実装予定)
* 自作APIから任意の旅の画像を取得し，横方向に動的にロケーションごとのGrid要素を作成し，画像を表示できるようにした．

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）
* 
* 
