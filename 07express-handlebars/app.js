var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

//configurações dos arquivos handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {

    let pessoas = [
        {"nome": "Lucas", "sobrenome": "Baradel"},
        {"nome": "Lucas", "sobrenome": "Baradel"},
        {"nome": "Lucas", "sobrenome": "Baradel"}
    ]

    response.render('inicio', {gostandoDeNode: false, dados: pessoas});
});

app.get('/sobre', function (request, response) {
    response.render('sobre');
});

app.listen(8080);