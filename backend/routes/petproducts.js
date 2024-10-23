const express=require('express');
const { getProducts, getSingleProducts } = require('../controllers/petproductController');
const router=express.Router();

router.route('/petproducts').get(getProducts);
router.route('/petproducts/:id').get(getSingleProducts)

module.exports=router;