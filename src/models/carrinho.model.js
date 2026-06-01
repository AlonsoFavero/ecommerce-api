const mongoose = require ("mongoose")

const carrinhoSchema = new mongoose.Schema({
    usuario: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: "usuario"
    },
    itens: [
        {
            produto:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"produto",
                required: true,
               
            },
            quantidade:{
                type:Number,
                required:true,
                min: 1
            }
        }
    ]
},
{

timestamps: true

})

module.exports = mongoose.model("carrinho",carrinhoSchema)