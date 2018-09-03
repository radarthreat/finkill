
const express = require('express');
const app = express();
const port = process.argv(2) || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
})

app.get('/main', (req, res) => {
  // get dashboard/summary data
})

app.get('/stock/:ticker', (req, res) => {
  // show data for ticker
})

app.post('/portfolio', (req, res) => {
  // create new empty portfolio
})

app.get('/portfolio', (req, res) => {
  // return portfolio positions
})

app.any('/portfolio/position', (req, res) => {
  //get, post, put, and delete position
})

app.listen(port);

// stock ticker route
// summary route
// portfolio route with authentication