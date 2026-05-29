const bcrypt = require("bcrypt");
const usuario = require("../models/Usuario.model")
const AppError = require("../utils/AppError")

async function criar(nome,email,senha){
const usuarioExiste = await usuario.findOne({email})

if(usuarioExiste){
    throw new AppError("email ja cadastrado", 409)
}
const senhaHash = await bcrypt.hash(senha,10)
const novoUsuario = await Usuario.create({
    nome,
    email,
    senha: senhaHash
})
}