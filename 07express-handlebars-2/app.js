var express = require('express');

var exphbs = require('express-handlebars');

var app = express();    

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/quemsomos', function(req, res) {
    let nomes = [
        {"nome": "Fernando"},
        {"nome": "Rita"},
        {"nome": "Ana Lúcia"},
        {"nome": "Carolina"},
        {"nome": "Alexsandro"},
    ]
    res.render('quemsomos', {data: nomes});
});

app.get('/contato', function(req, res) {
    res.render('contato');
});

app.listen(3000);