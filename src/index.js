import emojipedia from "./emojipedia";

var numbers = [3, 56, 10, 84, 5];

//Map -Create a new array by doing something with each item in an array.

const doubleNums = numbers.map(function (x) {
  return x * 2;
});
//console.log(doubleNums);

//Filter - Create a new array by keeping the items that return true.

const filterNums = numbers.filter(function (num) {
  return num <= 10;
});

//console.log(filterNums);

//Reduce - Accumulate a value by doing something to each item in an array.

var newNum = numbers.reduce(function (accumulator, currentNumber) {
  //console.log("Accumulator = " +accumulator);
  return accumulator + currentNumber;
});

//console.log(newNum);

//Find - find the first item that matches from an array.

var num = numbers.find(function (num) {
  return num > 10;
});

//console.log(num);

//FindIndex - find the index of the first item that matches.
var numFindIndex = numbers.findIndex(function (num) {
  return num > 10;
});

//console.log(numFindIndex);

const meanings = emojipedia.map((emoji) => {
  return emoji.meaning.substring(0, 100);
});
console.log(meanings);
