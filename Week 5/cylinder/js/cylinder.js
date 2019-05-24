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
  let r = parseFloat(document.getElementById("r").value);
  let h = parseFloat(document.getElementById("h").value);
  let output = document.getElementById("output");
// PROCESSING
  let volume = Math.PI * Math.pow (r, 2) * h;
  let lvolume = volume / 61.024;
// OUTPUT
  output.value = lvolume;
}
