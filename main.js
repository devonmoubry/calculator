var inputOne = document.querySelector('#number1');
var inputTwo = document.querySelector('#number2');
var add = document.querySelector('#add');
var subtract = document.querySelector('#subtract');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var outputArea = document.querySelector('#output-area');

function total() {
  var valueOne = parseInt(inputOne.value);
  var valueTwo = parseInt(inputTwo.value);
  var answer = valueOne + valueTwo;
  outputArea.innerText = answer;
  if (isNaN(answer) === true) {
    alert('Please enter a number.');
  }
}

  function difference() {
    var valueOne = parseInt(inputOne.value);
    var valueTwo = parseInt(inputTwo.value);
    var answer = valueOne - valueTwo;
    outputArea.innerText = answer;
    if (isNaN(answer) === true) {
      alert('Please enter a number.');
    }
}

function product() {
  var valueOne = parseInt(inputOne.value);
  var valueTwo = parseInt(inputTwo.value);
  var answer = valueOne * valueTwo;
  outputArea.innerText = answer;
  if (isNaN(answer) === true) {
    alert('Please enter a number.');
  }
}

function quotient() {
  var valueOne = parseInt(inputOne.value);
  var valueTwo = parseInt(inputTwo.value);
  var answer = valueOne / valueTwo;
  outputArea.innerText = answer;
  if (isNaN(answer) === true) {
    alert('Please enter a number.');
  }
}

add.onclick = total;
subtract.onclick = difference;
multiply.onclick = product;
divide.onclick = quotient;
