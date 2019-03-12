const Joi = require('joi')

schemaS = () => {
  let schema = Joi.object().keys({
    bairro: Joi.string(),
    cep: Joi.number().required(),
    cidade: Joi.string().required(),
    cidade_info: Joi.object().keys({
      area_km2: Joi.string().required(),
      codigo_ibge: Joi.number().required(),
    }),
    estado: Joi.string().required(),
    estado_info: Joi.object().keys({
      area_km2: Joi.string().required(),
      codigo_ibge: Joi.number().required(),
      nome: Joi.string().required(),
    }),
  })
  return schema
}

module.exports = {
    schemaS
}