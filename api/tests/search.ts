const test = require('ava');
const supertest = require('supertest');
const app = require('../app');

const request = (url) => supertest(app).get(url);

test('handlers: search: without a query', async (t) => {
  const response = await request(`/api/search`);
  t.is(response.status, 200);
  t.deepEqual(response.body, {
    message : 'Hello world'
  });
});
