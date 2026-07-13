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

const listarProduto = async(req,res) => {

    const produto = await produtoService.listar()

    return res.status(200).json({
   mensagem: "produtos listados com sucesso",
   produto
    })
}

const deletarProduto = async(req,res) => {

    const {id} = req.params

    const produto = await produtoService.deletar(id)

    return res.status(200).json({
        mensagem: "produto deletado com sucesso",
        produto
    })

}

const buscarProduto = async(req,res) => {
    const productId = req.params.id
    const produto = await produtoService.buscarPorId(productId)

    return res.status(200).json({
        mensagem: "produto encontrado com sucesso",
        produto
    })
}

const atualizarProduto = async(req,res) => {
    const {nome,preco,descricao,estoque} = req.body
    const productId = req.params.id

    const produto = await produtoService.atualizar(
        productId,{
            nome,
            preco,
            descricao,
            estoque
        }
    )

    return res.status(200).json({
        mensagem: "produto atualizado com sucesso",
        produto
    })
}

module.exports = {
    criarProduto,
    listarProduto,
    deletarProduto,
    buscarProduto,
    atualizarProduto
}