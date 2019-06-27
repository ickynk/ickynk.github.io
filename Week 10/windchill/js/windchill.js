// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;


//INPUT
function doInputOutput() {
  let t = parseInt(document.getElementById("t").value);
  let s = parseInt(document.getElementById("s").value);
  //PROCESSING
  if (t > 50 || s < 3) {
      let output = "N/A";
      document.getElementById("output").innerHTML = output;
    } else {
      let out = windChill(t, s);
      document.getElementById("output").innerHTML = out + " F&deg";
    }
}

function windChill(tempF, speed) {
  let chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (tempF * Math.pow(speed, 0.16)));
  return Math.round(chill);
      }