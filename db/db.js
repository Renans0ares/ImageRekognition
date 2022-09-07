const Sequelize = require('sequelize');
const sequelize = new Sequelize('GR_COMPANY','root', '@B5lbqGK2dD7', { //Senha gerada aleatoriamente
    dialect: 'sqlite', //Por enquanto com SQLITE, possível alteração para MySQL
    port:5500
});

module.exports = sequelize;
