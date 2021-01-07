console.log("Iniciando");

const express = require('express');

app = express();

const port = process.env.PORT || 3000;

app.listen(port);

app.get('/', function (req, res) {
    res.json({ hello: 'world' });
});

console.log('Messagem RESTful API server iniciada: ' + port);
