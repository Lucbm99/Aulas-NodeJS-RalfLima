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

app.post('/dadosenviados', function(request, response) {
    response.write("Carro: "+request.body.carro + '\n');
    response.write("Marca: "+request.body.marca + '\n');
    response.write("Ano: "+request.body.ano + '\n');

    response.end();
})

app.listen(8080);