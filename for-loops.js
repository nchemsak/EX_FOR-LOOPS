
// Increment by 10

// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.

for ( var i = 5; i<120; i+=10 ) {
	console.log(i);
}




// Decrement by division
// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.



for ( var i = 4096; i>=1; i/=2 ) {
	console.log(i);
}


// Array iteration

// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe"]

for ( var i = 0; i<=presidents.length-1; i++ ) {
	console.log("President # " + (i + 1) + " was " + presidents[i]);
} 


// Object iteration

// Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies) {
	console.log(key);
}