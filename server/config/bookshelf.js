var knexConfig = require(knexConfig[settings.environment]);
var settings = require('./settings');
module.exports = bookshelf;

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './dev.sqlite3'
    }
});

var bookshelf = require('bookshelf')(knex);