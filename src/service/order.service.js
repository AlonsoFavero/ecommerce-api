const Order = require("../models/order.model")
const Produto = require("../models/produto.model")
const AppError = require("../utils/AppError")

async function criarPedido(usuarioId, itens){
    let total = 0
    let itensProcessados = []

    for(let item of itens) {

   const produto = await Produto.findById(item.produtoId)

   if(!produto){
    throw new AppError(
        `produto não encontrado (id: ${item.produtoId})`, 
        404)
   }

   const subtotal = produto.price * item.quantidade

   total = total + subtotal

   itensProcessados.push({
    produtoId: produto._id,
    quantidade: item.quantidade,
    preco: produto.price,
    subtotal
   })
    }

    const pedidoCriado = await Order.create({
        usuario: usuarioId,
        items: itensProcessados,
        total: total,
        status: "PENDING"
    })

    return pedidoCriado
}

async function listarPedidos(usuarioId, role){
let filtro = {}

 if(role !== "admin"){
  filtro = {usuario: usuarioId}
 }

 const pedidos = await Order.find(filtro)

 return pedidos
}

async function detalharPedido(usuarioId, pedidoId, role){

    const pedido = await Order.findOne(filtro)

    if(!pedido){
        throw new AppError("pedido não encontrado", 404)
    }

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
    atualizarStatusPedido,
    criarPedido
}