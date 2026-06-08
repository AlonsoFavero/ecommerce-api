const {criar} = require("../service/usuario.service")

async function criarUsuarioController(req,res){
    const {nome,email,senha} = req.body

    const usuario = await criar(nome,email,senha)

    return res.status(201).json({message: "usuario criado com sucesso", usuario})
}

module.exports = {
    criarUsuarioController
}