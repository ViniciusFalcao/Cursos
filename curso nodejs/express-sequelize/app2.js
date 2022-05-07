const express=require("express");
const app=express();
const handlebars=require("express-handlebars");
const bodyParser=require("body-parser")
const Post=require("./models/Post")
//config 
//template engine


app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars');

//body parser

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//Rotas    

app.get('/',function (req,res) {
                        //DESC: lista da mais atual para mais antiga/ASC:lista do mais antigo pra mais nova 
    Post.findAll({order:[['id','DESC']]}).then(function (posts) {
        res.render('home',{posts:posts})
        
    })
    
    
})


app.get('/cad',function (req,res) {
    res.render('form')
    
})
app.post('/add',function(req,res){
    //res.send('Título: '+req.body.titulo+'<br> '+"Texto: "+req.body.conteudo)
    Post.create({
        Titulo:req.body.titulo,
        Conteudo:req.body.conteudo
    }).then(function () {
        res.redirect('/')
        
    }).catch(function (erro) {
        res.send("Houve um erro:"+erro)
        
    })

})

app.get('/deletar/:id',function (req,res) {
    Post.destroy({where:{'id':req.params.id}}).then(function () {
        res.send("Postagem deletada com sucesso  !")
        
    }).catch(function(erro){
        res.send("Ocorrreu um erro:"+erro)
    })
})



app.listen(8090,function (req,res) {
    console.log("Servidor iniciado")
    
});