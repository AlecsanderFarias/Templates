const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
/* require('./config/connect'); */

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./src/index')(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
