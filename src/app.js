import { criarTabela, inserirUsuario, alterarUsuario } from './Controller/Usuario.js';

import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.get('/', function (req, res) {
    res.send("Olá mundo");
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

app.listen(3000, () => console.log("Api Rodando."));
