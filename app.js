// １〜９９の配列を用意(forで)
const numbers = [];
for (number = 1 ; number < 100; number += 1){
  numbers.push(number);
}
// こうも書ける
// let numbers = Array.from(new Array(99)).map((v,i) => i + 1)
// こうも書ける

// ビンゴシートに数字を出力
window.addEventListener('load', () => {
  const $boxNumbers = document.getElementsByName('box')
  let boxNumbersIndex = 0
  // 後のビンゴ判定において使うためシート上の数字を配列化するための処理
  let sheetNumbers = []
  //数字の出力を２５回ループ
  while(boxNumbersIndex < $boxNumbers.length){
    // １〜99の配列のうちからランダムにシートに出力(出力する数字をnumとする)
    let num = numbers[Math.floor(Math.random() * numbers.length)]
    $boxNumbers[boxNumbersIndex].innerHTML = num
    // 回数表示
    // 配列から出力させた数字を除く
    let index = numbers.indexOf(num)
    numbers.splice(index,1)
    // シート上の数字を配列に格納(後のビンゴ判定で使う)
    sheetNumbers[boxNumbersIndex] = num
    boxNumbersIndex++
    // 確認用
    console.log(sheetNumbers)
  }

  // ボタンをクリックするごとに数字を１つずつ出力
  // １〜９９の配列を用意(whileで)
  const numbers2 = [];
  let number = 1
  while(number < 100) {
    numbers2.push(number);
    number += 1;
  }
  // こうも書ける
  // let numbers2 = Array.from(new Array(99)).map((v,i) => i + 1)
  // こうも書ける

  const clickButton = document.getElementById('number-button')
  clickButton.addEventListener("click",() => {
  
    // １〜99の配列のうちから右の表示ボックスにランダムに数字を出力(出力する数字をnum2とする)
    const outputNumber = document.getElementById('number')  
    let num2 = numbers2[Math.floor(Math.random() * numbers2.length)]
    
    
    // undefinedを書き換える
    if (num2 === undefined){
      outputNumber.innerHTML = '終'
    } else {
    outputNumber.innerHTML = num2 
    index = numbers2.indexOf(num2)
    numbers2.splice(index,1)
    // 確認用
    console.log(numbers2)
    let sheetNumbersIndex = 0
    
    
    
  
    // 以下ビンゴ判定。１２パターンを全て列挙
    while(sheetNumbersIndex < sheetNumbers.length){
      // 出力した数字と一致するものがシートにあったときそのボックスを赤くする
      if (num2 == sheetNumbers[sheetNumbersIndex]){
        $boxNumbers[sheetNumbersIndex].setAttribute("style", "background-color:#ff0000;")
      }
      sheetNumbersIndex++
      // 確認用
      console.log($boxNumbers[0].style)
      }
      // リーチ判定(発火すると$boxNumbers[].style[0]の値が"background-color"となる)
      
      const bingo = document.getElementById('bingo');
      // 各ビンゴライン(配列内各要素は、通常存在しない(undefined)が、発火すると"background-color")
      const line1 = [$boxNumbers[0].style[0], $boxNumbers[1].style[0], $boxNumbers[2].style[0], $boxNumbers[3].style[0], $boxNumbers[4].style[0]];
      const line2 = [$boxNumbers[5].style[0], $boxNumbers[6].style[0], $boxNumbers[7].style[0], $boxNumbers[8].style[0] && $boxNumbers[9].style[0]]; 
      const line3 = [$boxNumbers[10].style[0], $boxNumbers[11].style[0], $boxNumbers[12].style[0], $boxNumbers[13].style[0], $boxNumbers[14].style[0]];
      const line4 = [$boxNumbers[15].style[0], $boxNumbers[16].style[0], $boxNumbers[17].style[0], $boxNumbers[18].style[0], $boxNumbers[19].style[0]];
      const line5 = [$boxNumbers[20].style[0], $boxNumbers[21].style[0], $boxNumbers[22].style[0], $boxNumbers[23].style[0], $boxNumbers[24].style[0]];
      const line6 = [$boxNumbers[0].style[0], $boxNumbers[5].style[0], $boxNumbers[10].style[0], $boxNumbers[15].style[0], $boxNumbers[20].style[0]];
      const line7 = [$boxNumbers[1].style[0], $boxNumbers[6].style[0], $boxNumbers[11].style[0], $boxNumbers[16].style[0], $boxNumbers[21].style[0]];
      const line8 = [$boxNumbers[2].style[0], $boxNumbers[7].style[0], $boxNumbers[12].style[0], $boxNumbers[17].style[0], $boxNumbers[22].style[0]];
      const line9 = [$boxNumbers[3].style[0], $boxNumbers[8].style[0], $boxNumbers[13].style[0], $boxNumbers[18].style[0], $boxNumbers[23].style[0]];
      const line10 = [$boxNumbers[4].style[0], $boxNumbers[9].style[0], $boxNumbers[14].style[0], $boxNumbers[19].style[0], $boxNumbers[24].style[0]];
      const line11 = [$boxNumbers[0].style[0], $boxNumbers[6].style[0], $boxNumbers[12].style[0], $boxNumbers[18].style[0], $boxNumbers[24].style[0]];
      const line12 = [$boxNumbers[4].style[0], $boxNumbers[8].style[0], $boxNumbers[12].style[0], $boxNumbers[16].style[0], $boxNumbers[20].style[0]];
      // 各ビンゴラインの配列をさらに配列化してfor以下で取得しやすいようにする
      const lines = [line1,line2,line3,line4,line5,line6,line7,line8,line9,line9,line10,line11,line12];
      // 各ラインの発火数を配列で定義
      const counts = [0,0,0,0,0,0,0,0,0,0,0,0];
      
      // 12ライン繰り返し処理
      for (let i = 0; i < lines.length; i++) {
        // 入れ子にして各ラインにおいて５回繰り返す
        for (let j = 0; j < 5; j += 1){
          // 各ラインの"background-color"の数を数える
          if (lines[i][j] === "background-color")
          counts[i] += 1;     
        }
      }
      
      // 5つ発火しているラインがある場合にはBINGO!!!と表示
      if (counts.includes(5))
        bingo.innerHTML = "BINGO!!!"
        // 4つ発火しているラインがある場合にはリーチ!と表示
        else if (counts.includes(4))
        bingo.innerHTML = "リーチ!"
      console.log(counts)
      
    




      // count1 = 0 
      // for (let a = 0 ; a < 5; a += 1){
      //   if (line1[a] === "background-color")
      //   count1 += 1;     
      // }
      // if (count1 === 4)
      // bingo.innerHTML = "リーチ"
      // console.log(line1)
      // console.log(count1)
      
      // count2 = 0
      // for (let b = 0 ; b < 5; b += 1){
      //   if (line2[b] === "background-color")
      //   count2 += 1;     
      // }
      // if (count2 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count3 = 0
      // for (let c = 0 ; c < 5; c += 1){
      //   if (line3[c] === "background-color")
      //   count3 += 1;     
      // }
      // if (count3 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count4 = 0
      // for (let d = 0 ; d < 5; d += 1){
      //   if (line4[d] === "background-color")
      //   count4 += 1;     
      // }
      // if (count4 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count5 = 0
      // for (let e = 0 ; e < 5; e += 1){
      //   if (line5[e] === "background-color")
      //   count5 += 1;     
      // }
      // if (count5 === 4)
      // bingo.innerHTML = "リーチ"
      // console.log(line5)
      // console.log(count5)
      
      // count6 = 0
      // for (let f = 0 ; f < 5; f += 1){
      //   if (line6[f] === "background-color")
      //   count6 += 1;     
      // }
      // if (count6 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count7 = 0
      // for (let g = 0 ; g < 5; g += 1){
      //   if (line7[g] === "background-color")
      //   count7 += 1;     
      // }
      // if (count7 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count8 = 0
      // for (let h = 0 ; h < 5; h += 1){
      //   if (line8[h] === "background-color")
      //   count8 += 1;     
      // }
      // if (count8 === 4)
      // bingo.innerHTML = "リーチ"
      
      // count9 = 0
      // for (let i = 0 ; i < 5; i += 1){
      //   if (line9[i] === "background-color")
      //   count9 += 1;     
      // }
      // if (count9 === 4)
      // bingo.innerHTML = "リーチ"

      // count10 = 0
      // for (let j = 0 ; j < 5; j += 1){
      //   if (line10[j] === "background-color")
      //   count10 += 1;     
      // }
      // if (count10 === 4)
      // bingo.innerHTML = "リーチ"

      // count11 = 0
      // for (let k = 0 ; k < 5; k += 1){
      //   if (line11[k] === "background-color")
      //   count11 += 1;     
      // }
      // if (count11 === 4)
      // bingo.innerHTML = "リーチ"

      // count12 = 0
      // for (let l = 0 ; l < 5; l += 1){
      //   if (line12[l] === "background-color")
      //   count12 += 1;     
      // }
      // if (count12 === 4)
      // bingo.innerHTML = "リーチ"



      // 全て発火している列をビンゴとする(発火しているboxにおいては、$boxNumbers[].style[0]が)"background-color"となるため）
      // if ($boxNumbers[0].style[0] && $boxNumbers[1].style[0] && $boxNumbers[2].style[0] && $boxNumbers[3].style[0] && $boxNumbers[4].style[0] === "background-color" ||
      // $boxNumbers[5].style[0] && $boxNumbers[6].style[0] && $boxNumbers[7].style[0] && $boxNumbers[8].style[0] && $boxNumbers[9].style[0] === "background-color" ||
      // $boxNumbers[10].style[0] && $boxNumbers[11].style[0] && $boxNumbers[12].style[0] && $boxNumbers[13].style[0] && $boxNumbers[14].style[0] === "background-color" ||
      // $boxNumbers[15].style[0] && $boxNumbers[16].style[0] && $boxNumbers[17].style[0] && $boxNumbers[18].style[0] && $boxNumbers[19].style[0] === "background-color" ||
      // $boxNumbers[20].style[0] && $boxNumbers[21].style[0] && $boxNumbers[22].style[0] && $boxNumbers[23].style[0] && $boxNumbers[24].style[0] === "background-color" ||
      // $boxNumbers[0].style[0] && $boxNumbers[5].style[0] && $boxNumbers[10].style[0] && $boxNumbers[15].style[0] && $boxNumbers[20].style[0] === "background-color" ||
      // $boxNumbers[1].style[0] && $boxNumbers[6].style[0] && $boxNumbers[11].style[0] && $boxNumbers[16].style[0] && $boxNumbers[21].style[0] === "background-color" ||
      // $boxNumbers[2].style[0] && $boxNumbers[7].style[0] && $boxNumbers[12].style[0] && $boxNumbers[17].style[0] && $boxNumbers[22].style[0] === "background-color" ||
      // $boxNumbers[3].style[0] && $boxNumbers[8].style[0] && $boxNumbers[13].style[0] && $boxNumbers[18].style[0] && $boxNumbers[23].style[0] === "background-color" ||
      // $boxNumbers[4].style[0] && $boxNumbers[9].style[0] && $boxNumbers[14].style[0] && $boxNumbers[19].style[0] && $boxNumbers[24].style[0] ==="background-color" ||
      // $boxNumbers[0].style[0] && $boxNumbers[6].style[0] && $boxNumbers[12].style[0] && $boxNumbers[18].style[0] && $boxNumbers[24].style[0] === "background-color" ||
      // $boxNumbers[4].style[0] && $boxNumbers[8].style[0] && $boxNumbers[12].style[0] && $boxNumbers[16].style[0] && $boxNumbers[20].style[0] === "background-color") {
      // // ビンゴ成立時にBINGO!!!と表示
      
      // bingo.innerHTML = "BINGO!!!"
      
      // }
    }
  
  
    

  })
})