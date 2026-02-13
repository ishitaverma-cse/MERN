let display = document.querySelector(".display")
let button = document.querySelectorAll(".buttons button")
let clearBtn = document.querySelector(".clear")
let equalBtn = document.querySelector(".equal")

button.forEach(function (button) {
    button.addEventListener("click", function () {
        display.value += button.innerText;
    });
});

clearBtn.addEventListener("click", function() {
  display.value = "";
});

equalBtn.addEventListener("click", function() {
  display.value = eval(display.value);
});