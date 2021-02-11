# bingo_app

# 概要

一人用ビンゴゲーム。


1. リロードすると、５×５のシートに１〜９９までの数字がランダムに配置される
2. 数字を出すボタンを押すことで１〜９９までの数字が１つランダムに出力される
3. ２で出力された数字がシート上に存在する場合には該当部分が赤く変わる
4. 縦横斜めいずれか一列が全て赤く点灯した場合右下に **BINGO!!!** と表示される

# 制作の意図

JavaScript勉強用に、非同期で画面上に何かを表示させたり、表示を変えたりして何かできないかと思案したところビンゴを思いついたので作ってみました。

# 工夫した点

出力数字とシート上の数字が一致するか否かを判定するために、シート上の数字を配列化すること、及びこれをループ処理すること。

# 使用技術(開発環境)

JavaScript

# 課題や今後実装したい機能

リーチとなった段階でその旨を表示させたい（その列を点滅させたり、文字として表示させたり）が、その判定が難しそうです。







