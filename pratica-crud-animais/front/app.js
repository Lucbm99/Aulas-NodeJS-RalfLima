var express = require('express');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');


//App 
var app = express();

//body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configuração arquivos estáticos
app.use(express.static(__dirname + '/public'));

//Template
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Rotas
app.get('/', function(request, response) {
    response.render('inicio');
})

//Servidor
app.listen(8080);