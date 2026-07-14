const {finalizarCompra, adicionarProduto} = require("../service/carrinho.service")
const carrinho = require("../models/carrinho.model")

async function listarCarrinhoController(req,res){
const usuarioId = req.user.id

const carrinhoUsuario = await carrinho.findOne({usuario: usuarioId})

if(!carrinhoUsuario) {
    return res.status(200).json({
        itens: []
    })
}

return res.status(200).json({
    itens: carrinhoUsuario.itens
})

}

async function adicionarProdutoController(req, res){
    const usuarioId = req.user.id
    const {produtoId, quantidade} = req.body
    
    await adicionarProduto(usuarioId, produtoId, quantidade)

    return res.status(200).json({
        message: "produto adicionado ao carrinho"
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
    adicionarProdutoController,
    listarCarrinhoController
}