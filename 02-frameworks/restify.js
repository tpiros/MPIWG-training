const restify = require('restify');
const server = restify.createServer();


server.get('/', (req, res, next) => res.send('Hello Restify!'));
server.get('/products', (req, res, next) => res.send('Get Products'));
server.get('/products/:id', (req, res, next) => res.send(`Getting product with ID: ${req.params.id}`));

server.listen(3000, () => console.log('Magic happens on port 3000'));