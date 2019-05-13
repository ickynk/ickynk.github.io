// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to r, h and output.
function math() {
  let r = document.getElementById("r").value;
  let h = document.getElementById("h").value;
  let output = document.getElementById("output");
// Calculate the volume of a cylinder and then convert inches cubed into liters of volume.
  output.value = Math.PI * r * r * h / 61.024;
}
