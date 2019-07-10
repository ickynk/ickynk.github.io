// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;
/* INPUT: User inputs the values of the array in a text box. 
 * PROCESSING: Separates the values by line and then parses them to display a numeric value. Adds the first and last values.
 * OUTPUT: Displays the sum of values. 
 */
//INPUT
function addEnds(list) {
    let text = document.getElementById('input').value;
// PROCESSING
    list = text.split('\n');
    let a = parseInt(list[0])
    let l = list.length -1
    let b = parseInt(list[l])
    let sum = (a + b)

 // OUTPUT
    document.getElementById('output').innerHTML = sum;
}

