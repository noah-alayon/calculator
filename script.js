// x : string
// operator : string
// y : string
function operate(x, operator, y) {
    x = Number(x);
    y = Number(y);

    switch (operator) {
        case "+": return x + y;
        case "-": return x - y;
        case "*": return x * y;
        case "/": return (x / y).toFixed(3);
    }
}

// Used to update the display
const divNum1 = document.querySelector("#num1");
const divOperator = document.querySelector("#operator");
const divNum2 = document.querySelector("#num2");

// x : string
// operator : string
// y : string
function updateDisplay(x, operator, y) {
    divNum1.innerText = x;
    divOperator.innerText = operator;
    divNum2.innerText = y;
}

let num1 = "";
let operator = "";
let num2 = "";

// Only need to know if num1 was inputted
// If num1 is inputted, then switch to input num2
let inputNum1 = false;

// True if expression was recently evaluated
let evaluated = false;

const buttonContainer = document.querySelector(".button-container");

// Use event delegation to add event listeners to all buttons
buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.className) {
        case "digit":
            if (!inputNum1) {
                if (evaluated) num1 = "";
                num1 += target.innerText;
                divNum1.innerText = num1;
            }
            else {
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
            // Evaluate and update the display
            if (num1 != "" && num2 != "") {
                num1 = String(operate(num1, operator, num2));
                operator = "";
                num2 = "";
                updateDisplay(num1, operator, num2);
            }
            operator = target.innerText;
            divOperator.innerText = target.innerText;
            break;
        case "equal":
            // Evaluate and update the display
            if (num1 != "" && num2 != "") {
                num1 = String(operate(num1, operator, num2));
                operator = "";
                num2 = "";
                inputNum1 = false;
                evaluated = true;
                updateDisplay(num1, operator, num2);
            }
            break;
        case "clear":
            num1 = "";
            operator = "";
            num2 = "";
            divNum1.innerText = num1;
            divOperator.innerText = operator;
            divNum2.innerText = num2;
            inputNum1 = false;
            evaluated = false;
            break;
    }
});