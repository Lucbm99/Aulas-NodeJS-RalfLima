var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.write("Pagina Home");

    res.end();
});

app.get('/quemsomos', function(req, res) {
    res.write('Quem somos!!');

    res.end();          
});

app.listen(8888);