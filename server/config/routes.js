var server = require('../server');  //,
    //controllers = require('../controllers/controllers');


module.exports =
[
    { method: 'GET', path: '/', handler: function (request, reply) { reply('I haz the root!'); } },
    { method: 'GET', path: '/api/users', handler: function (request, reply) { reply('Hello, world!'); } },
    { method: 'GET', path: '/api/lala', handler: function (request, reply) { reply('I win!'); } },
           {
               method: 'GET',
               path: '/api/whatsamonkeysay',
               handler:
                   function (request, reply) {

                       reply('Ooh ah ah');


                   }
           },

    {
        method: 'GET',
        path: '/api/users/{id}',
        handler:
            function (request, reply) {
                new Contact({ id: request.params.id })
                    .fetch()
                    .then
                    (
                        function (contact) {
                            reply('{"contact:" ' + JSON.stringify(contact) + '}');
                        }
                    );
            }
    }



];