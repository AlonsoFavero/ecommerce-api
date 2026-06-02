const {Router} = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const{finalizarCompraController} = require("../controllers/carrinho.controller")
const{listarPedidosController} = require("../controllers/pedido.controller")

const router = Router()

router.get(
"/",
authMiddleware,
listarPedidosController
)


router.post("/", authMiddleware, finalizarCompraController)

module.exports = router