let num1 = '';
let num2 = '';
let action = '';
let elemCalcLine = document.querySelector("#calcLine");

function addToCalcLine(value) {
    elemCalcLine.innerText = value;
}

function setAction(operator) {
    action = operator;
    num1 = elemCalcLine.innerText;
    clearDisplay();
}

function calculate() {
    num2 = elemCalcLine.innerText;
    let result;
    switch (action) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return;
    }
    elemCalcLine.innerText = result;
    num1 = '';
    num2 = '';
    action = '';
}

function clearDisplay() {
    elemCalcLine.innerText = '';
}




