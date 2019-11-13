const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display span");
let decimalFlag = false;

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
    }

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach(k =>
      k.classList.remove("is-depressed")
    );

    // if (!action) {
    //   if (displayedNum === "0") {
    //     display.textContent = keyContent;
    //   } else {
    //     display.textContent = displayedNum + keyContent;
    //   }
    // }

    if (action === "decimal" && !decimalFlag) {
      display.textContent = displayedNum + ".";
      decimalFlag = true;
    }

    if (!action) {
      console.log("number key!");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }
    if (action === "decimal") {
      console.log("decimal key!");
    }

    if (action === "clear") {
      console.log("clear key!");
    }

    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});

// const CALCULATOR = document.querySelector(".calculator");
// const KEYS = CALCULATOR.querySelector(".calculator__keys");
// const DISPLAY = document.querySelector("calculator__display");

// KEYS.addEventListener("click", e => {
//   if (e.target.matches("button")) {
//     const KEY = e.target;
//     const ACTION = KEY.dataset.action;
//     const KEY_CONTENT = KEY.textContent;
//     const DISPLAYED_NUM = DISPLAY.textContent;

//     if (!ACTION) {
//       if (DISPLAYED_NUM === "0") {
//         DISPLAY.textContent = KEY_CONTENT;
//       }
//     }

//     if (!ACTION) {
//       if (DISPLAYED_NUM === '0') {
//         DISPLAY.textContent = KEY_CONTENT
//       } else {
//         DISPLAY.textContent = DISPLAYED_NUM + KEY_CONTENT
//       }
//     }

//     if (!ACTION) {
//       console.log("number key!");
//     }
//     if (
//       ACTION === "add" ||
//       ACTION === "subtract" ||
//       ACTION === "multiply" ||
//       ACTION === "divide"
//     ) {
//       console.log("operator key!");
//     }
//     if (ACTION === "decimal") {
//       console.log("decimal key!");
//     }

//     if (ACTION === "clear") {
//       console.log("clear key!");
//     }

//     if (ACTION === "calculate") {
//       console.log("equal key!");
//     }
//   }
// });
