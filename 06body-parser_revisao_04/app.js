var express = require('express');

var bodyParser = require('body-parser');
var app = express();

//configuração
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//rotas
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/viewdata', function(req, res) {
    res.write("Nome: "+req.body.nome + '\n');
    res.write("E-mail: "+req.body.email + '\n');
    res.write("Data nascimento: "+req.body.datanascimento + '\n');


    res.end();
})

app.listen(8080);