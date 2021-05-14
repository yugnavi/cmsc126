function ansBinary() {                                                 // A function the converts decimal value to binary

  var decimal = parseInt(document.getElementById('posInt').value)      // a variable that gets the input value
  var binary = decimal.toString(2);                                    //A variable the transform decimal to binary

  if (decimal < 0) {
    alert('Invalid input. Please only enter a positive integer.');     // notify if you input an invalid number
  } else {
    document.getElementById('ansInt').value = decimal;                 // prints the value of the positive integer
    document.getElementById('binary').value = binary;                  //prints the value of the binary
  }
}
