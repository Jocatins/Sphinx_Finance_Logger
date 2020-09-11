//Function signatures

let code: (x: string, y: number) => void;

code = (title: string, age: number) => {
  console.log(`Titan has ${age} ${title}s`);
};
//Example 2
let calc: (x: number, y: number, z: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action == 'minus') {
    return numTwo - numOne;
  } else {
    return numTwo - numOne;
  }
};
// Example 3
let SignUpDetails: (obj: { name: string; age: number }) => void;
SignUpDetails = (titan: { name: string; age: number }) => {
  console.log(`${titan.name} is awesome with ${titan.age}`);
};
//Type Aliases

let user: (object: { name: string; age: number }) => void;
type newUser = { name: string; age: number };

user = (gypsy: newUser) => {
  console.log(`${gypsy.name} is ${gypsy.age} years`);
};
