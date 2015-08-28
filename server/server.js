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

// Add the server routes
server.route(require('./config/routes'));


server.start(function () {
    console.log('Server running at your moms house:', server.info.uri);
});