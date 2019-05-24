// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT: HTML generates a series of options for the user to select. JS will receive input from the user. 
PROCESSING: Using a switch method the input will be matched with one of the options. This will generate a value for "shoe"
OUTPUT: Concatenates a message along with the shoe value.
*/
//INPUT
function whatshoe() {
  var shoe;
  let weather = document.getElementById("weather").value;
//PROCESSING
  switch (weather) {
    case "":
      shoe = "error";
      break;
    case "hot": 
      shoe = "sandals";
      break;
    case "rain": 
      shoe = "galoshes";
      break;
    case "snow":
      shoe = "boots";
      break;
    case "cool":
      shoe = "shoes";
  }
//OUTPUT
  if (shoe == "error") {
    let output = "Please select a weather type above";
    document.getElementById('output').innerHTML = output
  } else {
    let output = "You should wear " + shoe;
    document.getElementById('output').innerHTML = output
  }
}
  