var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'principal'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('inicio');
});

app.get('/contato', function(req, res) {
    res.render('contato');
})

app.listen(3000);