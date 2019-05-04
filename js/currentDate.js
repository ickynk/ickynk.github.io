let d = new Date(); //Creates shortcut for the command "new Date()" to be used later in the script
let month = new Array(12); //Translates received numeric value for month into the written month
 month[0] = "January";
 month[1] = "February";
 month[2] = "March";
 month[3] = "April";
 month[4] = "May";
 month[5] = "June";
 month[6] = "July";
 month[7] = "August";
 month[8] = "September";
 month[9] = "October";
 month[10] = "November";
 month[11] = "December";

//Below...Creates an id to be called by the HTML file; on run pulls the current month, date and year.
document.getElementById("currentDate").innerHTML = "Today is: " + month[d.getMonth()] + ", " + d.getDate() + " " + d.getFullYear();
