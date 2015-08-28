var controllers = require('../controllers/controllers');

module.exports =
[
    { method: 'GET', path: '/api/users', config: controllers.users },
    { method: 'GET', path: '/api/users/{id}', config: controllers.user },
    { method: 'POST', path: '/api/users', config: controllers.userCreate },
    { method: 'PUT', path: '/api/users/{id}', config: controllers.userUpdate },
    { method: 'DELETE', path: '/api/users/{id}', config: controllers.userDelete },
    { method: 'GET', path: '/andysroute', handler: function (request, reply) { reply('Ooh ah ah'); } },
    { method: 'GET', path: '/api/prayer_requests', config: controllers.prayer_requests },
    { method: 'GET', path: '/api/prayer_requests/{id}', config: controllers.prayer_request },
    { method: 'POST', path: '/api/prayer_requests', config: controllers.prayer_requestCreate },
    { method: 'PUT', path: '/api/prayer_requests/{id}', config: controllers.prayer_requestUpdate },
    { method: 'DELETE', path: '/api/prayer_requests/{id}', config: controllers.prayer_requestDelete },

];
