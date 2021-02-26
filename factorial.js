

function factorial(number) {
    //creates the function factorial() that we can use later to call the for loop on a given num.
  let result = 1;
  // we start the count at 1
  for (let counter = number; counter > 0; counter -= 1) {
      /*we set counter = to whatever number we pass into function factorial()
      we set counter to be greater than 0 because we want all positive intergers
      counter subtracts by 1. Not sure why???
      */
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

/* Recursive


function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
  example number = 5 (5*(5-1)=4 ; 5 * 4(24) =>120
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
*/
