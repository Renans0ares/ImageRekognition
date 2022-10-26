import { openDb } from "../configDb.js";

export async function criarTabelaProduto() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS PRODUTO (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME TEXT NOT NULL, TIPO1 TEXT NOT NULL, CONFIDENCE1 DOUBLE,TIPO2 TEXT NOT NULL, CONFIDENCE2 DOUBLE, TIPO3 TEXT NOT NULL, CONFIDENCE3 DOUBLE, TIPO4 TEXT NOT NULL, CONFIDENCE4 DOUBLE)');
    })
}

export async function buscaProdutos(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM PRODUTO').then(produtos => res.json(produtos))
    });
}

export async function buscaProduto(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.get('SELECT * FROM PRODUTO WHERE ID=?', [id]).then(produto => res.json(produto))
    });
}

export async function inserirProduto(tipoDoProduto, porcentagem, res) {
    let tipoProduto = tipoDoProduto;
    let probabilidadeProduto = porcentagem;
    console.log(tipoProduto);
    console.log(probabilidadeProduto);
    openDb().then(db => {
        db.run('INSERT INTO PRODUTO (NOME, TIPO1, CONFIDENCE1, TIPO2, CONFIDENCE2, TIPO3, CONFIDENCE3) VALUES (?,?,?,?,?,?,?)', ["Teta", tipoProduto[0], probabilidadeProduto[0], tipoProduto[1], probabilidadeProduto[1], tipoProduto[2], probabilidadeProduto[2]]);
    });
    res.json({
        "statusCode":200
    })
}