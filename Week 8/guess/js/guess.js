// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

/*Design Table
INPUT: User starts program by pressing a button. A window prompts the user to guess a number between 1-100. User types number.
PROCESSING: Checks if number user input is 38. Program will provide hint if input is too low or too high. Program also adds +1 to (tries) each time the user guesses a number. 
OUTPUT: Once user guesses correct number the output states they were correct and displays (tries). 
*/
// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to hr, w and output.
//INPUT
function numberGuessGame() {
    let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
    let answer = 38;
    let guess;
    let tries = 0;
//PROCESSING
  do {
        guess = parseInt(prompt(message));
        tries += 1
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another integer.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another integer.";
        }
    } while (guess != answer);
    if (tries == 1) {
      message = guess + " is correct! <br> You got it right on your first try!";
    let output = message;
  document.getElementById("output").innerHTML = output;
    } else {
      message = guess + " is correct! <br> You guessed " + tries + " times before you got the answer correct!";
    let output = message;
  document.getElementById("output").innerHTML = output;
}}
