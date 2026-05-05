// const { add, subtract, multiply, divide } = require('./calculatorLogic').default;

// function getValues() {
//     const num1 = parseFloat(document.getElementById('num1').value) || 0;
//     const num2 = parseFloat(document.getElementById('num2').value) || 0;
//     return { num1, num2 };
// }

// function showResult(value) {
//     document.getElementById('result').innerText = `Result: ${value}`;  
  

//    }

// function handleAdd() {
//     const { num1, num2 } = getValues();
//     showResult(add(num1, num2));

// }

// function handleSubtract() {
//     const { num1, num2 } = getValues();
//     showResult(subtract(num1, num2));
// }

// function handleMultiply() {
//     const { num1, num2 } = getValues();
//     showResult(multiply(num1, num2));
// }

// function handleDivide() {
//     const { num1, num2 } = getValues();
//     showResult(divide(num1, num2));
// }





function getValues() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    return { num1, num2 };
}

function showResult(value) {
    document.getElementById('result').innerText = `Result: ${value}`;
}

function add() {
    const { num1, num2 } = getValues();
    showResult(num1 + num2);
}

function subtract() {
    const { num1, num2 } = getValues();
    showResult(num1 - num2);
}

function multiply() {
    const { num1, num2 } = getValues();
    showResult(num1 * num2);
}

function divide() {
    const { num1, num2 } = getValues();

    if (num2 === 0) {
        showResult('Cannot divide by zero');
        return;
    }

    showResult(num1 / num2);
}