'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var assert = require("assert")

describe('GET /api/portfolio', function() {

  it('should respond with JSON arrays', function(done) {
    request(app)
      .get('/api/portfolio/1/stocks')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('should create and then retrieve 1 more stock', function(done) {
    request(app)
      .post('/api/portfolio/1/stocks')
      .send({name: "Iberia", symbol: "IBE", amount: 20, portfolio: 1})
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function(){
        request(app)
          .get('/api/portfolio/1/stocks')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            assert.equal(res.body.length, 4);
            done();
          });
      });
  });
});
