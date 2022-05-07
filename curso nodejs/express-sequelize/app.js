const express=require('express');
const app=express();

app.get("/",function (req,res) {
    res.sendFile(__dirname+"/html/index.html")

    
})
app.get("/sobre",function(req,res){
    res.sendFile(__dirname+"/html/sobre.html");

})
app.get("/contato",function(req,res){
    res.send("Só a partir do link kk")
})
app.get("/:nome/:cargo",function(req,res){
    res.send("Ola "+req.params.nome+" seu cargo é "+req.params.cargo)
})




app.listen(8081,function () {
    console.log("Servidor rodando na url http://localhost:8081")
    
});