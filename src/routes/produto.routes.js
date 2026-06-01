const {Router} = require("express")
const{criarProduto, listarProduto, buscarProduto, deletarProduto, atualizarProduto} = require("../controllers/produto.controller")
const {authMiddleware} = require("../middlewares/auth.middleware")
const {adminMiddleware} = require("../middlewares/admin.middleware")

const router = Router()

router.get(
    "/:id",
    buscarProduto
)

router.get(
    "/",
    listarProduto
)

router.delete(
    "/:id",
    authMiddleware,
    adminMiddleware,
    deletarProduto
)

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    atualizarProduto
)

router.post("/", authMiddleware, adminMiddleware , criarProduto)

module.exports = router