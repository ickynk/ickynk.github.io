// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT: Before the program is run the computer requests the current day. This day is given a numeric value. A user submits the subtotal (sub) of the sale and then clicks the button "Calculate Total"  
PROCESSING: If the program is run on a Tuesday or Wednesday it will apply a 10% discount to the subtotal. If not the program will not apply a discount. The program then applies a 6% sales tax to the final subtotal. 
OUTPUT: Displays the final sale amount and any discounts if it applies. 
*/
//INPUT 
let d = new Date();
let dayOfWeek = d.getDay();
let day = new Array(7);
  day[0] = "Sunday"
  day[1] = "Monday"
  day[2] = "Tuesday"
  day[3] = "Wednesday"
  day[4] = "Thursday"
  day[5] = "Friday"
  day[6] = "Saturday"

//OUTPUT: Displays the current day as a reference. 
document.getElementById("dofw").innerHTML = day[d.getDay()];
//PROCESSING
function finalSale() {
  let tax = .06;
  let sub = parseInt(document.getElementById("subT").value);
  
  if (d.getDay() == (2) || d.getDay() == (3)) {
    let disc = .10;
    let disctotal = sub * disc;
    let nsubtotal = sub - disctotal;
    let ttotal = nsubtotal * tax;
    let total = nsubtotal + ttotal;

    //OUTPUT
    document.getElementById("toutput").innerHTML = "Final Cost: $" + total.toFixed(2) + "<br> You Saved $" + disctotal.toFixed(2) + "!";
  } else {
    //PROCESSING
    let ttotal = sub * tax;
    let total = sub + ttotal;
    
    //OUTPUT
    document.getElementById("toutput").innerHTML = "Final Cost: $" + total.toFixed(2);
  }
}