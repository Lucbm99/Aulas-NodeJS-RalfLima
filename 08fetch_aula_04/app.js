var express = require('express');
var fetch = require('node-fetch');

var app = express();

app.get('/', function(req, res) {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick')
    .then(response => response.json())
    .then(json => console.log(json))
});

app.listen(4455);