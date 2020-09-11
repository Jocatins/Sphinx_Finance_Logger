import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  //Tuples

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, 'end');
});

//GENERICS

const addUid = <X extends { name: string; age: number }>(obj: X) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUid({ name: 'sphinx', age: 56 });
console.log(docOne.name);

//GENERICS with interfaces

interface Resource<T> {
  uid: number | string;
  resourceName: string;
  data: T;
}
const docThree: Resource<object> = {
  uid: 787,
  resourceName: 'sphinx',
  data: { name: 'jocatins' },
};

const docFour: Resource<string[]> = {
  uid: 'joca',
  resourceName: 'python',
  data: ['react', 'angular'],
};
