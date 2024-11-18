const petproductModel=require('../models/petproductModel')
exports.getProducts=async(req,res,next)=>{

    const query=req.query.keyword?{breed:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}

    const petproducts=await petproductModel.find(query);
    res.json({
        success:true,
        petproducts
    })
}
exports.getSingleProducts=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const petproducts=await petproductModel.findById(id);
        res.json({
            success:true,
            petproducts
        })

    }
    catch(err){
        res.status(404).json({
            success:false,
            message:'Unable to get the product with this id'
        })
        
    }
    
}
