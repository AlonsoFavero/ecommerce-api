const {finalizarCompra} = require("../service/carrinho.service")

async function finalizarCompraController(req, res){

    const usuarioId = req.user.id

    const order = await finalizarCompra(usuarioId)

    return res.status(201).json({
        message: "compra finalizada com sucesso",
        order
    })
}

module.exports = {
    finalizarCompraController
}