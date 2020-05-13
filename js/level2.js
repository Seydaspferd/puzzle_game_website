var input = document.getElementById('inputid');
var password = 'h5f7';
var password2 = 'h5 f7';
var password3 = 'h5,f7';
var levelbutton = document.getElementById('levelbtn');

document.getElementById('answerbtn').addEventListener('click', solveFunction);

function solveFunction() {
  var lowerCaseInput = input.value.toLowerCase();

  if (
    lowerCaseInput === password ||
    lowerCaseInput === password2 ||
    lowerCaseInput === password3
  ) {
    levelbutton.style.display = 'block';
  }
}
