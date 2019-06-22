// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: Table provides input, 2015 is selected first (yd)
PROCESSING: A loop checks each # 1 column from each row. If the value is lower than the current (yd) then it replaces (yd) with the lower value. It also creates a Temple value (t) which selects the name of the temple. 
OUTPUT: Displays final (t) value. 
*/

//INPUT
let table = document.getElementById("templeData");
let yd = parseInt(table.rows[1].cells[1].innerHTML);
//PROCESSING
for (var i = 2; i < 7; i++) {
  if (parseInt(table.rows[i].cells[1].innerHTML) < yd) {
    yd = table.rows[i].cells[1].innerHTML;
    let t = table.rows[i].cells[0].innerHTML;
//OUTPUT
    let output = t;
    document.getElementById("output").innerHTML = output;
  }
}
