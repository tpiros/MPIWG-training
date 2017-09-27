const hello = () => 'Hello';
const hello = arg => arg;
const hello = (arg1, arg2) => arg1 + arg2;

const hello = (arg1, arg2) => {
  const result = arg1 + arg2;
  return result;
}

const hello = arg => ({
  result: arg
});