//Business logic
//$(document).ready(function() {

function beepBoop(input) {
  //  event.preventDefault();
  let inputArray = [];
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  let stringArray = inputArray.map(String)

  let inputValue = input.toString();

  stringArray.forEach(function (element) {

    for (var i = 0; i < element.length; i++) {
      if (element === "1") {
        stringArray[element] = element.replace(/[1]/g, "Beep!");
        console.log(stringArray);
        return
      }
      else if (element === "2") {
        stringArray[element] = element.replace(/[2]/g, "Boop!");
        //   console.log(inputValue);
        console.log(stringArray);
        return
      }
      else if (element === "3") {
        stringArray[element] = element.replace(/[3]/g, "Won't you be my neighbor?");
        //  console.log(inputValue);
        console.log(stringArray);

      }

      else {
        console.log("Failed");
        return;
      }
    }
  });
}




// UI Logic

beepBoop(5);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});