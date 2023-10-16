let firstNumber = [];
let secondNumber = [];
let operator = [];
const screen = document.querySelector('.displayScreen');

function buttonPress(e) {
  if (operator == false) {
    firstNumber.push(e.target.textContent);
    screen.textContent = firstNumber.join('');
  } else {
    secondNumber.push(e.target.textContent);
    screen.textContent =
      firstNumber.join('') + operator.join('') + secondNumber.join('');
  }
}

function doTheFunction(e) {
  secondNumber = [];
  operator.pop();
  operator.push(e.target.textContent);
  screen.textContent = firstNumber.join('') + operator.join('');
}

function clearScreen() {
  screen.textContent = '';
  firstNumber = [];
  secondNumber = [];
  operator.pop();
}

function doTheEqual() {
  x = Number(firstNumber.join(''));
  y = Number(secondNumber.join(''));
  if (operator[0] == '+') {
    result = x + y;
  } else if (operator[0] == '-') {
    result = x - y;
  } else if (operator[0] == '*') {
    result = x * y;
  } else if (operator[0] == '/') {
    result = x / y;
  }
  screen.textContent = result;
  secondNumber = [];
  firstNumber = [];
  firstNumber.push(result);
}

let numberButtons = document.getElementsByClassName('numberButton');
for (let i = 0; i <= numberButtons.length; i++) {
  let x = numberButtons[i];
  if (x) {
    x.addEventListener('click', buttonPress);
  }
}

let functionButtons = document.getElementsByClassName('functionButton');
for (let i = 0; i <= functionButtons.length; i++) {
  let x = functionButtons[i];
  if (x) {
    x.addEventListener('click', doTheFunction);
  }
}
