let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
    if (names[index] === 'Naveed') /* or you can use if (names[index] !== 'Naveed')*/ {
    continue;
  }
  //When a loop encounters the continue keyword, it skips running the rest of the block and jumps ahead to the next iteration. 

  
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);