const {Router} = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const{finalizarCompraController,adicionarProdutoController} = require("../controllers/carrinho.controller")

const router = Router()

router.post("/", authMiddleware, adicionarProdutoController)

router.post("/finalizar", authMiddleware, finalizarCompraController)

module.exports = router