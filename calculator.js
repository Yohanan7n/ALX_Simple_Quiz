// Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

// Helper to fetch values and show result
function calculateAndDisplay(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operation(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}

// Add event listeners
document.getElementById('add').addEventListener('click', function () {
    calculateAndDisplay(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculateAndDisplay(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculateAndDisplay(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculateAndDisplay(divide);
});
