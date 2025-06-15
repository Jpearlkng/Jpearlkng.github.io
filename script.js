// some vars to keep track of stuff
let display = document.getElementById('display');
let currentInput = '0'; 

function updateDisplay() {
    display.value = currentInput; // show what we typed
    // maybe add a limit later
}

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') currentInput = ''; // replace zero with new number
        currentInput += button.textContent; // add the number
        updateDisplay(); // update the screen
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += ' ' + button.textContent + ' '; // add space around operator
        updateDisplay(); // update again
        
    });
});

document.getElementById('equals').addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString(); // try to calculate
        updateDisplay(); // show result
    } catch (e) {
        currentInput = 'Oops!'; // error message
        updateDisplay();
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1) || '0'; // backspace, hope this works
    updateDisplay(); // update screen
    // maybe add a full clear option later?
});