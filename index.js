let operator = "";
let previousValue = "";
let currentValue = "";

let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operation");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  })
);

operators.forEach((op) =>
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
    currentScreen.textContent = currentValue;
  })
);

equal.addEventListener("click", function () {
  previousScreen.textContent = previousValue + " " + operator + currentValue;
  calculate();
  currentScreen.textContent = previousValue;
});

clear.addEventListener("click", function () {
  operator = "";
  previousValue = "";
  currentValue = "";
  previousScreen.textContent = currentValue;
  currentScreen.textContent = currentValue;
});

function handleNumber(num) {
  currentValue += num;
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  console.log(previousValue);
}
