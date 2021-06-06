const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:4000');

describe ("GET /iecho with parameter text", () => {
    it('should return a response with HTTP code 200', (done)=> {
      api.get('/iecho?text=hello').expect(200, done);
    });

    it('should return a response with HTTP code 400  with empty parameter', (done)=> {
      api.get('/iecho?text=').expect(400, done);
    });

    it('hould return a response with HTTP code 200  and json content-type', (done) => {
      api
        .get('/iecho?text=hello')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

  });

