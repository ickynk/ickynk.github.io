// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//INPUT
function runEvens() {
  let text = document.getElementById('input').value;
  let l = text.split('\n');
  document.getElementById('output').innerHTML = getEvens(l)
}

function getEvens(list) {
//PROCESSING
    let sum = 0
      for (var i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0) {
          sum++
//OUTPUT
        }
    }
  return sum
}



