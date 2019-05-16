// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/*Design Table
INPUT: HTML id nname receives name input from user
PROCESSING: Javascript concactenates the scripture with the input of nname
OUTPUT: Updates the output with the personalized scripture
*/
function GenScript() {
	if (nname.value == "") {
		output.textContent = "Please enter your name";
	} else {
	output.textContent = 'My soul hungered; and I kneeled down before my Maker, and I cried unto him in mighty prayer and supplication for mine own soul; and all the day long did I cry unto him; yea, and when the night came I did still raise my voice high that it reached the heavens. And there came a voice unto me, saying: ' + nname.value + ', thy sins are forgiven thee, and thou shalt be blessed. And I, ' + nname.value + ', knew that God could not lie; wherefore, my guilt was swept away.';
}}