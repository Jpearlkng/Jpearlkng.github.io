const display = document.getElementById('display');
let expr = '0'; // starting expression

function render() {
  display.value = expr;
}

// Handle numbers and decimal
document.querySelectorAll('.num-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    if (expr === '0') expr = ''; // remove leading zero
    expr += btn.textContent;
    render();
  })
);

// Handle operator insertion
document.querySelectorAll('.op-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    expr = expr.trim() + ` ${btn.textContent} `;
    render();
  })
);

// Compute result
document.getElementById('equals').addEventListener('click', () => {
  try {
    const safeExpr = expr
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-');
    expr = eval(safeExpr).toString();
  } catch {
    expr = 'Error';
  }
  render();
});

// Backspace (⌫)
document.querySelector('.clear-btn').addEventListener('click', () => {
  expr = expr.trim().slice(0, -1) || '0';
  render();
});
