const Sequelize=require('sequelize');
const sequelize= new Sequelize('postapp','root','2358viny@',{
    host:'localhost',
    dialect:'mysql',
    query:{raw:true}
})

module.exports={
    sequelize:sequelize,
    Sequelize:Sequelize
}