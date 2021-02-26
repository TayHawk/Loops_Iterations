let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for(let year = 10 ; year <= 40; year +=10){
console.log(`In ${year} years, you will be ${age + year} years old.`);
}
