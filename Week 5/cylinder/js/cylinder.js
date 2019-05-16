// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/* Design Table
INPUT: Designate r as radius and h as height, receive input from HTML form.
PROCESSING: Complete formula for finding the volume of a cylinder in inches cubed and then convert inches cubed to liters. 
OUTPUT: Updates the output value in HTML and displays on screen. 
*/

// INPUT
function math() {
  let r = document.getElementById("r").value;
  let h = document.getElementById("h").value;
  let output = document.getElementById("output");
// PROCESSING
// OUTPUT
  output.value = Math.PI * Math.pow (r, 2) * h / 61.024;
}
