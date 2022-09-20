const Sequelize = require('sequelize');
const database = require('./db.js')

const Produto = database.define('PRODUTO',{
    CODIGO_ID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    NOME:{
        type: Sequelize.STRING,
    },
    TIPO1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CONFIDENCE1:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    TIPO2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    CONFIDENCE2:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    TIPO3:{
        type: Sequelize.STRING,
    },
    CONFIDENCE3:{
        type: Sequelize.DOUBLE,
    },
    TIPO4:{
        type: Sequelize.STRING,
    },
    CONFIDENCE4:{
        type: Sequelize.DOUBLE,
    },
    CAMINHOIMAGE:{
        type: Sequelize.STRING
    }
})

module.exports = Produto;