var bookshelf = require('../config/bookshelf');
var Contact = bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = {
    Contact: Contact
};