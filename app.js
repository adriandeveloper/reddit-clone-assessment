'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const userRouter = require('./routes/users');
require('ejs');
app.set('view engine', 'ejs')
require('locus');

// render the home page
app.get('/', (req, res) => {
  res.render('statics/home');
});

// Routes
app.use('/users', userRouter);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
