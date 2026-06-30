const {login} = require("../service/auth.service")
const bcrypt = require("../models/Usuario.model")
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
    const { email, senha } = req.body

    if (!email || !senha) {
        throw new AppError("email e senha são obrigatórios", 400)
    }

    const usuarioExiste = await Usuario.findOne({ email })

    if (usuarioExiste) {
        throw new AppError("usuário já existe", 409)
    }

    const senhaHash = await bcrypt.hash(senha, 10)

    const usuario = await Usuario.create({
        email,
        senha: senhaHash
    })

    return res.status(201).json({
        message: "usuário criado com sucesso",
        usuario
    })
}

module.exports = {
    loginController,
    registerController
}