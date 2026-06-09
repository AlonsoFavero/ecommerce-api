const {finalizarCompra, adicionarProduto} = require("../service/carrinho.service")

async function adicionarProdutoController(req, res){
    const usuarioId = req.user.id
    const {produtoId, quantidade} = req.body
    
    await adicionarProduto(usuarioId, produtoId, quantidade)

    return res.status(200).json({
        message: "produto adicionado co sucesso"
    })

}

async function finalizarCompraController(req, res){

    const usuarioId = req.user.id

    const order = await finalizarCompra(usuarioId)

    return res.status(201).json({
        message: "compra finalizada com sucesso",
        order
    })
}

module.exports = {
    finalizarCompraController,
    adicionarProdutoController
}