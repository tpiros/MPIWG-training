const fs = require('fs');
const file = fs.readFileSync('myfile.txt', 'utf8');
console.log('Getting file content');
console.log(file);
console.log('finished reading file');