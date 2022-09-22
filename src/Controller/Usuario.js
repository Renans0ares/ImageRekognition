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

export async function buscaUsuarios() {
    return openDb().then(db => {
        return db.all('SELECT * FROM USUARIO').then(res => res)
    });
}

export async function buscaUsuario(id) {
    return openDb().then(db => {
        return db.get('SELECT * FROM USUARIO WHERE ID=?', [id]).then(res => res)
    });
}

export async function excluirUsuario(id) {
    return openDb().then(db => {
        return db.get('DELETE FROM USUARIO WHERE ID=?', [id]).then(res => res)
    });
}