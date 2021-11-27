import * as Joi from 'joi'

export const configSchema = Joi.object({
    PORT: Joi.number().default(3001),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_NAME: Joi.string().required()
})