import { openDb } from "../configDb.js";

export async function criarTabelaProduto() {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS PRODUTO (ID INTEGER PRIMARY KEY AUTOINCREMENT, NOME TEXT NOT NULL, TIPO1 TEXT NOT NULL, CONFIDENCE1 DOUBLE,TIPO2 TEXT NOT NULL, CONFIDENCE2 DOUBLE, TIPO3 TEXT NOT NULL, CONFIDENCE3 DOUBLE, TIPO4 TEXT NOT NULL, CONFIDENCE4 DOUBLE)"
    );
  });
}

// export async function buscaProdutos(req, res) {
//   openDb().then((db) => {
//     db.all("SELECT * FROM PRODUTO").then((produtos) => res.render("produtoView", { produto: produto }));
//   });
// }

export async function buscaProdutos(tipoDoProduto, porcentagem, res) {
  let tipoProduto = tipoDoProduto;
  let probabilidadeProduto = porcentagem;
  openDb().then((db) => { // Montar a query corretamente
    db.all("SELECT * FROM PRODUTO WHERE TIPO1=?", [tipoProduto[0]]).then((produtos) => res.render("produtoView", { produtos: produtos }));
  });
}

export async function buscaProduto(tipoDoProduto, porcentagem, res) {
  let tipoProduto = tipoDoProduto;
  let probabilidadeProduto = porcentagem;
  openDb().then((db) => {
    db.get("SELECT * FROM PRODUTO WHERE TIPO1=?", [tipoProduto[0]]).then(
      (produto) => res.render("produtoView", { produto: produto })
    );
  });
}

export async function inserirProduto(
  tipoDoProduto,
  porcentagem,
  nomeDoArquivo,
  res
) {
  let tipoProduto = tipoDoProduto;
  let probabilidadeProduto = porcentagem;
  let nomeProduto = nomeDoArquivo;
  openDb().then((db) => {
    db.run(
      "INSERT INTO PRODUTO (NOME, TIPO1, CONFIDENCE1, TIPO2, CONFIDENCE2, TIPO3, CONFIDENCE3) VALUES (?,?,?,?,?,?,?)",
      [
        nomeProduto,
        tipoProduto[0],
        probabilidadeProduto[0],
        tipoProduto[1],
        probabilidadeProduto[1],
        tipoProduto[2],
        probabilidadeProduto[2],
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}
