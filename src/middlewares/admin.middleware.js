function adminMiddleware(req, res, next) {

    const user =  req.user

    if(!user) {
        return res.status(401).json({error: "não autenticado"})
    }

    if(req.user.role !== "admin"){
        return res.status(403).json({error: "acesso negado: apenas admin"})
    }

    next()
}

module.exports = adminMiddleware