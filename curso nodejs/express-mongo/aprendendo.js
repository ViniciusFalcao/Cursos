const mongoose = require('mongoose')

//configurando mongoose

mongoose.connect('mongodb://localhost/aprendendo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useFindAndModify: false,
   // useCreateIndex: true
}).then(() => {
    console.log("MongoDB conectado")

}).catch((erro) => {
    console.log("Conexão ao banco de dados falhou  " + erro)
})

//model -usuario
//Definindo model 

const UsuarioSchema=mongoose.Schema({
    nome:{
        type:String,
        require:true
    },
    sobrenome:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },

    idade:{
        type:Number,
        require:true
    },
    pais:{
        type:String,
    }
})
//Collection
mongoose.model('usuarios',UsuarioSchema)

const Vinicius=mongoose.model('usuarios')

new Vinicius({
    nome:'Vinicius',
    sobrenome:'Canuto',
    email:'viny@email.com',
    idade:19,
    pais:'Brasil'
}).save().then(()=>{
    console.log("Definição de dados foi um sucesso")

}).catch((erro)=>{
    console.log("Ocorrreu um erro ao definir os dados:" +erro)


})