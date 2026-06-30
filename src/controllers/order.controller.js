const {atualizarStatusPedido, detalharPedido,listarPedidos, criarPedido} = require("../service/order.service")
const{success} = require("../utils/response")
const AppError = require("../utils/AppError")

async function listarPedidosController(req,res){
    const usuarioId = req.user.id
    const role = req.user.role

    const pedidos = await service.listarPedidos(usuarioId, role)

    return success(res,"lista de pedidos", pedidos)
}

async function detalharPedidoController(req,res){
const pedidoId = req.params.id
const role = req.user.role
const usuarioId = req.user.id

let filtro = {
    _id: pedidoId
}

if(role !== "admin"){
    filtro.usuario = usuarioId
}

const pedido = await detalharPedido(filtro)

return success(res, "pedido encontrado", pedido)

}

async function atualizarStatusController(req,res){
    const {id} = req.params
    const novoStatus = req.body.status

    const pedidoAtualizado = await atualizarStatusPedido(id,novoStatus)

    return success(res,"status atualizado", pedidoAtualizado)
}

async function createOrderController(req,res){
    const usuarioId = req.user.id
    const itens = req.body.items

    if(!itens || itens.length === 0){
        throw new AppError("item não encontrado", 404)
    }

    for (let item of itens) {

    if (!item.produtoId) {
        throw new AppError("produtoId inválido", 400)
    }

    if (!item.quantidade || item.quantidade <= 0) {
        throw new AppError("quantidade inválida", 400)
    }
}

    const pedidoCriado = await criarPedido(usuarioId, itens)

    return success(res, "pedido criado com sucesso", pedidoCriado)
}

module.exports = {
    atualizarStatusController,
    detalharPedidoController,
    listarPedidosController, 
    createOrderController
}