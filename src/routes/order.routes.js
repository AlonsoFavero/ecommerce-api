const {Router} = require("express")
const {atualizarStatusController,createOrderController,listarPedidosController,detalharPedidoController} = require("../controllers/order.controller")
const adminMiddleware = require("../middlewares/admin.middleware")
const authMiddleware = require("../middlewares/auth.middleware")

const router = Router()

router.post(
    "/",
    authMiddleware,
    createOrderController
)

router.get(
    "/",
    authMiddleware,
    listarPedidosController
)

router.get(
    "/:id",
    authMiddleware,
    detalharPedidoController
)

router.patch (
    ":id/status",
    authMiddleware,
    adminMiddleware,
    atualizarStatusController
)

module.exports = router