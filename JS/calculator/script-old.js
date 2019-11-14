const calculate = (n1, operator, n2) => {
  let result = 0;

  switch (operator) {
    case "add":
      result = parseFloat(n1) + parseFloat(n2);
      break;
    case "subtract":
      result = parseFloat(n1) - parseFloat(n2);
      break;
    case "multiply":
      result = parseFloat(n1) * parseFloat(n2);
      break;
    case "divide":
      result = parseFloat(n1) / parseFloat(n2);
      break;
  }
  console.log(result);
  return result;
};

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display span");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    // Use data-action to determine key type that is clicked
    const key = e.target;
    const action = key.dataset.action;

    // ==========================
    // === a number key (0–9) ===
    // ==========================
    /* need to know two things:
      - The number of the key that was clicked
      - The current displayed number */
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    // - If the calculator shows 0, we want to replace the calculator’s display with the clicked key.
    // - If the previousKeyType is an operator, we want to replace the displayed number with clicked number.
    const previousKeyType = calculator.dataset.previousKeyType;
    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent += keyContent;
      }
    }

    // ======================================
    // === an operator key (+, -, ×, ÷) ===
    // ======================================
    /* If User hits an operator key, the operator should be highlighted
    so User knows the operator is active.
    To do so, we can add the is-depressed class to the operator key.
    */
    /*
    ================
    == REFACTORED ==
    ================

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
      // get the first number & operator
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    */

    switch (action) {
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        key.classList.add("is-depressed");
        // Add custom attribute
        calculator.dataset.previousKeyType = "operator";
        // get the first number & operator
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;

        // Note: It's sufficient to check for firstValue and operator because secondValue always exists
        if (firstValue && operator && previousKeyType !== "operator") {
          const calcValue = calculate(firstValue, operator, secondValue);
          display.textContent = calcValue;

          // Update calculated value as firstValue
          calculator.dataset.firstValue = calcValue;
        } else {
          // If there are no calculations, set displayedNum as the firstValue
          calculator.dataset.firstValue = displayedNum;
        }
        console.log("operator key!");
        break;
      case "decimal":
        console.log("decimal key!");
        calculator.dataset.previousKeyType = "decimal";
        break;
      case "clear":
        console.log("clear key!");
        calculator.dataset.previousKeyType = "clear";
        break;
      case "calculate":
        console.log("equal key!");
        calculator.dataset.previousKeyType = "calculate";
        break;
      default:
        console.log("number key!");
        calculator.dataset.previousKeyType = "number";
        break;
    }

    // =======================
    // === the decimal key ===
    // =======================
    /*
    When User hits the decimal key, a decimal should appear on the display.
    If User hits any number after hitting a decimal key, the number should be appended on the display as well.
    */

    /*
    =================
    == NOT WORKING ==
    =================
    // Do nothing if string has a dot
    if (action === "decimal" && !displayedNum.includes(".")) {
      display.textContent += ".";
      // Display '0.' after operator clicked
      if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
    }
    */

    // Do nothing if string has a dot
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent += ".";
        // Display '0.' after operator clicked
      } else if (previousKeyType === "operator") {
        display.textContent = "0.";
      }
    }

    /*
    When User hits a number key again, the previous display should be replaced with the new number.
    The operator key should also release its pressed state.
    */

    Array.from(key.parentNode.children).forEach(k => {
      k.classList.remove("is-depressed");
    });

    // =====================
    // === the equal key ===
    // =====================
    /* Calculator should calculate a result that depends on three values:
    - The first number entered into the calculator
    - The operator
    - The second number entered into the calculator*/

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      display.textContent = calculate(firstValue, operator, secondValue);
    }

    // =====================
    // === the clear key ===
    // =====================
    if (action === "clear") {
      display.textContent = 0;
    }
  }
});
