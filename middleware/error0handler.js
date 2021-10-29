const {CustomApiError} = require('../errors/custom-error')

const errorHandler = (err,req,res,next) =>{
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(err.status).json({msg:'something went wrong'}) 
}
module.exports = errorHandler