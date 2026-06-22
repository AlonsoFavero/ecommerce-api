const {Router} = require("express")
const {atualizarStatusController} = require("../controllers/order.controller")
const adminMiddleware = require("../middlewares/admin.middleware")

const router = Router()

router.patch (
    "/orders/:id/status",
    adminMiddleware,
    atualizarStatusController
)

module.exports = router