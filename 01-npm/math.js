function add(n, m) {
  return n + m;
}

module.exports = {
  add,
  variable: 'hello world',
  number: 42,
  isAdmin: false
};
/*
the above really is:
module.exports = {
  add: add
};
*/