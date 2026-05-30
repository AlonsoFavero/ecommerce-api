const mongoose = require("mongoose")

const produtoSchema = new mongoose.Schema({
    nome:{type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
        min: 0
    },
    descricao:{
        type: String,
        required: true
    },
    estoque:{
     type: Number,
     required: true,
     min: 0
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("produto", produtoSchema)