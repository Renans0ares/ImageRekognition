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

export async function inserirProduto(req, res) {
    let produto = req.body;
    openDb().then(db => {
        db.run('INSERT INTO PRODUTO (NOME, TIPO1, CONFIDENCE1, TIPO2, CONFIDENCE2, TIPO3, CONFIDENCE3, TIPO4, CONFIDENCE4) VALUES (?,?,?,?)', [produto.nome, produto.tipo1, produto.confidence1, produto.tipo2, produto.confidence2, produto.tipo3, produto.confidence3, produto.tipo4, produto.confidence4, ]);
    });
    res.json({
        "statusCode":200
    })
}