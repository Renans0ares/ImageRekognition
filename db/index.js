//index.js

app.post('/teste', function (req, res) {
    res.send('Recebido')
})

    (async () => {
        const database = require('./db');
        const Usuario = require('./USUARIO.js');
        const Produto = require('./PRODUTO.js');


        try {
            const resultado = await database.sync();

            //Exemplo de insert Produto
            const novoProduto = await Produto.create({
                TIPO1: 'Shoe',
                CONFIDENCE1: 99.9931,
                TIPO2: 'Footwear',
                CONFIDENCE2: 99.9589,
                TIPO3: 'Sneaker',
                CONFIDENCE3: 99.5455,
                TIPO4: 'Apparel',
                CONFIDENCE4: 92.0474,
                CAMINHOIMAGE: 'pokemon'
            })

            console.log(novoProduto);
        } catch (error) {
            console.log(error);
        }
    })();


// SELECT * FROM PRODUTOs
// where TIPO1 like '%shoe%' AND
// TIPO2 like '%Footwear%' OR
// TIPO3 like '%Sneaker%' OR
// TIPO4 like '%Apparel%' 

/*
SELECT *
FROM(
    SELECT
    *
    FROM PRODUTO
    WHERE TIPO1 = 'SEILA'
    UNION ALL
    SELECT
    *
    FROM PRODUTO
    WHERE TIPO1 = 'SEILA'
    UNION ALL
    SELECT
    *
    FROM PRODUTO
    WHERE TIPO1 = 'SEILA'
    UNION ALL
    SELECT
    *
    FROM PRODUTO
    WHERE TIPO1 = 'SEILA'
    UNION ALL
    SELECT
    *
    FROM PRODUTO
    WHERE TIPO1 = 'SEILA'
)
*/
