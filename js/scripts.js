//Business logic
$(document).ready(function() {

function beepBoop(input) {
//  event.preventDefault();
  for (i = 0; i <= 2; i++){
    if (input === 1){
      let inputValue = input;
      inputValue.toString().replace(/\d[1]/g, "Beep!");
      console.log(input);
      console.log("Beep!");
    }
    else {
      console.log("Failed");
    }
  }
}




// UI Logic

beepBoop(1);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

});