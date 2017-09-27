const fs = require('fs');
console.log('Getting file content');
fs.readFile('myfile.txt', 'utf8', (error, file) => {
  if (error) {
    throw error;
  } else {
    console.log(file);
  }
});
console.log('finished reading file');