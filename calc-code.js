function add(x, y) {
    return +x + +y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y == 0) {
        alert("You can't break my program, no dividing by 0 in my domain!");
        clearCalc();
        return;
    }
    else {
        return x / y;
    }
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    else if (operator === "-") {
        return subtract(num1, num2);
    }
    else if (operator === "*") {
        return multiply(num1, num2);
    }
    else if (operator === "/") {
        return divide(num1, num2);
    }
}

function displayValue(num) {
    if (num === ".") {
        decimalButton.disabled = true;
    }
    if (numberDisplayed.textContent ===  "+" || numberDisplayed.textContent ===  "-" || numberDisplayed.textContent ===  "*" || numberDisplayed.textContent ===  "/") {
        numberDisplayed.textContent = "";
    }
    numberDisplayed.textContent += num;
}

function operatorPressed(operator) {
    decimalButton.disabled = false;
    operatorInput.push(operator);
    numberInput.push(numberDisplayed.textContent);
    numberDisplayed.textContent = operator;
}

function equalsPressed() {
    numberInput.push(numberDisplayed.textContent);
    if (operatorInput.length === 0) {
        let placeholder = numberDisplayed.textContent;
        clearCalc();
        numberDisplayed.textContent = placeholder;
        return;
    }
    let finalValue = Math.round((operate(operatorInput[0], numberInput[0], numberInput[1])) * 1000) / 1000;
    operatorInput.shift();
    numberInput.shift();
    numberInput.shift();
    if (operatorInput.length !== 0) {
        while(operatorInput.length !== 0) {
            finalValue = operate(operatorInput[0], finalValue, numberInput[0]);
            operatorInput.shift();
            numberInput.shift();
        }
    }
    clearCalc();
    numberDisplayed.textContent = finalValue;
    decimalButton.disabled = false;
}

function clearCalc() {
    while(numberInput.length > 0) {
        numberInput.pop();
    }
    while(operatorInput.length > 0) {
        operatorInput.pop();
    }
    numberDisplayed.textContent = "";
}

function backspace() {
    numberDisplayed.textContent = numberDisplayed.textContent.slice(0, -1);
}

const numberDisplayed = document.querySelector('.display');
const decimalButton = document.querySelector('.decimal-button');
const numberInput = [];
const operatorInput = [];