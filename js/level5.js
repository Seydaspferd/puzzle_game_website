var input = document.getElementById('inputid');
var password = 'rainbow';
var levelbutton = document.getElementById('levelbtn');

document.getElementById('answerbtn').addEventListener('click', solveFunction);

function solveFunction() {
  var lowerCaseInput = input.value.toLowerCase();

  if (lowerCaseInput === password) {
    levelbutton.style.display = 'block';
  }
}

//rainbow background

const body = document.body;
var counter = 0;

body.addEventListener('click', changeColor);

function changeColor() {
  if (counter === 0) {
    body.style.backgroundColor = 'red';
  } else if (counter === 1) {
    body.style.backgroundColor = 'orange';
  } else if (counter === 2) {
    body.style.backgroundColor = 'yellow';
  } else if (counter === 3) {
    body.style.backgroundColor = 'green';
  } else if (counter === 4) {
    body.style.backgroundColor = 'blue';
  } else if (counter === 5) {
    body.style.backgroundColor = 'indigo';
    document.getElementById('clouddiv').style.display = 'block';
  } else if (counter === 6) {
    body.style.backgroundColor = 'violet';
    document.getElementById('sundiv').style.display = 'block';
    counter = -1;
  }

  counter++;
}
