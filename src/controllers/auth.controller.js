const {login} = require("../service/auth.service")
const bcrypt = require("bcrypt")
const Usuario = require("../models/Usuario.model")
const AppError = require("../utils/AppError")

async function loginController(req,res){
const {email,senha} = req.body

const dadosLogin = await login(email, senha)

return res.status(200).json({
        message: "login realizado com sucesso",
        dadosLogin
    })
}

async function registerController(req, res) {
    const { nome, email, senha, role } = req.body

    if (! nome || !email || !senha) {
        throw new AppError("nome, email e senha são obrigatórios", 400)
    }

    const usuarioExiste = await Usuario.findOne({ email })

    if (usuarioExiste) {
        throw new AppError("usuário já existe", 409)
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    const usuario = await Usuario.create({
        nome,
        email,
        senha: senhaHash,
        role
    })

    const usuarioSemSenha = usuario.toObject()
    delete usuarioSemSenha.senha

    return res.status(201).json({
        message: "usuário criado com sucesso",
        usuario: usuarioSemSenha
    })
}

module.exports = {
    loginController,
    registerController
}