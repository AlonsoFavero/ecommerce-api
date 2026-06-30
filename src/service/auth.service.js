const Usuario = require("../models/Usuario.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const AppError = require("../utils/AppError")

async function login(email,senha){
    const usuario =
    await Usuario.findOne({email})
     .select("+senha")
       
         if(!usuario){
                throw new AppError("email ou senha inválidos", 401)
            }
        
            const senhaCorreta = await bcrypt.compare(senha, usuario.senha)
        
            if(!senhaCorreta){
                throw new AppError("email ou senha inválidos", 401)
            }

           const usuarioSemSenha = usuario.toObject()

    delete usuarioSemSenha.senha

     const token = jwt.sign(
            { id: usuario._id,
              role: usuario.role
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h"
            }
        )
    

    return {
      usuario: usuarioSemSenha,
      token
    }
      
}

module.exports = {login}