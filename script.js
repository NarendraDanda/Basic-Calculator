function appendToDisplay(input) {
    display.value += input;
  }
  function clearScreen() {
    display.value = "";
  }
  function calculate() {
    display.value = eval(display.value)
  }