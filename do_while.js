let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');


/* Won't work in node but will work in browser.
Will prompt user "do you want to do that again?" If they select y it will ask again and again
till they hit another key which then the while loop condintional will become false.