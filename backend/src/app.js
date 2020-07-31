const express = require('express');
const cors = require('cors');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
//app.use('/', () => {console.log('Hello world')});
app.use('/api/home', require('./routes/home'));
/* 
app.use('/api/login', require('./routes/login'));
app.use('/api/register', require('./routes/register'));
app.use('/api/users', require('./routes/users'));
app.use('/api/dashboard', require('./routes/dashboard')); 
*/


module.exports = app;
