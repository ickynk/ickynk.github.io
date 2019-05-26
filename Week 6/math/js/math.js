// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

/* Design Table
INPUT 1: Once a user hits a button (reset) which starts the first process.  
PROCESSING 1: javascript utilizes a randomized function to select a number between 1-100. This process is done for two variables (a and b). 
OUTPUT 1: Displays a and b on the screen. 
INPUT 2: Requests a user to input the answer for the sum of both a and b values input is (ans). The user then clicks a button to verify the answer. 
PROCESSING 2: On click javascript begins an else if sequence. if ans is equal to a + b then it alters (output) to an affirmative statement, otherwise it alters (output) to a negative statement. 
OUTPUT 2: Displays output underneath the problem. 
*/
//INPUT 1 in HTML
document.getElementById("genQuestion").addEventListener("click", genQuestion)
//PROCESSING 1
function genQuestion(max, min) {
  min = Math.ceil(1);
  max = Math.floor(101);
  var a = Math.floor(Math.random() * (max - min)) + min;
  var b = Math.floor(Math.random() * (max - min)) + min;
//OUTPUT 1
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    let output = "Good luck!"
    document.getElementById("output").innerHTML = output;
    let ans = ""
    document.getElementById("ans").value = ans;
  
}
//INPUT 2 in HTML
document.getElementById("checkAns").addEventListener("click", checkAns)
//PROCESSING 2
function checkAns() {
  let ans = parseInt(document.getElementById("ans").value);
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  if (a + b == ans) {
    let output = "Correct! Good job."
//OUTPUT 2
    document.getElementById("output").innerHTML = output;
//PROCESSING 2
  } else {
    let output = "Sorry. That is incorrect."
//OUTPUT 2
    document.getElementById("output").innerHTML = output;
  }
}