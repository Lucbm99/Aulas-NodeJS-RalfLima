var express = require('express')
var fetch = require('node-fetch');

app = express();

app.get('/', function(request, response) {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(retorno => retorno.json())
    .then(retorno => console.table(retorno));

    response.end();
})

app.listen(2222);