'use strict';

exports.seed = function (knex, Promise) {
    return Promise.join(
        knex('users').del(),
        knex('users').insert([{
        created_at: new Date(),
        updated_at: new Date(),
        email: 'monkeys@poop.net',
        username: 'Muuuuuunky',
        password_hash: 'banana',
        
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: 'Pooph@test.net',
        username: 'gnarlynate',
        password_hash: 'gummy',

    }]));
};