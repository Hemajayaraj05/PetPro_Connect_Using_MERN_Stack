   const express=require('express')
   const dotenv=require('dotenv');
   const path=require('path');
   const app=express();
   const cors=require('cors');
   const connectDatabase=require('./config/connectDatabase')
   dotenv.config({path:path.join(__dirname,'config','config.env')})


   const petproducts=require('./routes/petproducts')
   const petorders=require('./routes/petOrder')

   connectDatabase();
   app.use(express.json());
   app.use(cors());
   app.use('/api/v1',petproducts)
   app.use('/api/v1',petorders)
  


   app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the ${process.env.PORT} in the ${process.env.NODE_ENV}`)
   })