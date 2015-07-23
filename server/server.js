var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./dev.sqlite3"
    }
});

var bookshelf = require('bookshelf')(knex);

var Contact = bookshelf.Model.extend({
    tableName: 'users'
});

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ host: '0.0.0.0', port: 3000 });

server.route({
    method: 'GET',
    path: '/api/users',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/api/users/{id}',
    handler: function (request, reply) {
        new Contact({ id: request.params.id }).fetch().then(function (contact) {
            reply('{"cantact:" ' + JSON.stringify(contact) + '}');
        });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});