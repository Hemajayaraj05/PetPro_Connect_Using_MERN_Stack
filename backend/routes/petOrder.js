const express=require('express');
const { createOrder } = require('../controllers/petOrderController');
const router=express.Router();

router.route('/petorder').post(createOrder);
module.exports=router;