function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
    //Our doubler function code calls itself on line 5
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80
            // Each invocation of doubler logs a new number, then calls itself with a new value twice that of the input number.
            //To make sure the "loop" stops, we skip the recursive call when the number is greater than 50.