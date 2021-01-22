//Business logic
//$(document).ready(function() {

function beepBoop(input) {
  //  event.preventDefault();
  //Declare array and convert to string
  let inputArray = [];
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }

  let counterArray = inputArray.map(String);
  let finalArray = inputArray.map(String);

  //foreach loop to iterate over each element in array
  counterArray.forEach(function (element) {

    //for loop to iterate over each character in string
    for (var i = 0; i <= element.length; i++) {
      if (element[i] === "3") {
        finalArray[element] = "Won't you be my neighbor?";
      }
      else if (element[i] === "1" && !(/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element] = "Beep!";
      }
      else if (element[i] === "2" && !(/[3]/g.test(element))) {
        finalArray[element] = "Boop!";
      }
      else if (element[i] === "1" && (/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element] = "Boop!";
      }
      else {
      }
      console.log(finalArray);     
    }
  });
}




// UI Logic

beepBoop(393);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});