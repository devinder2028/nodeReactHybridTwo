// const http = require('http');
const express = require('express');
const server = express();

const morgan = require('morgan')

const productController = require('./controller/product')

//-------------------------------------------------------------

// Middleware

server.use(express.json());  // express.json is middleware

//morgan middleware-3rd party
//server.use(morgan('dev'))
server.use(morgan('default'))

server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname,new Date());
    console.log(req.get("User-Agent"));
    next()
})

//MVC   Model View Controller

//REST API  ---------------------------------------------------

                        // we are setting Route on application level
                        // we donot do this is large style
                        // we create router for this

server.get('/products',productController.getAllProducts)
server.get('/products/:id',productController.getProduct)
server.post('/products',productController.createProduct)
server.put('/products/:id',productController.replaceProduct);
server.patch('/products/:id',productController.updateProduct);
server.delete('/products/:id',productController.deleteProduct);

//----------------------------------------------------------------

//server.listen(8070);

server.listen(8070,()=>{
    console.log('server started by devinder at 8070')
})


  