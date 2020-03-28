const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/**
 * Esse bloco será necessário somente se a aplicação for para produção,
 * pois é preciso passar de qual origem vai vim a requisição
 * app.use(cors({
    origin: 'http://meuapp.com'
   }));
 */
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
