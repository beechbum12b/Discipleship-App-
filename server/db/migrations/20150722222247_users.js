'use strict';

exports.up = function(knex, Promise) {  
    return knex.schema.createTable('users', function(t) {
        t.increments().primary();
        t.dateTime('created_at').notNull();
        t.dateTime('updated_at').notNull();
        t.string('email').notNull();
        t.string('username').notNull();
        t.string('password_hash').nullable();
        
    });
}; 

exports.down = function(knex, Promise) {  
    return knex.schema.dropTable('users');
    };