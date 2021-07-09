const { response } = require('express');
var http = require('http');

http.createServer(function(request, response) {
    response.write("Testando a criacao do http - aula 03");

    console.log("Servidor rodando");
    response.end();
}).listen(8888);