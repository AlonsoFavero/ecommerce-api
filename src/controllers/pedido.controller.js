const service = require("../service/order.service")
const AppError = require("../utils/AppError")

async function listarPedidosController(req,res){
    const usuarioId = req.user.id

    const order = await service.listarPedidos(usuarioId)

    return res.status(200).json({
        message: "pedidos listados com sucesso",
        order
    })
}

async function detalharPedidoController(req,res){
    const usuarioId = req.user.id
    const pedidoId = req.params.id

    const order = await service.detalharPedido(usuarioId,pedidoId)

    return res.status(200).json({
        message: "pedido encontrado com sucesso",
        order
    })
}

module.exports = {
    listarPedidosController,
    detalharPedidoController
}