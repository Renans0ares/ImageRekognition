import { openDb } from "../configDb.js";

export async function criarTabela(){
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS USUARIO (ID INTERGER PRIMARY KEY, NOME TEXT, LOGIN TEXT)');
    })
}
