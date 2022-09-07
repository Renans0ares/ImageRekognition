//index.js
(async () => {
    const database = require('./db');
    const Usuario = require('./USUARIO.js');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();