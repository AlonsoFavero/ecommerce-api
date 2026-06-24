const {atualizarStatusPedido} = require("../service/order.service")
const{success} = require("../utils/response")
const  {listarPedidos} = require("../service/order.service")

async function listarPedidosController(req,res){
    const userId = req.user.id
    const pedidos = await service.listarPedidos(userId)

    return success(res,"lista de pedidos", pedidos)
}

async function atualizarStatusController(req,res){
    const {id} = req.params
    const novoStatus = req.body.status

    await atualizarStatusPedido(id,novoStatus)

    return res.status(200).json({ message: "status atualizado" })
}

module.exports = {
    atualizarStatusController,
    listarPedidosController
}