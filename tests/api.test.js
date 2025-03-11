const request = require('supertest');
const app = require('../server');

describe('API Endpoints', () => {
  it('GET /status - should return status OK', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'OK');
  });

  it('GET /users - should return a list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /users - should create a new user', async () => {
    const newUser = { name: "Charlie" };
    const res = await request(app).post('/users').send(newUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', "Charlie");
  });

  it('GET /products - should return a list of products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /products - should create a new product', async () => {
    const newProduct = { name: "Produit C", price: 30.0 };
    const res = await request(app).post('/products').send(newProduct);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', "Produit C");
    expect(res.body).toHaveProperty('price', 30.0);
  });
});
