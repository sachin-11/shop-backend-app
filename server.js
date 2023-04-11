const express = require('express');

const app = express();
const port = 5000; // Port to listen on

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...')
  })
  
  app.get('/api/products', (req, res) => {
    res.json(products)
  })
  
  app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
  })

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;