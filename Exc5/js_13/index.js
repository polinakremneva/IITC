let line = ""; 
let num1 = 0; 
let num2 = 0;
let resultsArray = [];
let num3 = 0;
let action = ""; 

const elemCalcLine = document.querySelector("#calcLine");

function addToCalcLine(char) {
    line += char;
    elemCalcLine.innerText = line;
}

function clearDisplay() {
    line = "";
    elemCalcLine.innerText = line;
}

function setAction(operator) {
    if (num3 == 0) {
        num1 = parseFloat(line);
    } else {
        num1 = num3;
    }
    action = operator;
    clearDisplay();
}

function calculate() {
    // if (num3 == 0){
    //     num1 == 0;
    // }
    num2 = parseFloat(line);
    let result;
    switch (action) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    // elemCalcLine.innerText = result;
    elemCalcLine.innerText = result === 0 ? 0 : result;
    resultsArray.push(result);
    console.log(resultsArray[resultsArray.length - 1]);
    num3 = resultsArray[resultsArray.length - 1];
    console.log(num3);
    action = "";
}





