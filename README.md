# SIG-SLUD

## 必要なもの
* ruby
* ruby-gems
* jekyll
* git

## インストール方法
github からもろもろをダウンロードします．

その後，`jekyll build` すると \_site 以下に html ファイルが作成されます．

最後に，html ファイルなど全て，ドキュメントルートへコピーします． ( /usr/local/www/apacheXX/data/ 以下とか )
```
$ cd && git clone https://github.com/mayok/sig-slud.git
$ cd sig-slud
$ jekyll build
$ cp -r _site/* /path/to/document_root
```


## スケジュールの追加・編集
スケジュール関連は \_post 以下に置いてあります．

ファイル名を YYYY-MM-dd-タイトル.md のようにします． 例えば，2014-12-25-Christmas.md のように．

ファイルの中身は，以下のようにしてください．
本文はバッククオート 3つでくくります．間にスペースはいりません．

```2014-12-25-Christmas.md
---
layout: post
title: "第XX回研究会 クリスマス特別編"
place: "○○大学"
time:  "2014年12月25日(木)"
state: "未定"
---

`` `
ここに本文を書く．
`` `

```

以上の作業が終わったら，`jekyll build` して，\_site 以下の html ファイル等を，
ドキュメントルートへコピーしましょう．
