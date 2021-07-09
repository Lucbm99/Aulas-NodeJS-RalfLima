var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.write("Aqui e a pagina home do site");

    response.end();
});

app.get('/sobre', function(request, response) {
    response.write("Aqui e a pagina sobre do site");

    response.end();
});

app.get("/contato", function(request, response) {
    response.write("Aqui e a pagina contato do site");

    response.end();
})

app.listen(8080);