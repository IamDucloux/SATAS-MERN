const express = require('express');
const cors = require('cors');

const app = express();
 
// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/', require('./routes/home'));
app.use('/api/home', require('./routes/home'));
app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/product'));


module.exports = app;
