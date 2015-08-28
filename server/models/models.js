var bookshelf = require('../config/bookshelf');
var User = bookshelf.Model.extend({
    tableName: 'users'
});

var Prayer_request = bookshelf.Model.extend({
    tableName: 'prayer_requests'
});

module.exports = {
    User: User,
    Prayer_request: Prayer_request
};