
//carregando módulos
const express=require('express');
const handlebars=require('express-handlebars')
const bodyparser=require('body-parser')
//const mongoose=require('mongoose')
const app=express()

//configs
    //bodyparser
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    //handlebars
    app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
    app.set('view engine','handlebars');


//rotas

//outros
const PORT=8081
app.listen(PORT,()=>{
    console.log("Servidor em rodando!")

})