var express = require('express');

var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {

    let pessoas = [
        {"nome": "Lucas", "idade": 22},
        {"nome": "Joao", "idade": 22},
        {"nome": "Fernando", "idade": 22},
    ]

    res.render('home', {gostandoDeNode: false, dados:pessoas});
});


app.get('/empresa', function(req, res) {
    res.render('empresa');
});

app.listen(8585);