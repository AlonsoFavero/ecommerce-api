function success(res, message, data){
    return res.status(200).json({
        sucess: true,
        message,
        data
    })
}

module.exports = {
    success
}
