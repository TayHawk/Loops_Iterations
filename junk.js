let num = function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let tries = num;

tries += 1;




console.log('It took ' + String(tries) + ' tries to get a number greater than 2');