const {Router} = require("express")
const{criarProduto} = require("../controllers/produto.controller")

const router = Router()

router.post("/",criarProduto)

module.exports = router