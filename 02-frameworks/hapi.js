const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply('Hello HAPI!');
  }
});

server.route({
  method: 'GET',
  // method: ['GET', 'POST'],
  path: '/products',
  handler: function(request, reply) {
      reply('Getting products');
  }
});

server.route({
  method: 'GET',
  path: '/products/{id}',
  handler: function(request, reply) {
    reply(`Getting product with ID ${request.params.id}`)
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Magic happens on ${server.info.uri}`);
});

