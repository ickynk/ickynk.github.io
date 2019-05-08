// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//Retrieve input from HTML and concatenat into a text string
function GenScript() {
	output.textContent = City.value + ", " + State.value + " " + Zip.value;
}