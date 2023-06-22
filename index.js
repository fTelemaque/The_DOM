let firstInput = document.getElementById('a');
let secondInput = document.getElementById('b');
let button = document.querySelector('addition');
let result = document.getElementById("result");

function calculateAdd() {
  sum = +firstInput.value + +secondInput.value;
  result.innerHTML = sum;
}

function calculateSub() {
    sub = +firstInput.value - +secondInput.value;
    result.innerHTML = sub;
  }

  function calculateMulti() {
    multi = +firstInput.value * +secondInput.value;
    result.innerHTML = multi;
  }

  function calculateModulo() {
    modulo = +firstInput.value % +secondInput.value;
    result.innerHTML = modulo;
  }
