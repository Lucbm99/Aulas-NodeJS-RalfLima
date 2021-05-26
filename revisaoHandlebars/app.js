var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('inicio');
});

app.get('/body', function(req, res) {
    res.render('body');
});

app.get('/rodape', function(req, res) {
    res.render('rodape');
});


app.listen(8080);