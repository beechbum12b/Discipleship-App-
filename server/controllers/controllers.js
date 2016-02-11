var models = require('../models/models'),
    moment = require('moment'),
    validators = require('../validators/validators'),
    utils = require('../utils/utils');

module.exports = {
    users: {
        handler: function(request, reply) {
            models.User.fetchAll().then(function(users) {
                reply(utils.formatJson('users', users));
            });
        }
    },
    prayer_requests: {
        handler: function(request, reply) {
            models.Prayer_request.fetchAll().then(function (prayer_requests) {
                reply(utils.formatJson('prayer_requests', prayer_requests));
            });
        }
    },

    user: {
        handler: function(request, reply) {
            new models.User({ id: request.params.id }).fetch().then(function (user) {
                reply(utils.formatJson('user', user));
            });
        }
    },

    prayer_request: {
        handler: function(request, reply) {
            new models.Prayer_request({ id: request.params.id }).fetch().then(function (prayer_request) {
                reply(utils.formatJson('prayer_requests', prayer_requests));
            });
        }
    },
    userCreate: {
        handler: function(request, reply) {
            request.payload.user.created_at = new Date();
            request.payload.user.updated_at = new Date();

            new models.User(request.payload.user).save().then(function(user) {
                //reply(utils.formatJson('user', user));
                reply(user);
            });
        },
        validate: {
            payload: validators
        }
    },
    prayer_requestCreate: {
        handler: function(request, reply) {
            request.payload.prayer_request.created_at = new Date();
            request.payload.prayer_request.updated_at = new Date();
            new models.Prayer_request(request.payload.prayer_request).save().then(function (prayer_request) {
                reply(utils.formatJson('prayer_request', prayer_request));
            });

        }
    },
    userUpdate: {
        handler: function (request, reply) {
            new models.User({ id: request.params.id }).fetch().then(function (existingUser) {
                existingUser.updated_at = new Date();
                var currentDate = new Date();
                console.log('andys server says that the time is ' + currentDate);
                existingUser.email = request.payload.user.email;
                existingUser.password_hash = request.payload.user.password_hash;
                existingUser.username = request.payload.user.username;

                console.log('Blomping all night')

                existingUser.save().then(function (user) {
                    reply(utils.formatJson('user', user));
                });

            });

          },
        validate: {
            payload: validators
        }
    },

    prayer_requestUpdate: {
        handler: function (request, reply) {
            new models.prayer_request({ id: request.params.id }).fetch().then(function (existingprayer_request) {
                existingprayer_request.updated_at = new Date();
                var currentDate = new Date();
                console.log('andys server says that the time is ' + currentDate);
                existingPrayer_request.email = request.payload.user.email;
                existingPrayer_request.password_hash = request.payload.user.password_hash;
                existingPrayer_request.prayer_requestname = request.payload.prayer_request.prayer_requestname;

                console.log('Will be praying for you')

                existingprayer_request.save().then(function (prayer_request) {
                    reply(utils.formatJson('prayer_request', prayer_request));
                });

            });

        }
    },
    userDelete: {
        handler: function(request, reply) {
            new models.User(request.payload.user).destroy().then(function(user) {
                reply(JSON.stringify(user));
            });
        }
    },
    prayer_requestDelete: {
    handler: function(request, reply) {
        new models.Prayer_request(request.payload.prayer_request).destroy().then(function (prayer_request) {
            reply(JSON.stringify(prayer_request));
        });
    }
}
};
