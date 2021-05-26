var express = require('express');
var bodyParser = require('body-parser');


var app = express();

//Configurando o BodyParser - recebimento de informações via json   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Rotas 
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/formulario.html');
})

app.post('/receber', function(request, response) {
    response.write("Nome digitado - " +request.body.nome);

    //pegar o campo pela requisição - request

    response.end();
    //finalizando
})

//Server
app.listen(8080);
