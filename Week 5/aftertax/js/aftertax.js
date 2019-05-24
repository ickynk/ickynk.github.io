// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: Get hours worked and standard wage from number boxes. hr and w
PROCESSING: Multiply hr by w and then multiply the total by 85%. hr * w * .85 = num ; 
To ensure the output only uses two decimal points the problem is broken down to solve the equation then utilze the toFixed() function to limit decimal points
the limited equation is then concatenated into a string for output.
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
  } else if (hr, w == "") {
    let output = "Please enter Hours worked and Standard Wage"
  document.getElementById("output").innerHTML = output;
  } else {
  let num = (hr * w) * .85;
  var n = num.toFixed(2);
  let output = "$ " + n ; 
//OUTPUT
  document.getElementById("output").innerHTML = output;
}}
