var http=require('http');

http.createServer(function (req,res) {
    res.end("Ola bem vindo ao meu primeiro servidor")
    
}).listen(8081);

console.log("O servidor está em funcionamento")