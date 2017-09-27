// function constructSentence() {
//   return Array.prototype.slice.call(arguments).join(' ');
// }

// const message = constructSentence('hello', 'world');
// console.log(message);

// function add() {
//   return Array.prototype.slice.call(arguments).reduce((acc, number) => acc + number);
// }

// function add(...numbers) {
//   return numbers.reduce((acc, number) => acc + number);
// }

// console.log(add(1, 1, 2));


// function add(n, m) { return n + m; }
// const args = [4, 5];
// console.log(
//   add.apply(null, args)
// );

// function add(n, m) { return n + m; }
// const args = [4, 5];
// console.log(
//   add(...args)
// );

// const fruits = ['peach', 'cherry'];
// console.log(
//   ['apple', 'pear'].concat(fruits)
// );

// const fruits = ['peach', 'cherry'];
// console.log(
//   ['apple', 'pear', ...fruits]
// );

// function add (n = 1, m = 2) {
//   return n + m
// }

// console.log(
//   add()
// );

// console.log(
//   add(3)
// );

// console.log(
//   add(1, 1)
// );

// function settings(options) {
//   const userOptions = options || {};
//   if (userOptions.isAdmin) { userOptions.isAdmin === true; }
//   if (userOptions.hasPhoto) { userOptions.hasPhoto === '/path/to/photo'; }
//   return userOptions;
// }

// function settings(isAdmin = false, hasPhoto = false) {
//   return userOptions;
// }