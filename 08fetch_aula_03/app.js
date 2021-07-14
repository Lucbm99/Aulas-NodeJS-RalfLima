var express = require('express');
var fetch = require('node-fetch');

var app = express();

app.get('/', function(request, response) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(retorno => retorno.json())
    .then(json => console.log(json))
});

app.listen(8888);