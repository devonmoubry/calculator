var inputOne = document.querySelector('#number1');
var inputTwo = document.querySelector('#number2');
var submit = document.querySelector('#submit');
var outputArea = document.querySelector('#output-area');
submit.onclick = total;

function total() {
  var valueOne = parseInt(inputOne.value);
  var valueTwo = parseInt(inputTwo.value);
  var answer = valueOne + valueTwo;

  outputArea.innerText = answer;

  if (isNaN(answer) === true) {
    alert('Please enter a number.');
  }
}
