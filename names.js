//Iterate over the Array and uppercase the name values in the new array!


let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
// The variable names holds an array of names.

let upperNames = [];
//We want to convert every name to uppercase and append it to the empty upperNames array.

let index = 0;
//Since array indexes are zero-based, we initialize an index variable with 0.

while (index < names.length) {
    //we use a loop that executes as long as the number in index is smaller than the length of the names array.
    
  let upperCaseName = names[index].toUpperCase();
  /*Line 16 accesses the name stored at names[index] and uses it to call the toUpperCase method.
  That method returns the name in uppercase, which we assign to upperCaseName */
  
  upperNames.push(upperCaseName);
  //Line 20 uses the push method for arrays to append the latest uppercase name to the upperNames array. 
  
  
  index += 1;
  /*line 24 increments the index by 1 after each iteration, which ensures that index < names.length becomes false
  after the loop handles the last element.
*/
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
