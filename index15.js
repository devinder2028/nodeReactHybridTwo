require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');

const server = express();

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const morgan = require('morgan')

//db connection  ------------------------------------------------------
//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().catch(err => console.log(err));

async function main() {
  //await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
                      //mongodb+srv://hostel:<password>@cluster0.ikprodw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  //await mongoose.connect('mongodb+srv://hostel:<password>@cluster0.ikprodw.mongodb.net/ecommerceDatabase?retryWrites=true&w=majority&appName=Cluster0');
  await mongoose.connect(process.env.MONGO_URL);

  console.log('database connected');

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` 
                                   //if your database has auth enabled
}
//-----------------------------------------------------------------
server.use(cors());    // after react application setup

server.use(express.json());  // express.json is middleware

//-------  middleware    ---------------
//server.use(express.static(process.env.PUBLIC_DIR));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

server.use('/products',productRouter.allRoutes);
server.use('/users',userRouter.allRoutes);

server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})
//-------------------------------------------------------------

//server.use(morgan('dev'))
server.use(morgan('default'))

server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date());
    console.log(req.get("User-Agent"));
    next()
})

//REST API  ---------------------------------------------------

//server.get('/products/:id',productController.getProduct);
//productRouter.get('/products/:id',productController.getProduct);
 
server.listen(process.env.PORT,()=>{
    console.log('server started by devinder at 8070')
})  