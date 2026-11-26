function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, operator, y) {
    switch (operator) {
        case "+": return add(x, y);
        case "-": return subtract(x, y);
        case "*": return multiply(x, y);
        case "/": return divide(x, y);
    }
}

let num1 = "";
let operator = "";
let num2 = "";

const divNum1 = document.querySelector("#num1");
const divOperator = document.querySelector("#operator");
const divNum2 = document.querySelector("#num2");

const buttonContainer = document.querySelector(".button-container");

let inputNum1 = false;
let inputNum2 = false;

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.className) {
        case "digit":
            if (!inputNum1) {
                num1 += target.innerText;
                divNum1.innerText = num1;
            }
            else if (!inputNum2) {
                num2 += target.innerText;
                divNum2.innerText = num2;
            }
            break;
        case "operator":
            if (!inputNum1) {
                if (num1 == "") {
                    num1 = "0";
                    divNum1.innerText = "0";
                }
                inputNum1 = true;
            }
            else if (!inputNum2) {
                inputNum2 = true;
            }
            divOperator.innerText = target.innerText;
            break;
    }
});