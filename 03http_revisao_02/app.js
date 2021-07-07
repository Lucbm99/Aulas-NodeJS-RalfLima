var http = require('http');

http.createServer(function(request, response) {
    response.write("Testando a criacao de um servidor - parte 2");

    console.log("Servidor rodando!")
    response.end();
}).listen(8858);