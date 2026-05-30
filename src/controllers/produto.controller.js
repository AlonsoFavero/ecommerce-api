const produtoService = require("../service/produto.service")

const criarProduto = async(req,res) => {

        const produto = await produtoService.criar(
            req.body.nome,
            req.body.preco,
            req.body.descricao,
            req.body.estoque
        )
        return res.status(201).json({ 
            mensage:"produto criado com sucesso",
             produto
            
    })
}

module.exports = {
    criarProduto
}