// ES5
const person = {
  name: 'Steve',
  age: 30,
  hobbies: ['waterpolo', 'reading']
};

// const name = person.name;
// console.log(name);

// ES2015

// const { name } = person;
// const { name: firstname} = person;
// console.log(name);
// console.log(firstname);

// const { name, hobbies: [hobby]} = person;
// console.log(hobby); //first hobby

// const numbers = [0, 1, 2];
// const [a, b] = numbers;
// console.log(a, b);
// const [a, , b] = numbers;
// console.log(a, b);

// see REQUIRE example

// function nameMe(name) {
//   return {
//     [name]: {
//     // [name.toLowerCase()]: {
//       message: `My name is ${name}`
//     }
//   };
// }

// console.log(
//   nameMe('Steve')
// );