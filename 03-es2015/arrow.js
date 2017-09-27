require('http').createServer((req, res) => {
  require('fs').readFile(`${__dirname}/arrow.html`, (err, data) => res.end(data))
}).listen(3000);