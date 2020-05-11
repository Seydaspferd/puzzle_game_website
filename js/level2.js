var input = document.getElementById('inputid');
var password = 'h5f7';
var levelbutton = document.getElementById('levelbtn');

document.getElementById('answerbtn').addEventListener('click', solveFunction);

function solveFunction() {
  var lowerCaseInput = input.value.toLowerCase();

  if (lowerCaseInput === password) {
    levelbutton.style.display = 'block';
  }
}
