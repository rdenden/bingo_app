// １〜９９の配列を用意
let numbers = Array.from(new Array(99)).map((v,i) => i + 1)

// ビンゴシートを出力
window.addEventListener('load', () => {
  $boxNumbers = document.getElementsByName('box')
  let boxNumbersIndex = 0
  // 後のビンゴ判定において使うためシート上の数字を配列化するための処理
  let sheetNumbers = []
  //数字の出力を２５回ループ
  while(boxNumbersIndex < $boxNumbers.length){
    // １〜99の配列のうちからランダムにシートに出力
    num = numbers[Math.floor(Math.random() * numbers.length)]
    $boxNumbers[boxNumbersIndex].innerHTML = num
    // 回数表示
    // 配列から出力させた数字を除く
    index = numbers.indexOf(num)
    numbers.splice(index,1)
    // シート上の数字を配列に格納
    sheetNumbers[boxNumbersIndex] = num
    boxNumbersIndex++
    // 確認用
    console.log(sheetNumbers)
  }

  // ボタンをクリックするごとに数字を１つずつ出力
  let numbers2 = Array.from(new Array(99)).map((v,i) => i + 1)
  const clickButton = document.getElementById('number-button')
  clickButton.addEventListener("click",() => {
  
    const number = document.getElementById('number')  
    let num2 = numbers2[Math.floor(Math.random() * numbers2.length)]
    
    // undefinedを書き換える
    if (num2 === undefined){
      number.innerHTML = '終'
    }else{
    number.innerHTML = num2 
    index = numbers2.indexOf(num2)
    numbers2.splice(index,1)
    // 確認用
    console.log(numbers2)
    let sheetNumbersIndex = 0
    

    // リーチ判定
  
    // 以下ビンゴ判定。１２パターンを全て列挙
    while(sheetNumbersIndex < sheetNumbers.length){
      // 出力した数字と一致するものがシートにあったときそのボックスを赤くする
      if (num2 == sheetNumbers[sheetNumbersIndex]){
        $boxNumbers[sheetNumbersIndex].setAttribute("style", "background-color:#ff0000;")
      }
      sheetNumbersIndex++
    }
      // 全て発火している列をビンゴとする
      if ($boxNumbers[0].style[0] && $boxNumbers[1].style[0] && $boxNumbers[2].style[0] && $boxNumbers[3].style[0] && $boxNumbers[4].style[0]== "background-color" ||
      $boxNumbers[5].style[0] && $boxNumbers[6].style[0] && $boxNumbers[7].style[0] && $boxNumbers[8].style[0] && $boxNumbers[9].style[0] == "background-color" ||
      $boxNumbers[10].style[0] && $boxNumbers[11].style[0] && $boxNumbers[12].style[0] && $boxNumbers[13].style[0] && $boxNumbers[14].style[0] == "background-color" ||
      $boxNumbers[15].style[0] && $boxNumbers[16].style[0] && $boxNumbers[17].style[0] && $boxNumbers[18].style[0] && $boxNumbers[19].style[0] == "background-color" ||
      $boxNumbers[20].style[0] && $boxNumbers[21].style[0] && $boxNumbers[22].style[0] && $boxNumbers[23].style[0] && $boxNumbers[24].style[0] == "background-color" ||
      $boxNumbers[0].style[0] && $boxNumbers[5].style[0] && $boxNumbers[10].style[0] && $boxNumbers[15].style[0] && $boxNumbers[20].style[0] == "background-color" ||
      $boxNumbers[1].style[0] && $boxNumbers[6].style[0] && $boxNumbers[11].style[0] && $boxNumbers[16].style[0] && $boxNumbers[21].style[0] == "background-color" ||
      $boxNumbers[2].style[0] && $boxNumbers[7].style[0] && $boxNumbers[12].style[0] && $boxNumbers[17].style[0] && $boxNumbers[22].style[0] == "background-color" ||
      $boxNumbers[3].style[0] && $boxNumbers[8].style[0] && $boxNumbers[13].style[0] && $boxNumbers[18].style[0] && $boxNumbers[23].style[0] == "background-color" ||
      $boxNumbers[4].style[0] && $boxNumbers[9].style[0] && $boxNumbers[14].style[0] && $boxNumbers[19].style[0] && $boxNumbers[24].style[0] == "background-color" ||
      $boxNumbers[0].style[0] && $boxNumbers[6].style[0] && $boxNumbers[12].style[0] && $boxNumbers[18].style[0] && $boxNumbers[24].style[0] == "background-color" ||
      $boxNumbers[4].style[0] && $boxNumbers[8].style[0] && $boxNumbers[12].style[0] && $boxNumbers[16].style[0] && $boxNumbers[20].style[0] == "background-color") {
      // ビンゴ成立時にBINGO!!!と表示
      const bingo = document.getElementById('bingo')  
      bingo.innerHTML = "BINGO!!!"
    }
  }
  
  
    

  })
})