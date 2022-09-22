import { openDb } from "../configDb.js";

export async function criarTabela(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS USUARIO (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME TEXT, LOGIN TEXT)');
    })
}

export async function insertUsuario(usuario){
    openDb().then(db => {
        db.run('INSERT INTO USUARIO (NOME, LOGIN) VALUES (?,?)',[usuario.nome, usuario.login]);
    });
}
