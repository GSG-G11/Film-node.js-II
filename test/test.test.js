/* eslint-disable no-undef */
const supertest = require('supertest');

const router = require('../src/router');

test('handle error', (done) => {
  supertest(router)
    .get('/xyz')
    .expect(404)
    .end((err, res) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(done(err));
      } else {
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe('nothing was found');
        done();
      }
    });
});
test('handle error', (done) => {
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
