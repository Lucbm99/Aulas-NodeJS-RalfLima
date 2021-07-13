var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.write("Página home");

    response.end();
});

app.get('/sobre', function(request, response) {
    response.write("Página sobre");

    response.end();
});


app.listen(8855);