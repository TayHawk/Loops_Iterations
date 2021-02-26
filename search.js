let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;
// Notice that we initialize indexOfFive to -1: we use this value when the array doesn't have the desired value.
for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
      //This program iterates over the elements of an array to find the element whose value is 5
    indexOfFive = i;
    //When it finds that value, it stores its index in the indexOfFive variable.
    break;
    // exits the loop once the condition has been met.
  }
}

console.log(indexOfFive);
//It then logs the index of the found element to the console. 