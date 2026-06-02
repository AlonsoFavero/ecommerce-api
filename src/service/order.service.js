const Order = require("../models/order.model")

async function listarPedidos(usuarioId){

 const orders = await Order.find({usuario: usuarioId})

 return orders
}

module.exports = {
    listarPedidos
}