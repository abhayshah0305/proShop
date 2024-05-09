import express from 'express';
import products from './data/products.js';

const port = 5001;

const app = express();
app.get('/', (req, res) => {
    res.send('API Running');
});

app.get('/api/products', (req,res) => {
    res.json(products);
});

app.listen(port, () => console.log(`Server running on port ${port}`));