let currentNumber = '';
let operationType = '';
let storedNumber = '';

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('result').value = currentNumber;
}

function operation(operator) {
  if (currentNumber !== '') {
    storedNumber = currentNumber;
    currentNumber = '';
    operationType = operator;
  }
}

function calculate() {
  let result = 0;
  const num1 = parseFloat(storedNumber);
  const num2 = parseFloat(currentNumber);

  if (operationType === '+') {
    result = num1 + num2;
  } else if (operationType === '-') {
    result = num1 - num2;
  } else if (operationType === '*') {
    result = num1 * num2;
  } else if (operationType === '/') {
    result = num1 / num2;
  }

  document.getElementById('result').value = result;
  currentNumber = '';
  storedNumber = '';
}

function reset() {
  currentNumber = '';
  operationType = '';
  storedNumber = '';
  document.getElementById('result').value = '';
}
