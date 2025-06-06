// Original functional logic
function appendToDisplay(inp) {
    let display = document.getElementById('display');
    display.value += inp;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = "";
}

function deleteLast() {
    let anDisplay = document.getElementById('display');
    let display = document.getElementById('display').value;
    anDisplay.value = display.substring(0, display.length - 1);
}

function calculateResult() {
    let newResult = document.getElementById('display');
    let result = eval(document.getElementById('display').value);
    newResult.value = result;
}

// Create main calculator container
const calculator = document.createElement("div");
calculator.className = "calculator";

// Create display input
const display = document.createElement("input");
display.type = "text";
display.id = "display";
display.disabled = true;
calculator.appendChild(display);

// Create button container
const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons";

// Button definitions
const buttonData = [
    ['C', 'clearDisplay()'],
    ['←', 'deleteLast()'],
    ['/', "appendToDisplay('/')"],
    ['*', "appendToDisplay('*')"],
    ['7', "appendToDisplay('7')"],
    ['8', "appendToDisplay('8')"],
    ['9', "appendToDisplay('9')"],
    ['-', "appendToDisplay('-')"],
    ['4', "appendToDisplay('4')"],
    ['5', "appendToDisplay('5')"],
    ['6', "appendToDisplay('6')"],
    ['+', "appendToDisplay('+')"],
    ['1', "appendToDisplay('1')"],
    ['2', "appendToDisplay('2')"],
    ['3', "appendToDisplay('3')"],
    ['0', "appendToDisplay('0')"],
    ['.', "appendToDisplay('.')"],
    ['=', "calculateResult()", 'equal']
];

// Create buttons using simplified loop
for (const [label, action, extraClass] of buttonData) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = extraClass ? `btn ${extraClass}` : 'btn';
    btn.onclick = () => eval(action);
    buttonsContainer.appendChild(btn);
}

// Final assembly
calculator.appendChild(buttonsContainer);
document.body.appendChild(calculator);
