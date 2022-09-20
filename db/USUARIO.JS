const Sequelize = require('sequelize');
const database = require('./db.js')

const Usuario = database.define('USUARIO',{
    CODIGO_ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    LOGIN:{
       type:Sequelize.STRING,
       allowNull:false 
    },
    SENHA:{
        type:Sequelize.STRING,
        allowNull:false 
     },
     NOME:{
        type:Sequelize.STRING,
        allowNull:false 
     },
     TELEFONE:{
        type:Sequelize.STRING,
     }
})

module.exports = Usuario;

// CREATE
// (async () => {
//     const database = require('./db');
//     const Produto = require('./produto');

//     try {
//         const resultado = await database.sync();
//         console.log(resultado);

//         const resultadoCreate = await Produto.create({
//             nome: 'mouse',
//             preco: 10,
//             descricao: 'Um mouse USB bonitão'
//         })
//         console.log(resultadoCreate);
//     } catch (error) {
//         console.log(error);
//     }
// })();


// READ
// const produtos = await Produto.findAll();
// console.log(produtos);

// const produto = await Produto.findByPk(1);
// console.log(produto)


// UPDATE   
// const produto = await Produto.findByPk(1);
// //console.log(produto);
// produto.nome = "Mouse Top";

// const resultadoSave = await produto.save();
// console.log(resultadoSave);

// DELETE   
// //assim
// Produto.destroy({ where: { id: 1 }});

// //ou assim
// const produto = await Produto.findByPk(1);
// produto.destroy();
