const jwt = require("jsonwebtoken")

function authMiddleware(req,res,next){
const auth =  req.headers.authorization

if(!auth){
    return res.status(401).json({ erro: "token não enviado"})
}

const partes = auth.split(" ")

if (partes.length !== 2){
    return res.status(401).json({erro: "token mal formatado"})
}

const token = partes[1]

try{
const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET)

req.user = decoded

next()
    }catch(error){
   return res.status(401).json({"error": "tokem inválido"})
 }

}

module.exports = authMiddleware