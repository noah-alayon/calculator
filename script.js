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

let num1 = 0;
let operator = "";
let num2 = 0;

function operate(x, operator, y) {
    switch (operator) {
        case "+": return add(x, y);
        case "-": return subtract(x, y);
        case "*": return multiply(x, y);
        case "/": return divide(x, y);
    }
}