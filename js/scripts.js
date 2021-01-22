//Business logic
//$(document).ready(function() {

function beepBoop(input) {
//  event.preventDefault();
  let inputArray = [];
  for (var i = 1; i <= input; i++){
    inputArray.push(i);
  }
  let stringArray = inputArray.map(String)

    let inputValue = input.toString();

    stringArray.forEach(function(element) {
      console.log(element);
    if (element === "1"){
      console.log(stringArray.indexOf(element));
      stringArray[element] = element.replace(/[1]/g, "Beep!");
      console.log(element);
      console.log(stringArray);
      return
    }
    else if (input === 2){
      inputValue = inputValue.replace(/[2]/g, "Boop!");
   //   console.log(inputValue);
    }
    else if (input === 3){
      inputValue = inputValue.replace(/3/g, "Won't you be my neighbor?");
    //  console.log(inputValue);

    }
  
    else {
      console.log("Failed");
      
    }
  });
}




// UI Logic

beepBoop(10);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});