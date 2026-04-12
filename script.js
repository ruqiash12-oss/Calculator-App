let calculation = localStorage.getItem('updateCalculation') || '';
showResult();

function Calculation(value){
  const operators = ['+', '-', '*', '/'];

  if (calculation === '' && operators.includes(value) && value !== '-') return;

  const lastChar = calculation.slice(-1);

  if (operators.includes(lastChar) && operators.includes(value)) {
    calculation = calculation.slice(0, -1) + value;
    localStorage.setItem('updateCalculation', calculation);
    showResult();
    return;
  }

  if (value === '.') {
    const parts = calculation.split(/[+\-*/]/);
    const lastNumber = parts[parts.length - 1];
    if (lastNumber.includes('.')) return;

    if (calculation === '' || operators.includes(lastChar)) value = '0.';
  }

  calculation += value;
  localStorage.setItem('updateCalculation', calculation);
  showResult();
}

function showResult(){
  const prev = document.querySelector('[data-previous-operand]');
  const curr = document.querySelector('[data-current-operand]');

  if (!prev || !curr) {
    const show = document.querySelector('.display');
    show.textContent = calculation;
    return;
  }

  prev.textContent = '';
  curr.textContent = calculation;
}

function clearResult(){
  calculation = '';
  localStorage.setItem('updateCalculation', calculation);
  showResult();
}

function deleteResult(){
  calculation = calculation.slice(0, -1);
  localStorage.setItem('updateCalculation', calculation);
  showResult();
}
function calculateResult(){
  if (!calculation.trim()) return;

  if (/[+\-*/.]$/.test(calculation)) return;

  try {
    const result = eval(calculation);
    if (!Number.isFinite(result)) return;

    calculation = String(result);
    localStorage.setItem('updateCalculation', calculation);
    showResult();
  } catch (e) {}
}