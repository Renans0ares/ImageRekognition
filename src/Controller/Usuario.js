import { openDb } from "../configDb.js";

export async function criarTabela() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS USUARIO (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME TEXT, LOGIN TEXT)');
    })
}

export async function inserirUsuario(usuario) {
    openDb().then(db => {
        db.run('INSERT INTO USUARIO (NOME, LOGIN) VALUES (?,?)', [usuario.nome, usuario.login]);
    });
}

export async function alterarUsuario(usuario) {
    openDb().then(db => {
        db.run('UPDATE USUARIO SET NOME=? WHERE ID=?', [usuario.nome, usuario.id]);
    });
}
