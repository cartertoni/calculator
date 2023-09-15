let symbol,
  num1,
  num2 = ''

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListener('click', e => handleClick(e)))

const handleClick = e => {
  if (Number.isInteger(parseInt(e.target.id))) setNumbers(e)
  else {
    if (e.target.id == 'equals') {
      num1 = computeAnswer(e)
      setDisplay(num1)
      reset()
    } else {
      symbol = e.target.id
      setDisplay(symbol)
    }
  }
}

const setNumbers = e => {
  if (!num1) {
    num1 = e.target.id
    setDisplay(num1)
  } else if (num1 && !symbol) {
    num1 = num1.concat(e.target.id)
    setDisplay(num1)
  } else {
    num2 = num2.concat(e.target.id)
    setDisplay(num2)
  }
}

const computeAnswer = e => {
  if (symbol == 'subtract') return parseInt(num1) - parseInt(num2)
  else if (symbol == 'add') return parseInt(num1) + parseInt(num2)
  else if (symbol == 'divide') return parseInt(num1) / parseInt(num2)
  else if (symbol == 'multiply') return parseInt(num1) * parseInt(num2)
}

const reset = () => {
  num2 = ''
  symbol = ''
}

const setDisplay = value => {
  const display = document.querySelector('.display')
  display.innerText = value
}
