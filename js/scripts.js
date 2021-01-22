//Business logic
//$(document).ready(function() {

function beepBoop(input) {
//  event.preventDefault();
  for (var i = 0; i < 4; i++){
    let inputValue = input.toString();

    if (input === 1){
      inputValue = inputValue.replace(/[1]/g, "Beep!");
      console.log(inputValue);
    }
    else if (input === 2){
      inputValue = inputValue.replace(/[2]/g, "Boop!");
      console.log(inputValue);
    }
    else {
      console.log("Failed");
      
    }
  }
}




// UI Logic

beepBoop(2);
beepBoop(1);
beepBoop(3);
//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});