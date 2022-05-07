const db=require("./db");


const Post=db.sequelize.define('postagens',{
    Titulo:{type:db.Sequelize.STRING},
    Conteudo:{type:db.Sequelize.TEXT}
    
})

//Post.sync({force:true})

module.exports=Post;