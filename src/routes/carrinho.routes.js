const {Router} = require("express")
const{authMiddleware} = require("../middlewares/auth.middleware")
const{finalizarCompraController} = require("../controllers/carrinho.controller")

const router = Router()


router.post("/", authMiddleware, finalizarCompraController)

module.exports = router