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
    screen.textContent = secondNumber.join('');
  }
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
  console.log(result);
  screen.textContent = result;
  secondNumber = [];
  firstNumber = [];
  firstNumber.push(result);
}

/*function doTheFunction(e) {
  const screen = document.querySelector('.displayScreen');
  screen.textContent = operator.join('');
  button = document.querySelector(e.textContent);
  operator.pop();
  operator.push(button.textContent);
  screen.textContent = operator;
}*/

function doTheAddition() {
  const screen = document.querySelector('.displayScreen');
  screen.textContent = operator.join('');
  operator.pop();
  operator.push('+');
  screen.textContent = operator;
}
function doTheSubtraction() {
  const screen = document.querySelector('.displayScreen');
  screen.textContent = operator.join('');
  operator.pop();
  operator.push('-');
  screen.textContent = operator;
}
function doTheMultiplication() {
  const screen = document.querySelector('.displayScreen');
  screen.textContent = operator.join('');
  operator.pop();
  operator.push('*');
  screen.textContent = operator;
}
function doTheDivision() {
  const screen = document.querySelector('.displayScreen');
  screen.textContent = operator.join('');
  operator.pop();
  operator.push('/');
  screen.textContent = operator;
}

let calcButtons = document.getElementsByClassName('numberButton');
for (let i = 0; i <= 10; i++) {
  calcButtons[i].addEventListener('click', buttonPress);
}
