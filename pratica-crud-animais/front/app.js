var express = require('express');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var fetch = require('node-fetch');

//App 
var app = express();

//body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configuração arquivos estáticos
app.use(express.static(__dirname + '/public'));

//Template
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//Rotas
app.get('/', function(request, response) {
    fetch('http://localhost:3000/animais', {
        method: 'GET',
    })
    .then(retorno => retorno.json())
    .then(retorno => response.render('inicio', {
        dados: retorno
    }));
    //vetor dados contem o json
})

//rota de cadastros - Form
app.post('/cadastrar', function(request, response) {
    let nome = request.body.nome_animal;
    let patas = request.body.patas;
    let classe = request.body.classe_animal;


    let dados = {
        'nome':nome,
        'patas':patas,
        'classe':classe
    }

    
    fetch('http://localhost:3000/animais', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {'Content-Type':'application/json'}
    })  
    .then(response.redirect('/'))
})

//seleção pelo id -
app.get('/selecionar/:id', function(request, response) {
    let id = request.params.id;

    fetch('http://localhost:3000/animais/'+id, {
        method: 'GET'
    })
    .then(retorno => retorno.json())
    .then(retorno => response.render('selecionar', {dados: retorno}))
})

app.post('/editar', function(req, res) {
    let nome = req.body.nome_animal;
    let patas = req.body.patas;
    let classe = req.body.classe_animal;
    let id = req.body.id;

    let dados = {
        'nome':nome,
        'patas':patas,
        'classe':classe
    }

    fetch('http://localhost:3000/animais/'+id, {
        method: 'PUT',
        body: JSON.stringify(dados),
        headers: {'Content-Type':'application/json'}
    })
    .then(res.redirect('/'))

})


//rota de deleção
app.get('/remover/:id', function(request, response) {
    let id = request.params.id;

    fetch('http://localhost:3000/animais/'+id, {
        method: 'DELETE',
    })
    .then(response.redirect('/'))})

//Servidor
app.listen(8080);