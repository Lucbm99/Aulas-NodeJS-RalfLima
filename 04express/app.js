// Importar o express 
var express = require('express');

//Criando variável para ter acesso as funcionalidades do Express
var app = express();

// Rota 
app.get('/', function(request, response) {
    response.write('Utilizando o Express');

    response.end();
})

// Servidor
app.listen(8080);