var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//configuração 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rotas 
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.post('/receberdados', function(request, response) {
    response.write("Nome digitado: "+request.body.nome + '\n');

    response.end();
})

app.listen(5555);