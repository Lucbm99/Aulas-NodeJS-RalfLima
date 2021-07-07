var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.write('Escrevendo uma mensagem na home do site');

    response.end();
});

app.get('/sobre', function(request, response) {
    response.write('Escrevendo uma mensagem na pagina sobre do site');

    response.end();
})

app.get('/quem-somos', function(request, response) {
    response.write('Escrevendo uma mensagem na pagina quem somos do site');

    response.end();
});

app.get('/contato', function(request, response) {
    response.write('Escrevendo uma mensagem na pagina de contato do site');

    response.end();
});

app.listen(8080);