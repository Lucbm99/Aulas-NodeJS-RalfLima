var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Rotas
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/form.html');
})

app.post('/viewdata', function(request, response) {
    response.write("Nome digitado: "+request.body.nome + '\n');
    response.write("E-mail digitado: "+request.body.email + '\n');
    response.write("Nome do animal digitado: "+request.body.nome_animal + '\n');

    response.end();
})

app.listen(8080);