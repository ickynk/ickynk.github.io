// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT: HTML id's "City", "State", and "Zip" receive input from user
PROCESSING: Javascript concactenates the address using the HTML inputs
OUTPUT: Updates the output with the concactenated string. 
*/

function GenScript() {
	output.textContent = City.value + ", " + State.value + " " + Zip.value;
}