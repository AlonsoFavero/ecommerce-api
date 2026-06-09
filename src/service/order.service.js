const Order = require("../models/order.model")

async function listarPedidos(usuarioId){

 const orders = await Order.find({usuario: usuarioId})

 return orders
}

async function detalharPedido(usarioId, pedidoId){
    const pedido = await Order.findOne({_id: pedidoId, usuario: usuarioId})

    return pedido
}

module.exports = {
    listarPedidos,
    detalharPedido
}