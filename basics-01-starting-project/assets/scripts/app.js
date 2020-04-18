const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult += parseInt(userInput.value)
  outputResult(currentResult, "");
}

function substract() {
  currentResult -= parseInt(userInput.value)
  outputResult(currentResult, "");
}

function multiply() {
  currentResult *= parseInt(userInput.value)
  outputResult(currentResult, "");
}

function divide() {
  currentResult /= parseInt(userInput.value)
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


