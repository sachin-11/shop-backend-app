const express = require('express')
const cors = require('cors')
const products = require('./data/products')

const app = express()

//handling cors error
app.use(cors);
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))