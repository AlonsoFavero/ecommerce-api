const { string } = require("joi")
const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required:true
    },
   
    itens: [
        {
            produto: {
             type: mongoose.Schema.Types.ObjectId,
             ref: "produto",
             required: true
            },
            quantidade: {
              type: Number,
              required: true,
              min: 1
            }
        }
    ],

    total: {
    type: Number,
    required: true,
    min: 0
    },

    status: {
        type: String,
        enum: ["PENDING", "PAID", "SHIPPED", "CANCELLED"],
        default: "PENDING"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("order", orderSchema)