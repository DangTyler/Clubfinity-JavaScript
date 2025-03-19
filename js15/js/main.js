const myArray = [];

// add elements to an array
myArray[0] = "Dave";
myArray[1] = 1001;
myArray[2] = false;

// refer to an array
console.log(myArray);

// length property
console.log(myArray.length);

// last element in an array
console.log(myArray[myArray.length - 1]);

console.log(myArray[1]);

myArray.push("school");
console.log(myArray);
const lastItem = myArray.pop();
console.log(myArray);

const newLength = myArray.unshift(42); // adds to front, and returns new length
const firstItem = myArray.shift(); // removes from front, returns item

console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);
console.log(myArray[2]);

myArray.splice(1, 0, 42);

console.log(myArray);
console.log(myArray[1]);

myArray.splice(1, 1, 42);

console.log(myArray);
console.log(myArray[1]);

{
  const myArray = ["A", "B", "C", "D", "E", "F"];

  const newArray = myArray.slice(2, 5);
  
  console.log(newArray);

  newArray.reverse();
  console.log(newArray);

  const newString = newArray.join();
  console.log(newString);

  const newArray2 = newString.split(",");
  console.log(newArray2);
}

{
  const myArrayA = ["A", "B", "C"];
  const myArrayB = ["D", "E", "F"];

  const newArray = [...myArrayA, myArrayB]; // spread operator rather than myArrayA.concat(myArrayB);
}

{
  const equipShelfA = ["baseball", "football", "volleyball"];
  const equipShelfB = ["basketball", "golf balls", "tennis"];

  const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
  const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

  console.log(equipShelfA[1]);
  // or
  console.log(clothesShelfB[0]);

  const equipDept = [equipShelfA, equipShelfB];
  const clothesDept = [clothesShelfA, clothesShelfB];

  console.log(equipDept[0][1]);
  console.log(clothesDept[1][0]);

  const sportsStore = [equipDept, clothesDept];
  console.log(sportsStore[0][0][1]);
  console.log(sportsStore[1][1][0]);
}