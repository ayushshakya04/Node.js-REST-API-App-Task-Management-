// test/app.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Task Manager API', () => {

  it('GET /api/tasks - should return all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('GET /api/tasks/:id - should return a task by ID', async () => {
    const res = await request(app).get('/api/tasks/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('POST /api/tasks - should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'New Tasks',
        completed: false
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'New Tasks');
  });

  it('PUT /api/tasks/:id - should update a task', async () => {
    const res = await request(app)
      .put('/api/tasks/1')
      .send({
        title: 'Updated Task',
        completed: true
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Task');
  });

  it('DELETE /api/tasks/:id - should delete a task', async () => {
    const res = await request(app).delete('/api/tasks/1');
    expect(res.statusCode).toEqual(204);
  });
});
