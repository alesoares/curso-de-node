
var express = require('express');

var msg = require("./mod_teste");

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home/index');
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render('admin/form_add_noticia');
});

app.get('/noticias', function(req, res){
    res.render('noticias/noticias');
});

app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia');
});

app.get('/tecnologia', function(req, res){
    res.render('secao/tecnologia');
});







app.get('/', function(req, res){
    res.send('<html><body>Bem vindo ao meu site!!!</body></html>');
});

app.get('/sobre', function(req, res){
    res.send('<html><body>Sobre mim</body></html>');
});

//app.listen(3000, function(){
    //console.log("Servidor rodando com Express");
//});

/// SOMENTE PARA UM TESTE
app.listen(3000, function(){
    console.log(msg());
});