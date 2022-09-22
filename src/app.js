import { criarTabela, inserirUsuario, alterarUsuario, buscaUsuarios, buscaUsuario, excluirUsuario } from './Controller/Usuario.js';

import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.get('/', function (req, res) {
    res.send("Olá mundo");
});

app.get('/usuarios', async function (req, res) {
    let usuarios = await buscaUsuarios();
    res.json(usuarios);
});

app.get('/usuario', async function (req, res) {
    let usuario = await buscaUsuario(req.body.id);
    res.json(usuario);
});

app.post('/usuario', function (req, res) {
    inserirUsuario(req.body);
    res.json({
        "statusCode": 200
    })
});

app.put('/usuario', function (req, res) {
    if (req.body && !req.body.id) {
        res.json({
            "statusCode": "400",
            "msg": "Por favor, insira um id."
        })
    }
    else
    {
        alterarUsuario(req.body)
        res.json({
            "statusCode": 200
        })
    }
});

app.delete('/usuario', async function (req, res) {
    let usuario = await excluirUsuario(req.body.id);
    res.json(usuario);
});

app.listen(3000, () => console.log("Api Rodando."));
