const express = require('express');

const { ProductController } = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/product/:productId', ProductController.getProductById);

module.exports = app;
