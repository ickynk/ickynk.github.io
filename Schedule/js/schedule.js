/*Design Table
INPUT: Get how many staff per shift, get hours start and end for each shift.
PROCESSING: Check hours each shift works, if between a specific hour add the amount of staff members to an output for each individual hour.
OUTPUT: Display how many staff members are on duty each hour.
*/
// Designate HTML id's to be used within JS. Pulls information input into form and allows JS to assign numeric value to hr, w and output.
function clearFields() {
  document.getElementById('output').innerHTML = ""
}
function popFields() {

for(let i = 0 ; i < 48 ; i++){ getCountEmployees(i*60)}

}
function getCountEmployees(checkMinutes) {
  //INPUT
  let fields = document.querySelectorAll(".content-fields");
  //let checkTime = document.getElementById("hourToCheck").value;
  //let checkMinutes = (parseInt(checkTime.split(":")[0])*60) + parseInt(checkTime.split(":")[1]);
  let employeeCt = 0;
  
  //PROCESSING 
  fields.forEach((child,i)=>{
    let startTime = child.querySelector('.start').value,
        startMinutes = parseInt(startTime.split(":")[0])*60+parseInt(startTime.split(":")[1]);
    let endTime = child.querySelector('.end').value,
        endMinutes = parseInt(endTime.split(":")[0])*60+parseInt(endTime.split(":")[1]);
    
    if (startMinutes > endMinutes){
      //If the start time is greater than the end time, then we want to check between 0 and the end time, and the check is greater than the starttime and 2400
      if(
        (checkMinutes >= 0 && checkMinutes <= endMinutes) || 
        (checkMinutes >= startMinutes && checkMinutes < (24*120))
      ){
        employeeCt += parseInt(child.querySelector(".employees").value);
      }
    } else {
      //Otherwise we want to check between the start and end time respectively
      if (checkMinutes >= startMinutes && checkMinutes <= endMinutes){ 
        employeeCt += parseInt(child.querySelector(".employees").value);
      }
    }
    
  });
  
  //OUTPUT
  //If you wanted to create a list or something here, then this is where you could build the HTML to do it.
  document.getElementById('output').innerHTML += `<br>${checkMinutes/120} - ${employeeCt} Employees Working`;
}
