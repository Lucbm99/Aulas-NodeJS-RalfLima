var express = require('express');

var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    let animais = [
        {"nome": "Tobias", "tipo": "cachorro"},
        {"nome": "Pingo", "tipo": "cachorro"},
        {"nome": "Olívia", "tipo": "cachorro"},
    ]

    res.render('home', {isFemale: true, dados: animais});
});

app.get('/empresa', function(req, res) {
    res.render('empresa', {maiorDeIdade: true});
});

app.get('/contato', function(req, res) {
    res.render('contato');
});

app.listen(8080);