/* Example taken from MDN */

// function* idMaker() {
//   let index = 0;
//   while(index <= 3) { // or while(true)
//     yield index++;
//   }
// }

// const generator = idMaker();
// console.log(generator.next());
// console.log(generator.next().value);

// for (let value of generator) {
//   console.log(value)
// }

function* generator() {
  yield 0;
  console.log('zero');
  yield 1;
  console.log('one')
  yield 2;
  console.log('two');
}

const gen = generator();
// for (value of gen) {
//   console.log(value);
// }
// [...gen];
