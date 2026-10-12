const express = require('express');
const app = express();

app.use(express.json());

const products = [
  { id: 1, name: 'Manzana', price: 10.99 , stock: 20, category: 'Frutas'},
  { id: 2, name: 'Pera', price: 19.99, stock: 15, category: 'Frutas'},
  { id: 3, name: 'Tomate', price: 5.99, stock: 25, category: 'Vegetales' },
];
