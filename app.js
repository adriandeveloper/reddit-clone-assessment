'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
require('ejs');
require('locus');


app.listen(port, () => {
  console.log('Listening on port ' + port);
});
