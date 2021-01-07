console.log("server.js Iniciando");

const express = require('express');

app = express();

const port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function (req, res) {
    console.log("server.js rota get principal");
    res.json({ hello: 'world' });
});

console.log('server.js messagem RESTful API server iniciada: ' + port);
