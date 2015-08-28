'use strict';

exports.up = function (knex, Promise) {
    return knex.schema.createTable('prayer_requests', function (t) {
        t.increments().primary();
        t.dateTime('created_at').notNull();
        t.dateTime('updated_at').notNull();
        t.string('category').notNull();
        t.integer( 'user_id' ).notNull();
        t.string('request').nullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('prayer_requests');
};