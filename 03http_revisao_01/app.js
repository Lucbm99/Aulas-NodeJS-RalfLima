var http = require('http');

http.createServer(function(request, response) {
    response.write("Testando a criacao de um servidor HTTP");

    response.end();
}).listen(8888);
