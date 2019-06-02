// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT: There is no user input. The program requests the day of the week from the computer as well as 3 specific dates.   
PROCESSING: Using if and else if statements the computer checks if the program is run on Saturday or Sunday and then checks against three holidays. 
OUTPUT: If the program is run on a weekend then it displays the message "Sleep in." if it is run on any of the three holidays it displays the message "Sleep in." If neither of those circumstances are met the program displays the message "Get up!"
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

//INPUT, PROCESSING and OUTPUT are contained in each statement.
  if (d.getDay() == (0 || 6)) {
    let sleep = " Sleep in.";
    document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 0) && (d.getDate() == 1)) {
      let sleep = " New Years Day! Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 11) && (d.getDate() == 25)) {
      let sleep = " Merry Christmas! Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else if ((d.getMonth() == 6) && (d.getDate() == 4)) {
      let sleep = " Happy Fourth of July! Sleep in.";
      document.getElementById("sleepin").innerHTML = sleep
  } else {
    let sleep = "Get up!"
    document.getElementById("sleepin").innerHTML = sleep
  }