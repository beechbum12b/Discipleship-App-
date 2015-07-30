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
    config = require('./config/settings');
var server = new Hapi.Server();
server.connection({ host: '0.0.0.0', port: config.port });
module.exports = server;

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Retain!');
    }
});

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
            reply('{"contact:" ' + JSON.stringify(contact) + '}');
        });
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});