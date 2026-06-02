const carrinho = require("../models/carrinho.model")
const produto = require("../models/produto.model")
const AppError = require("../utils/AppError")

async function adicionarProduto(usuarioId, produtoId, quantidade){

let carrinhoUsuario = await carrinho.findOne({
    usuario: usuarioId
})

if(!carrinhoUsuario){
 carrinhoUsuario = await carrinho.create({
        usuario: usuarioId,
        itens: []
    })
}

const itemExistente = carrinhoUsuario.itens.find(
    item => item.produto.toString() === produtoId
)

if (itemExistente){
itemExistente.quantidade += quantidade
}else {
 carrinhoUsuario.itens.push({
    produto: produtoId,
    quantidade
 })
}

await carrinhoUsuario.save()
}

async function removerProduto(usuarioId, produtoId){

    let carrinhoUsuario = await carrinho.findOne({
    usuario: usuarioId
  })

  if (!carrinhoUsuario) {
    throw new AppError("carrinho não encontrado", 404)
  }

  carrinhoUsuario.itens = carrinhoUsuario.itens.filter(
    item => item.produto.toString() !== produtoId
  )

  await carrinhoUsuario.save()
}

async function calcularTotalCarrinho(usuarioId){

  let carrinhoUsuario = await carrinho.findOne({
    usuario: usuarioId
  })

  if(!carrinhoUsuario){
    throw new AppError("carrinho não encontrado", 404)
  }

  let total = 0

  for (const iten of carrinhoUsuario.itens) {
    const produtoEncontrado = await produto.findById(item.produto)

    total += produtoEncontrado.preco * item.quantidade
  }

  return total

}

module.exports ={
    adicionarProduto,
    removerProduto
}