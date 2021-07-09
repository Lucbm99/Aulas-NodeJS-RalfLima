var http = require('http');

http.createServer(function(request, response) {
    response.write('Testando a aula 4 do servidor http');

    console.log("Servidor rodando");

    response.end();
}).listen(8999);