const {finalizarComprar} = require("../service/carrinho.service")

function finalizarCompraController(req, res){

    const usuarioId = req.usuario.id

    const order = finalizarCompra(usuarioId)

    return res.status(201).json({
        message: "compra finalizada com sucesso",
        orders
    })
}

module.exports = {
    finalizarCompraController
}