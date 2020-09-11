//explicit types

let sphinx: number;
let isLonely: boolean;
let gypsy: string;

//arrays
let boys: string[];
boys = ['peter', 'matt'];

//Calling the push method to empty arrays
let girls: number[] = [];
girls.push(8);
girls.push(0);

//union types

let titans: (string | number)[] = [];

titans.push(45);
titans.push('joca');

console.log(titans);

let uid: string | number | boolean;
uid = 45;
uid = false;
uid = 'jenny';

//objects
let titanAll: object;
titanAll = { name: 'peter', year: 89, value: false };

let titanFew: {
  name: string;
  age: number;
};

titanFew = { name: 'dennis', age: 8 };

alert('hello');
