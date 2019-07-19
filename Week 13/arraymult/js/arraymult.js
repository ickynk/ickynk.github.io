// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

function runMult() {
  let text = document.getElementById('input').value;
  let m = parseFloat(document.getElementById('mult').value);
  let l = text.split('\n');
  document.getElementById('output').innerHTML = multiply(l, m)
}
//INPUT
function multiply(list, multiplier) {
//PROCESSING
        for (var i = 0; i < list.length; i++) {
          let swap = parseFloat(list[i]);
          list[i] = swap * multiplier;
        }
  return list
}