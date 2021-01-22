//Business logic
$(document).ready(function() {
  event.preventDefault();
function beepBoop(input) {
  for (i=0; i >= 2; i++){
    if (input === 1){
      input.replace(/\d[1]/g, "Beep!");
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