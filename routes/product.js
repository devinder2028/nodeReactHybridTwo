const express = require('express');
const myRouter = express.Router();

// const productController = require('./controller/product')
const productController = require('../controller/product')


//-----------------------Router--------------------------------------
/* 
myRouter.get('/products',productController.getAllProducts);
myRouter.get('/products/:id',productController.getProduct);
myRouter.post('/products',productController.createProduct);
myRouter.put('/products/:id',productController.replaceProduct);
myRouter.patch('/products/:id',productController.updateProduct);
myRouter.delete('/products/:id',productController.deleteProduct);   
 */

//-------------routes upto commit 12------------------------
/* 
myRouter.get('/products',productController.getAllProducts)
        .get('/products/:id',productController.getProduct)
        .post('/products',productController.createProduct)
        .put('/products/:id',productController.replaceProduct)
        .patch('/products/:id',productController.updateProduct)
        .delete('/products/:id',productController.deleteProduct);

  */       
myRouter.get('/',productController.getAllProducts)
        .get('/:id',productController.getProduct)
        .post('/',productController.createProduct)
        .put('/:id',productController.replaceProduct)
        .patch('/:id',productController.updateProduct)
        .delete('/:id',productController.deleteProduct);   

exports.allRoutes = myRouter;