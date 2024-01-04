document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addButton').addEventListener('click', function () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');

    if (!isNaN(num1) && !isNaN(num2)) {
      var result = num1 + num2;
      resultElement.innerHTML = 'Result: ' + result;
    } else {
      resultElement.innerHTML = 'Please enter valid numbers';
    }
  });
});
