   const express=require('express')
   const dotenv=require('dotenv');
   const path=require('path');
   const app=express();
   const connectDatabase=require('./config/connectDatabase')
   dotenv.config({path:path.join(__dirname,'config','config.env')})


   const petproducts=require('./routes/petproducts')
   const petorders=require('./routes/petOrder')

   connectDatabase();
   app.use('/api/v1',petorders)
   app.use('/api/v1',petproducts)


   app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the ${process.env.PORT} in the ${process.env.NODE_ENV}`)
   })