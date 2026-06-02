const service = require("../service/order.service")
const AppError = require("../utils/AppError")

async function listarPedidosController(req,res){
    const usuarioId = req.usuario.id

    const order = await listarPedido(usuarioId)

    return res.status(200).json({
        message: "pedidos listados com sucesso",
        orders
    })
}

module.exports = {
    listarPedidosController
}