//Importar o módulo http
var http = require('http');

//Criar o servidor
http.createServer(function(request, response) {
    //escreve uma mensagem
    response.write("aprendendo node.js com o ralf");

    //finaliza o servidor
    response.end();
}).listen(8080);

// ele vai rodar na porta 8080