var input = document.getElementById('inputid');
var password = 'symbol';
var levelbutton = document.getElementById('levelbtn');

document.getElementById('answerbtn').addEventListener('click', solveFunction);
document.getElementById('hintbtn').addEventListener('click', hintFunction);

function solveFunction() {
  var lowerCaseInput = input.value.toLowerCase();

  if (lowerCaseInput === password) {
    levelbutton.style.display = 'block';
  }
}

function hintFunction() {
  document.getElementById('hintdiv').style.display = 'block';
}
