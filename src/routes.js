import { Router } from 'express'
import { criarTabela, inserirUsuario, alterarUsuario, buscaUsuarios, buscaUsuario, excluirUsuario } from './Controller/Usuario.js';
import { criarTabelaProduto, inserirProduto, buscaProduto, buscaProdutos } from './Controller/Produto.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode":200,
        "msg":"Api Rodando"
    })
})

// criarTabelaProduto()
// criarTabela()

router.get('/index',(req, res)=>res.render("index"))
router.get('/principal',(req, res)=>res.render("principal"))
router.get('/imagem',(req, res)=>res.render("imagem"))
router.get('/about',(req, res)=>res.render("about"))
router.get('/salvar',(req, res)=>res.render("salvar"))



//Users
router.get('/usuarios', buscaUsuarios);
router.get('/usuario', buscaUsuario);
router.post('/usuario', inserirUsuario);
router.put('/usuario', alterarUsuario);
router.delete('/usuario', excluirUsuario);

router.post('/recebe', function(req,res) {
    req.body.dados
   
    res.send(''+ req.body.dados+'')
    console.log(typeof(req.body.dados))
})
//Produto
router.get('/produtos', buscaProdutos);
router.get('/produto', buscaProduto);
router.post('/produto', inserirProduto);

export default router;