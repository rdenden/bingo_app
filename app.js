let numbers = Array.from(new Array(99)).map((v,i) => i + 1)

window.addEventListener('load', () => {
  $boxNumbers = document.getElementsByName('box')
  let boxNumbersIndex = 0
  let sheetNumbers = []
  while(boxNumbersIndex < $boxNumbers.length){
    num = numbers[Math.floor(Math.random() * numbers.length)]
    $boxNumbers[boxNumbersIndex].innerHTML = num
    index = numbers.indexOf(num)
    numbers.splice(index,1)
    sheetNumbers[boxNumbersIndex] = num
    boxNumbersIndex++
    console.log(sheetNumbers)
  }

  let numbers2 = Array.from(new Array(99)).map((v,i) => i + 1)
  const clickButton = document.getElementById('number-button')
  clickButton.addEventListener("click",() => {
  
    const number = document.getElementById('number')  
    let num2 = numbers2[Math.floor(Math.random() * numbers2.length)]
    if (num2 === undefined){
      number.innerHTML = '完'
    }else{
    number.innerHTML = num2 
    index = numbers2.indexOf(num2)
    numbers2.splice(index,1)
    console.log(numbers2)
    let sheetNumbersIndex = 0
    while(sheetNumbersIndex < sheetNumbers.length){
      if (num2 == sheetNumbers[sheetNumbersIndex]){
        $boxNumbers[sheetNumbersIndex].setAttribute("style", "background-color:#ff0000;")
      }
      sheetNumbersIndex++
    }
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
      const bingo = document.getElementById('bingo')  
      bingo.innerHTML = "BINGO!!!"
    }
    }

  })
})