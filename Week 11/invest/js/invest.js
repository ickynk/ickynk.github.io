// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;


//INPUT
function doFV() {
  let p = parseFloat(document.getElementById("p").value);
  let r = parseFloat(document.getElementById("r").value);
  let y = parseInt(document.getElementById("y").value);
  let ppy = parseInt(document.getElementById("ppy").value);
  //PROCESSING
      let out = computeFutureValue(p, r, y, ppy);
      document.getElementById("output").innerHTML = "$" + (out.toFixed(2));
    }

function computeFutureValue(a, r, y, ppy) {
  let rpp = (r / ppy)
  let tnp = y * ppy
  let fv = a * Math.pow(1 + rpp, tnp);
  return fv;
      }