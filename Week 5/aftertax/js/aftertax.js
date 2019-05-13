// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to hr, w and output.
function math() {
  let hr = document.getElementById("hr").value;
  let w = document.getElementById("w").value;
  let output = document.getElementById("output");
// Calculate the net pay using a tax value of %15.
  output.value = (hr * w) * .85;
}
