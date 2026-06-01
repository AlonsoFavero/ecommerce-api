const {Router} = require("express")
const{criarProduto} = require("../controllers/produto.controller")
const {authMiddleware} = require("../middlewares/auth.middleware")
const {adminMiddleware} = require("../middlewares/admin.middleware")

const router = Router()

router.post("/", authMiddleware, adminMiddleware , criarProduto)

module.exports = router