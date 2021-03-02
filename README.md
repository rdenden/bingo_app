# bingo_app

# 1 概要

一人用ビンゴゲーム。


1. リロードすると、５×５のシートに１〜９９までの数字がランダムに配置される
2. 数字を出すボタンを押すことで１〜９９までの数字が１つランダムに出力される
3. ２で出力された数字がシート上に存在する場合には該当部分が赤く変わる
![image](https://user-images.githubusercontent.com/75596850/109627392-edc5e100-7b84-11eb-8431-5a92fe8fe0ec.png)
4. リーチの場合は **リーチ!** と表示される
![image](https://user-images.githubusercontent.com/75596850/109627523-0cc47300-7b85-11eb-8fd9-2a72f292d7e0.png)
5. 縦横斜めいずれか一列が全て赤く点灯した場合右下に **BINGO!!!** と表示される
![image](https://user-images.githubusercontent.com/75596850/109627676-34b3d680-7b85-11eb-93e1-607673ab90e3.png)

5. 縦横斜めいずれか一列が全て赤く点灯した場合右下に **BINGO!!!** と表示される

# 2 制作の意図

JavaScript勉強用に、非同期で画面上に何かを表示させたり、表示を変えたりして何かできないかと思案したところビンゴを思いついたので作ってみました。

# 3 本番環境

デプロイ先　https://bingo-app-33051.herokuapp.com

# 4 工夫した点

出力数字とシート上の数字が一致するか否かを判定するために、シート上の数字を配列化すること、及びこれをループ処理すること。

# 5 使用技術(開発環境)

JavaScript

# 6 課題や今後実装したい機能

リーチ判定を簡潔に書く
リーチラインを点滅させる







