const request = require('supertest');
const assert = require('chai').assert;
const Joi = require('joi');
const correios = require('./schema');

// link from request: http://www.mocky.io/v2/5c8820633200009d643bd6af

describe('Teste de contrato', () => {
    it('GET', () => {
        request('http://www.mocky.io')
        .get('/v2/5c8820633200009d643bd6af')
        .expect('Content-type', 'application/json')
        .end((err, res) => {
            if (err) return err;
            let actual = res.body; 
            
            err = Joi.validate(actual, correios.schemaS(),
                    { abortEarly: false},
                ).error
            console.log(err);
            if (err) return err;
            assert.equal(err, null);
        });
    });
});