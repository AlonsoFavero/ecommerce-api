require("dotenv").config()
const express = require("express")
const conectar = require("./database/database")

const app = express()
app.use(express.json())

conectar()

const produtoRouters = require("./routes/produto.routes")

app.use("/produtos", produtoRouters)

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})