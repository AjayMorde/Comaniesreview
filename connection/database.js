const Sequelize=require('sequelize');
const sequelize=new Sequelize('cr','root','Ajay@1998',{  
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;