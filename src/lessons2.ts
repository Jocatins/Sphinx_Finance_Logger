let coding: Function;

coding = () => {
  console.log('lets code');
};
const divide = (x: number, y: number) => {
  console.log(x * y);
};
divide(21, 89);

// Making c optional
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};
add(23, 45);
const adds = (a: number, b: number, c: number | string = 90) => {
  console.log(a + b);
  console.log(c);
};
adds(23, 45);

// To explicitly declare the return type
const minus = (j: number, k: number): number => {
  return j + k;
};
let result = minus(23, 9);
