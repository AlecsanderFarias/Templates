const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.status(200).json({
    status: 'Servidor funcionando'
  });
});

module.exports = routes;
