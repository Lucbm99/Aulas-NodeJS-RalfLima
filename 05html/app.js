var express = require('express');

// app
var app = express();

//Especificar local do CSS e da imagem
app.use(express.static(__dirname + '/public'));


//Rotas
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/pagina.html');

});

//Servidor
app.listen(8080);