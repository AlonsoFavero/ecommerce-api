const {login} = require("../service/auth.service")

async function loginController(req,res){
const {email,senha} = req.body

const dadosLogin = await login(email, senha)

return res.status(200).json({
        message: "login realizado com sucesso",
        dadosLogin
    })
}

module.exports = {
    loginController
}