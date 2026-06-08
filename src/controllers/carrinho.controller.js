const {finalizarCompra} = require("../service/carrinho.service")

async function finalizarCompraController(req, res){

    const usuarioId = req.usuario.id

    const order = finalizarCompra(usuarioId)

    return res.status(201).json({
        message: "compra finalizada com sucesso",
        order
    })
}

module.exports = {
    finalizarCompraController
}