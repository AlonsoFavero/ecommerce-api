const produto = require("../models/produto.model")
const AppError = require("../utils/AppError")

async function criar(nome,preco,descricao,estoque){
    const novoProduto = await produto.create({nome,preco,descricao,estoque})
    return novoProduto
}

async function listar(){
    const produtos = await produto.find()
    return produtos
}

async function buscarPorId(id){
    const produtoEncontrado = await produto.findById(id)

    if(!produtoEncontrado){
        throw new AppError("produto não encontrado", 404)
    }
      return produtoEncontrado
}

async function deletar(id){
    const produtoDeletado = await produto.findByIdAndDelete(id)

    if(!produtoDeletado){
        throw new AppError("produto não encontrado", 404)
    }
    return produtoDeletado
}

async function atualizar(id, dados){
    const produtoAtualizado = await produto.findByIdAndUpdate(
        id,
        dados,
        {new: true}
    )

    if(!produtoAtualizado){
        throw new AppError("produto não encontrado", 404)
    }
    return produtoAtualizado
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    deletar,
    atualizar
}