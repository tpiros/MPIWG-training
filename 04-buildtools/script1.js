import _ from 'lodash';

const users = [
  { user: 'steve', isAdmin: false },
  { user: 'dave', isAdmin: true }
];

console.log(
  _.findIndex(users, object => object.user === 'steve')
);
