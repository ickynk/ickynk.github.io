// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: Get integer from user (x)
PROCESSING: Initiate a loop that repeats until the value of (i) surpases the value of (x). If i is an odd number add the value to (sum).
OUTPUT: Display (sum) on the screen.
*/
// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to hr, w and output.
//INPUT
function math() {
  let x = parseInt(document.getElementById("x").value);
  let sum = 0;
  //PROCESSING
  for (let i = 1; i <= x; i++) {
    if (i % 2 != 0) sum += i;
  }
  //OUTPUT
  let output = sum;
  document.getElementById("output").innerHTML = output;
}
