import { criarTabela, insertUsuario } from './Controller/Usuario.js';

import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.get('/', function(req, res){
    res.send("Olá mundo");
});

app.post('/usuario', function(req, res){
    insertUsuario(req.body);
    res.json({
        "statusCode": 200
    })
});

app.listen(3000, () => console.log("Api Rodando."));
