console.log("server.js INICIANDO");
var express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

console.log("server.js INICIANDO MODEL");
const Message = require('./api/models/msgModel');

const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

console.log("server.js INICIANDO CONEÇÃO COM BANCO DE DADOS");
mongoose.connect('mongodb://localhost:27017/msgdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

console.log("server.js INICIANDO ROTA");
var routes = require('./api/routes/msgRoutes');

routes(app);

app.listen(port);

app.get('/', function (req, res) { res.json({ hello: 'world' }); })


console.log('server.js APLICACAO INICIADA ' + port);