"use strict";
let coding;
coding = () => {
    console.log('lets code');
};
const divide = (x, y) => {
    console.log(x * y);
};
divide(21, 89);
// Making c optional
const add = (a, b, c) => {
    console.log(a + b);
};
add(23, 45);
const adds = (a, b, c = 90) => {
    console.log(a + b);
    console.log(c);
};
adds(23, 45);
// To explicitly declare the return type
const minus = (j, k) => {
    return j + k;
};
let result = minus(23, 9);
