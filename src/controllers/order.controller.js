const {atualizarStatusPedido, detalharPedido,listarPedidos} = require("../service/order.service")
const{success} = require("../utils/response")

async function listarPedidosController(req,res){
    const usuarioId = req.user.id
    const role = req.user.role

    const pedidos = await service.listarPedidos(usuarioId, role)

    return success(res,"lista de pedidos", pedidos)
}

async function detalharPedidoController(req,res){
const pedidoId = req.params.id
const usuarioId = req.user.id

const pedido = await detalharPedido(pedidoId, usuarioId)

return success(res, "pedido encontrado", pedido)

}

async function atualizarStatusController(req,res){
    const {id} = req.params
    const novoStatus = req.body.status

    const pedidoAtualizado = await atualizarStatusPedido(id,novoStatus)

    return success(res,"status atualizado", pedidoAtualizado)
}

module.exports = {
    atualizarStatusController,
    detalharPedidoController,
    listarPedidosController
}