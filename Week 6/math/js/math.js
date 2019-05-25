// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT: HTML generates a series of options for the user to select. JS will receive input from the user. 
PROCESSING: Using a switch method the input will be matched with one of the options. This will generate a value for "shoe"
OUTPUT: Concatenates a message along with the shoe value.
*/
//INPUT
//PROCESSING
function genQuestion(max, min) {
  min = Math.ceil(1);
  max = Math.floor(101);
  var a = Math.floor(Math.random() * (max - min)) + min;
  var b = Math.floor(Math.random() * (max - min)) + min;
//OUTPUT
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
}
function checkAns() {
  let ans = parseInt(document.getElementById("ans").value);
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  if (a + b == ans) {
    let output = "Correct! Good job."
    document.getElementById("output").innerHTML = output;
  } else {
    let output = "Sorry. That is incorrect."
    document.getElementById("output").innerHTML = output;
  }
}