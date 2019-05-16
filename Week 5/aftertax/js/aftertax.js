// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: Get hours worked and standard wage from number boxes. hr and w
PROCESSING: Multiply hr by w and then multiply the total by 85%. hr * w * .85 = sum
OUTPUT: Display result in document
*/
// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to hr, w and output.
//INPUT
function math() {
  let hr = document.getElementById("hr").value;
  let w = document.getElementById("w").value;
//PROCESSING 
  if (hr, w == "0") {
    let output = "Please enter Hours worked and Standard Wage"
  document.getElementById("output").innerHTML = output;
  } else {
  let output = "$ " + (hr * w) * .85
//OUTPUT
  document.getElementById("output").innerHTML = output;
}}
