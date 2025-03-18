// Numbers

// An integer is a whole number.
const myNumber = 42;

console.log(myNumber);

// A number with a decimal point is a float
// which references the "floating point"
const myFloat = 42.0;

console.log (myFloat);

const myString = "42";

console.log(myString);

console.log(myNumber === myFloat)
console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) === myNumber);

console.log(Number("Dave"));
console.log(Number(undefined));
console.log(Number(1));
console.log(Number(0));

// Number Methods

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myNumber));

console.log(Number.parseFloat(myFloat).toFixed(2));
console.log(Number.parseInt(myString));
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//NaN is an acronym for Not a Number

console.log(Number.isNaN("Dave")); // False; is == NaN and NumberType
console.log(isNaN("Dave")); // True; is not a number