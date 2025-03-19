// Functions

// Methods = Built-in Functions

"Dave".toLowerCase();
Math.random(); 

// Function Declaration Syntax:

function sum(num1, num2) { 
  if (num2 == undefined) {
    return num1 + num1;
  }
  console.log(num1);
  console.log(num2);
  return num1 + num2; 
}

console.log(sum(2));

const getUserNameFromEmail = (email) => {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("johns@tylersdomain.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("september"));

