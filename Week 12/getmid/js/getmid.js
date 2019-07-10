// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date =
  today.getMonth() + 1 + " / " + today.getDate() + " / " + today.getFullYear();
document.getElementById("currentdate").innerHTML = date;

//INPUT
function getMiddle(list) {
    let text = document.getElementById('input').value;
//PROCESSING
    list = text.split('\n');
      if (list.length % 2 == 0) {
            let count1 = ((list.length / 2) - 1)
            let count2 = (list.length / 2)
            let avg = (parseInt(list[count1]) + parseInt(list[count2])) / 2;
 //OUTPUT
            document.getElementById('output').innerHTML = avg;
      } else {
            let count = (list.length -1) / 2;
            let mid = list[count];
            document.getElementById('output').innerHTML = mid;
      }
}
