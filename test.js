var assert = require('assert');
var request = require('supertest');

describe('Test user agent', function() {

  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();
  });

  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('consume ingredients that are in your inventory', function testPath(done) {
  request(server)
    .get('/')
    .expect(200)
    .end(function(err, res) {
      if (err) throw err;
      assert.equal(res.body['user-agent'], 12);
    });
});

});
