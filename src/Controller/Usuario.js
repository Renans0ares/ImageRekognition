import { openDb } from "../configDb.js";

export async function criarTabela() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS USUARIO (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME TEXT, LOGIN TEXT)"
    );
  });
}

export async function buscaUsuarios(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM USUARIO").then((usuarios) => res.json(usuarios));
  });
}

export async function buscaUsuario(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("SELECT * FROM USUARIO WHERE ID=?", [id]).then((usuario) =>
      res.json(usuario)
    );
  });
}

export async function inserirUsuario(req, res) {
  let usuario = req.body;
  openDb().then((db) => {
    db.run("INSERT INTO USUARIO (NOME, LOGIN) VALUES (?,?)", [
      usuario.nome,
      usuario.login,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function alterarUsuario(req, res) {
  let usuario = req.body;
  openDb().then((db) => {
    db.run("UPDATE USUARIO SET NOME=? WHERE ID=?", [usuario.nome, usuario.id]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function excluirUsuario(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM USUARIO WHERE ID=?", [id]).then((usuario) =>
      res.json(usuario)
    );
  });
  res.json({
    statusCode: 200,
  });
}
