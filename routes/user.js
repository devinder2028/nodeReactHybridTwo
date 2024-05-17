const express = require('express');
const myRouter = express.Router();

// const productController = require('./controller/product')
const userController = require('../controller/user')

myRouter.get('/',userController.getAllUsers)
        .get('/:id',userController.getUser)
        .post('/',userController.createUser)
        .put('/:id',userController.replaceUser)
        .patch('/:id',userController.updateUser)
        .delete('/:id',userController.deleteUser);   

exports.allRoutes = myRouter;