const Order = require("../models/order.model")
const AppError = require("../utils/AppError")

async function listarPedidos(usuarioId, role){
let filtro = {}

 if(role !== "admin"){
  filtro = {usuario: usuarioId}
 }

 const pedidos = await Order.find(filtro)

 return pedidos
}

async function detalharPedido(usuarioId, pedidoId){
    const pedido = await Order.findOne({_id: pedidoId, usuario: usuarioId})

    return pedido
}

async function atualizarStatusPedido(orderId, novoStatus){
const pedido = await Order.findById(orderId)

if(!pedido){
throw new AppError("pedido não encontrado", 404)
}

const statusAtual = pedido.status

const regras = {
    PENDING: ["PAID", "CANCELLED"],
    PAID: ["SHIPPED"],
    SHIPPED: [],
    CANCELLED: []
}

const podeMudar = regras[statusAtual].includes(novoStatus)

if(!podeMudar){
    throw new AppError("transição de status inválidas", 400)
}

pedido.status = novoStatus
await pedido.save()

return pedido
}

module.exports = {
    listarPedidos,
    detalharPedido,
    atualizarStatusPedido
}