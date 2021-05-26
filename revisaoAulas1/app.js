var express = require('express');

var app = express();

//caminho onde serão acessados os arquivos estáticos (css, js, images, etc)

app.use(express.static(__dirname + '/public'))


//rotas 
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/template/index.html');
})


app.listen(8080);