//Importar os módulos 
var express = require('express');
var fetch = require('node-fetch');

//App 
var app = express();

//Rota 
app.get('/', function(request, response) {

    //acessa a url, e o que tiver nela, retornará em formato json 

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(retorno => retorno.json()) 
    .then(retorno => console.table(retorno));

    response.end();

});

//Servidor
app.listen(8080);