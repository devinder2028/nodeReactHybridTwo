// const http = require('http');
const express = require('express');
const server = express();

const productRouter = require('./routes/product')

const morgan = require('morgan')

// const productController = require('./controller/product')

//middleware

// server.use('/api',productRouter);
server.use('/',productRouter.allRoutes);

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

                        // we are setting Route on application level
                        // we donot do this is large style
                        // we create router for this
/* 
server.get('/products',productController.getAllProducts);
server.get('/products/:id',productController.getProduct);
 */
//--------------Router----  shifted to Router > product.js   -------
/* 
productRouter.get('/products',productController.getAllProducts);
productRouter.get('/products/:id',productController.getProduct);
 */
server.listen(8070,()=>{
    console.log('server started by devinder at 8070')
})


  