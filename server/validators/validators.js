var Joi = require('joi');

module.exports = 
{
    user: Joi.object
    (
        {
            id: Joi.number().optional(),
            email: Joi.string().email().required(),
            username: Joi.string().min(2).max(30).required(),
            password_hash: Joi.string().min(6).max(30).required()
        }
    )
}