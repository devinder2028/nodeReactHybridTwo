const express = require('express');
const server = express();

const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

const morgan = require('morgan')

//middleware

server.use('/products',productRouter.allRoutes);

server.use('/users',userRouter.allRoutes);

//-------------------------------------------------------------

// Middleware

server.use(express.json());  // express.json is middleware

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