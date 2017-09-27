// const http = require('http');
// const port = 3000;

// const server = http.createServer((request, response) => {
//   return response.end('Hello World!');
// });

// server.listen(port);

// or even:

require('http').createServer((request, response) => response.end('hello world!')).listen(3000);