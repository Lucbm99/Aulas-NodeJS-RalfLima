var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('inicio', {isAnimals: true, aparecerNome: false});
});

app.get('/projetos', function(req, res) {
    res.render('projetos');
});

app.get('/quemsomos', function(req, res) {
    res.render('quemsomos');
});

app.get('/contato', function(req, res) {
    res.render('contato');
});

app.listen(8080);