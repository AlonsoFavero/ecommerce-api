const {Router} = require("express")
const {atualizarStatusController} = require("../controllers/order.controller")

const router = Router()

router.patch (
    "/orders/:id/status",
    atualizarStatusController
)

module.exports = router