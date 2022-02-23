/* eslint-disable no-undef */
const supertest = require('supertest');

const router = require('../src/router');

test('handle error for not found endpoint', (done) => {
  supertest(router)
    .get('/xyz')
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(done(err));
      } else {
        done();
      }
    });
});
test('test endpoint / ', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(done(err));
      } else {
        expect(res.statusCode).toBe(200);
        done();
      }
    });
});
test('test for endpoint includes title ', (done) => {
  supertest(router)
    .get('/title')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(done(err));
      } else {
        expect(res.statusCode).toBe(200);
        done();
      }
    });
});
