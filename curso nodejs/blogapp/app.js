//carregando módulos
const express = require('express');
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const mongoose=require('mongoose')
const app = express()
const admin = require('./routes/admin')
const path = require('path');
const session=require("express-session")
const flash =require('connect-flash')


//configs

//session
app.use(session({
    secret:"cursodenode",
    resave:true,
    saveUninitialized:true
}))

app.use(flash())
//middleware 

app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg')
    res.locals.error_msg=req.flash("error_msg")
    next()

})

//bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//moongoose

mongoose.connect('mongodb://localhost/blogapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conexão com MongoDB foi um sucesso")

}).catch((erro) => {
    console.log("Ocorreu um erro:" + erro)

})
//public
app.use(express.static(path.join(__dirname, 'public')))
app.use((req,res,next)=>{
    console.log('Oi eu sou um midleware')
    next();

})


//rotas
app.use('/admin', admin)

//outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor  rodando!")

})