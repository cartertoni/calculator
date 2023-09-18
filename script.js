let symbol = ''
let num1 = ''
let num2 = ''
let result = 0

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', e => handleClick(e)))

const handleClick = e => {
  if (e.target.id == 'equals') {
    result = computeAnswer()
    setDisplay(result)
    num1 = result
    num2 = ''
  } else if (e.target.id == 'clear') {
    clearMemory()
  } else if (Number.isInteger(parseInt(e.target.id))) {
    setNumbers(e)
  } else {
    handleSymbol(e)
  }
}

// const setNumbers = e => {
//   if (!symbol) {
//     num1 = num1.concat(e.target.id)
//     setDisplay(num1)
//   } else {
//     num2 = num2.concat(e.target.id)
//     setDisplay(num2)
//   }
// }

const setNumbers = e => {
  if (result) {
    num2 = num2.concat(e.target.id)
    setDisplay(num2)
  } else if (!result && !symbol) {
    num1 = num1.concat(e.target.id)
    setDisplay(num1)
  } else {
    num2 = num2.concat(e.target.id)
    setDisplay(num2)
  }
}

const computeAnswer = () => {
  if (symbol == 'subtract') return parseFloat(num1) - parseFloat(num2)
  else if (symbol == 'add') return parseFloat(num1) + parseFloat(num2)
  else if (symbol == 'divide') return parseFloat(num1) / parseFloat(num2)
  else if (symbol == 'multiply') return parseFloat(num1) * parseFloat(num2)
}

const resetNumbers = () => {
  num1 = ''
  num2 = ''
  symbol = ''
}

const setDisplay = value => {
  const display = document.querySelector('.display')
  value || result == 0
    ? (display.innerText = value)
    : (display.innerText = 'ERROR')
}

const clearMemory = () => {
  symbol = ''
  num1 = ''
  num2 = ''
  result = 0
  setDisplay('')
}

const handleSymbol = e => {
  if (result && !num2) {
    symbol = e.target.id
  } else if (symbol) {
    result = computeAnswer()
    setDisplay(result)
    num1 = result
    num2 = ''
    symbol = e.target.id
  } else {
    symbol = e.target.id
  }
}
