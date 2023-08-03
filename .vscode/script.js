  function addToScreen(value) {
    document.getElementById('result').value += value;
  }

  function clearScreen() {
    document.getElementById('result').value = '';
  }

  function calculate() {
    try {
      const expression = document.getElementById('result').value;
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.getElementsByClassName('touchBasse');
    for (const button of buttons) {
      button.addEventListener('click', function() {
        const buttonValue = this.textContent;
        if (buttonValue === '=') {
          calculate();
        } else if (buttonValue === 'C' || buttonValue === 'AC') {
          clearScreen();
        } else {
          addToScreen(buttonValue);
        }
      });
    }
  });
