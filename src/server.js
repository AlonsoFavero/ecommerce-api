require("dotenv").config()
const express = require("express")
const conectar = require("./database/database")

const app = express()
app.use(express.json())

conectar()

const produtoRoutes = require("../src/routes/produto.routes")
const authRoutes = require("../src/routes/auth.routes")
const usuarioRoutes = require("../src/routes/usuario.routes")
const carrinhoRoutes = require("../src/routes/carrinho.routes")
const orderRoutes = require("../src/routes/order.routes")

app.use("/produtos", produtoRoutes)

app.use("/carrinho", carrinhoRoutes)

app.use("/usuarios", usuarioRoutes)

app.use("/auth", authRoutes)

app.use("/orders", orderRoutes)

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})