const express = require('express');
const app = express();

app.use(express.json());

const products = [
    { 
        id: 1,
        name: 'Manzana', 
        price: 10.99,
        stock: 20,
        category: 'Frutas' 
    },
    { 
        id: 2, 
        name: 'Pera', 
        price: 19.99, 
        stock: 15, 
        category: 'Frutas' },
    { 
        id: 3, 
        name: 'Tomate', 
        price: 5.99, 
        stock: 25, 
        category: 'Vegetales' 
    },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const { name, price, stock, category } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price,
        stock,
        category
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
