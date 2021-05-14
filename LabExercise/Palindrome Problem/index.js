function evalPalindrome() {                                                              //A function the evaluates if the inputted string is a plaindrome or not

  var string = document.getElementById('string').value                                   // gets the value of the string

  var regExp = /[\W_]/g;                                                                 //regEx values to by replaced by ""
  var repLow = string.replace(regExp, "").toLowerCase();                                 // replace the value of regEx with "" and lowers the case
  var revString = repLow.split("").reverse().join("");                                   //splits the string then reverse it, then join the splitted string

  if (repLow === revString) {                                                            // a condition that prints if the string is palindrome or not
    document.getElementById('palindrome').value = 'This string is a palindrome.';        // prints this if the string is a palindrome
  } else {
    document.getElementById('palindrome').value = 'This string is not a palindrome.';    // prints this if the string is not a palindrome
  }
}
