require("dotenv").config()
const express = require("express")
const conectar = require("./database/database")

const app = express()
app.use(express.json())

conectar()

const produtoRouters = require("../src/routes/produto.routes")
const authRoutes = require("../src/routes/auth.routes")

app.use("/produtos", produtoRouters)

app.use("/auth", authRoutes)

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})