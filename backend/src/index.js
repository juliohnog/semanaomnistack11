const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Convert all requests in JSON format.
app.use(routes);

app.listen(3333);