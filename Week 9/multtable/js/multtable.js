// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: Get integer from user (x)
PROCESSING: Checks user input to ensure integer is between 1-10. Then initiates a loop which creates a multiplication table based on user input.
OUTPUT: Displays multiplication table.
*/

//INPUT
function math() {
  let x = parseInt(document.getElementById("x").value);
  let tab = ""
  //PROCESSING
  if (x > 10 || !x) {
      let output = "Please enter a number between 1 - 10";
      document.getElementById("output").innerHTML = output;
    } else {
    for (let i = 1; i <= 12; i++) {
      tab += x + " X " + i + " = " + (x*i) + "<br>";
    
    
  //OUTPUT
      let output = tab;
  document.getElementById("output").innerHTML = output;
}}}
