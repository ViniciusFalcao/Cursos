const Sequelize=require('sequelize');
const sequelize= new Sequelize('test','root','2358viny@',{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar erro "+ erro)

})

const Postagem=sequelize.define('postagens',{
    titulo:{
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
        
    }
})
Postagem.create({
    titulo:"Contos",
    conteudo:"Era uma vez "
})

//Postagem.sync({force:true})

const Usuario=sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})

//Usuario.sync({force=true})

Usuario.create({
    nome:"Vinicius",
    sobrenome:"Canuto Falcão",
    idade:"20",
    email:"ex@mail.com"
})