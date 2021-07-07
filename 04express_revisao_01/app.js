var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.write("Aqui e a home do site");

    response.end();
})

app.get('/sobre', function(request, response) {
    response.write("Aqui e a pagina sobre");

    response.end();
})

app.listen(8009);