const mongoose=require('mongoose')

const petproductSchema=new mongoose.Schema({
    name:String,
    breed:String,
    images:[{
        image:String
    }],
    description:String,
    price:String,
    seller:String,
    stock:String,
    createdAt:Date
    
});

const petproductmodel=mongoose.model('Petproduct',petproductSchema);
module.exports=petproductmodel;
