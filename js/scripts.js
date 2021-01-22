//Business logic
//$(document).ready(function() {

function beepBoop(input) {
//  event.preventDefault();
  for (var i = 0; i < 2; i++){
    if (input === 1){
    let inputValue = input.toString();
      inputValue = inputValue.replace(/[0-9]/g, "Beep!");
      console.log(inputValue);
      break;
    }
    else {
      console.log("Failed");
      
    }
  }
}




// UI Logic

beepBoop(2);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});