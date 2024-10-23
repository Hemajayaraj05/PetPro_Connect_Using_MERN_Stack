exports.getProducts=(req,res,next)=>{
    res.json({
        success:true,
        message:'Get Petproducts working!'
    })
}
exports.getSingleProducts=(req,res,next)=>{
    res.json({
        success:true,
        message:'Getting Single product is Working!'
    })
}
