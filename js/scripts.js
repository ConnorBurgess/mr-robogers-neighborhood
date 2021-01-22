//Business logic
//$(document).ready(function() {

function beepBoop(input) {
  //  event.preventDefault();
  //Declare array and convert to string
  let inputArray = [];
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  let stringArray = inputArray.map(String)

  //foreach loop to iterate over each element in array
  stringArray.forEach(function (element) {

    //for loop to iterate over each character in string
    for (var i = 0; i <= element.length; i++) {

      if (element[i] === "1") {
        stringArray[element] = element[i].replace(/[1]/g, "Beep!");

        console.log(/[13]/g.test(element));
        return
      }
      else if (element[i] === "2" && !(/[3]/g.test(element))) {
        stringArray[element] = element.replace(/[2]/g, "Boop!");
        //   console.log(inputValue);

        return
      }
      else if (element[i] === "3") {
        stringArray[element] = element.replace(/[3]/g, "Won't you be my neighbor?");
        //  console.log(inputValue);
      }
      if (element[i] === "1" && !(/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        stringArray[element] = element[i].replace(/[1]/g, "Beep!");

        console.log(/[13]/g.test(element));
        return
      }
      else {
        console.log("Failed");
        return;
      }
      console.log(stringArray);
    }
  });
}




// UI Logic

beepBoop(222);

//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});