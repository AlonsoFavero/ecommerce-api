const {criarUsuarioController} = require("../controllers/usuario.controller")
const {Router} = require("express")

const router = Router()

router.post("/", criarUsuarioController )

module.exports = router