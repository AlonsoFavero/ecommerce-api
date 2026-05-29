require("dotenv").config()
const express = require("express")
const conectar = require("./database/database")

const app = express()
app.use(express.json())

conectar()

app.listen(300, () => {
    console.log("servidor rodando na porta 3000")
})