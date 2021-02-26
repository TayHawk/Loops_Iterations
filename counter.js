//write some code that logs numbers from 1 to 10:


let counter = 1;
// sets the count = 1 for the 1st itteration
while (counter <= 10) {
    //the while loops sets the condition. This loops will run 10 times. from 1-10.
  console.log(counter);
  //we are showing the itterations. the first time through the loop it will log 1
  counter = counter + 1;
  /* counter = 1. So 1 +1 = 2. The next time through the counter value is equal to 2. So it will console.log 2. Then it will be 2+1. Which equals 3.
  There are multiple way to type out the increment parts on line 7:
  counter +=1 or counter++; They are the same thing.
  */
}








//TEXT BOOK NOTES BELOW VVV


/*When JavaScript encounters this while loop, it evaluates the conditional expression inside the parentheses, counter <= 1000.
Since counter's initial value is 1, the expression is true at the beginning of the while statement and the engine runs the loop's block. 
Inside the block, we output counter's value, then increment it by 1.
After the first block iteration, JavaScript re-evaluates the conditional expression. 
This time, counter is 2, which is still less than or equal to 1000; thus, the block runs again. 
After 1000 iterations, counter's value becomes 1001. Since the loop condition is no longer truthy, 
the program stops looping and continues with the first expression or statement after the loop.
Line 4 in this example is crucial. The loop block must modify counter in some way that ultimately makes the loop condition false. 
If it doesn't, the loop becomes an infinite loop, which, in most cases, you don't want. 
*/
