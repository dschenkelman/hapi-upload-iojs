var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// Add the route
server.route({
  method: 'POST',
  path:'/hello',
  config: {
    payload:{
      maxBytes: 1024 * 1024 * 10,
      output:'stream',
      parse: true,
      allow: [ 'multipart/form-data' ]
    },
    handler: function (request, reply) {
     reply('hello world');
    }
  }
});

// Start the server
server.start();