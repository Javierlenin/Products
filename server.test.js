const request = require('supertest');
const app = require('./server'); // Adjust the path to your server file

describe('GET /products', () => {
    it('responds with 200 and an array of vacancies', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        // You can add more assertions based on the expected structure of the products
    });
});

describe('POST /products', () => {
    it('responds with 201 and the created product when valid data is sent', async () => {
        const newProduct = {
            name: 'Banana',
            price: 15.99,
            stock: 30,
            category: 'Frutas'
        };
        const response = await request(app).post('/products').send(newProduct);
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject(newProduct);
    });

    it('responds with 400 when name or price is missing', async () => {
        const invalidProduct = {
            stock: 30,
            category: 'Frutas'
        };
        const response = await request(app).post('/products').send(invalidProduct);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});
