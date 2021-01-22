//Business logic

function beepBoop(input) {
  //Declare array and convert to string
  let inputArray = [];
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }

  let counterArray = inputArray.map(String);
  let finalArray = inputArray.map(String);

  //foreach loop to iterate over each element in array
  const resultArray = counterArray.map(function(element) {

    //for loop to iterate over each character in string
    for (var i = 0; i <= element.length; i++) {
      if (element[i] === "3") {
        finalArray[element] = "Won't you be my neighbor?";
        console.log(finalArray);
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

    }

  });
  console.log(finalArray);
  return finalArray;

}




// UI Logic

$(document).ready(function() {
$("#submit-form").submit(function (event) {
console.log(beepBoop(5));
  let testNum = [];
  testNum = beepBoop(5);
  //const inputNum = $("input#first-input").val();
  $("#output").empty();
  $("#output").text("Hello" + username + " check this out... " + 5);
  console.log(testNum);
  event.preventDefault();
  
  testarray = beepBoop(5);

  console.log(testarray);
});
});
  //  event.preventDefault();
//Take input

//Push to inputArray (JQuery submit single use)

//Map to second array (loop) with string changes

//Output log section 

//});