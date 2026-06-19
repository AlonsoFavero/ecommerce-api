const {atualizarStatusPedido} = require("../service/order.service")

async function atualizarStatusController(req,res){
    const {id} = req.params
    const novoStatus = req.body.status

    await atualizarStatusPedido(id,novoStatus)

    return res.status(200).json({ message: "status atualizado" })
}

module.exports = {
    atualizarStatusController
}