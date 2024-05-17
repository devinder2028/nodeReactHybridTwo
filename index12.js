// const http = require('http');
const express = require('express');
const server = express();

const productRouter = express.Router();

const morgan = require('morgan')

const productController = require('./controller/product')

//middleware
// server.use('/api',productRouter);
server.use('/',productRouter);

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
server.post('/products',productController.createProduct);
server.put('/products/:id',productController.replaceProduct);
server.patch('/products/:id',productController.updateProduct);
server.delete('/products/:id',productController.deleteProduct);

 */
//----------------chaining style----------------------------
/* 
server.get('/products',productController.getAllProducts)
      .get('/products/:id',productController.getProduct)
      .post('/products',productController.createProduct)
      .put('/products/:id',productController.replaceProduct)
      .patch('/products/:id',productController.updateProduct)
      .delete('/products/:id',productController.deleteProduct);

  */     
//-----------------------Router--------------------------------------

productRouter.get('/products',productController.getAllProducts);
productRouter.get('/products/:id',productController.getProduct);
productRouter.post('/products',productController.createProduct);
productRouter.put('/products/:id',productController.replaceProduct);
productRouter.patch('/products/:id',productController.updateProduct);
productRouter.delete('/products/:id',productController.deleteProduct);    
//----------------------------------------------------------------

server.listen(8070,()=>{
    console.log('server started by devinder at 8070')
})


  