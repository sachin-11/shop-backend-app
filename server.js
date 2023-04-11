const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const products = require('./data/products')

dotenv.config();

const app = express()

//handling cors error
app.use(cors);
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running.')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    );
  });
  

module.exports = server;