// .length
const cars = ['Ford', 'BMW', 'Mercedes', 'Chevy'];
console.log(cars.length);

// .concat()
const moreCars = ['Saab', 'Volvo', 'Buick', 'Lexus', 'Subaru', 'Honda'];
console.log(cars.concat(moreCars));

// .indexOf() and .lastIndexOf()
const totalCars = cars.concat(moreCars);
console.log(totalCars.indexOf('Honda'));
console.log(totalCars.lastIndexOf('Ford'));

// .join()
const stringOfCars = totalCars.join();
console.log(stringOfCars);

const stringOfCarsSpace = totalCars.join((', '));
console.log(stringOfCarsSpace);

// .split()
const carsFromString = stringOfCars.split();
console.log(carsFromString);

const carsFromStringSeperate = stringOfCars.split(",")

// .reverse()
const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// .sort()
console.log(carsInReverse.sort());

// .slice()
// (start, end) -# is at end
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const reptiles = pets.slice('-3', '-1');
console.log(reptiles);
console.log(pets);

// .splice()
// position 4 remove 2 items
const removedReptiles = pets.splice('4', '2');
console.log(pets);
// add in with splice 3rd parameter
// (4, 0) 
pets.splice(4, 0, 'hamster')

// .pop()
// removes item at end
const removedPet = pets.pop();
console.log(pets);

// .push()
// adds item at the end
const addPetBack = pets.push('bird');
console.log(pets);

// .shift()
// removes item at beginning
const removedPetStart = pets.shift();
console.log(pets);

// .unshift()
// adds item at the beginning
const addPetStart = pets.unshift('turtle');
console.log(pets);

// .forEach()

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]
numbers.forEach(addTwo)
// forEach requires a function to be passed into it as its first argument.
// Use .forEach() on the numbers array, passing in your freshly built function addTwo as an argument, in order to add 2 to each number in the array.

function addTwo(num, index, arr) {
    arr[index] = num + 2;
} // Build a function called addTwo that can take in num, index, and arr as parameters—(num, index, arr)—and returns num + 2 at each index of the arr.

console.log(numbers)
// Create a numbers array by copy/pasting the following: const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
// Write code that will add 2 to each item in the array numbers.
