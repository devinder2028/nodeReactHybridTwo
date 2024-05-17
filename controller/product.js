const fs = require('fs');
const mongoose = require('mongoose');

const model = require("../model/product")
const Product = model.Product;

//function ------------------------------------------------------
/* 
const createProduct = (req,res)=>{
    
    const product = new Product();
    product.title = 'phoneX';
    product.price = 9999;
    product.rating = 4;

    // await.product.save()

    //or
                          //save is inbuilt async function 
    product.save((err,doc)=>{
        console.log({err,doc})
        res.status(444).json(doc);
    })    
};
 */

// ---------  create product by entering data HERE  -----------
/* 
const createProduct = async (req, res) => {
    try {
      // Create a new product instance
      const product = new Product({
        title: 'lg television',
        price: 18000,
        rating: 3
      });
  
      // Save the product asynchronously using await
      const savedProduct = await product.save();
  
      // Send a success response with the saved product data
      res.status(201).json(savedProduct); // 201 for Created
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating product" });
    }
  };
 */
//-------  obsolute way mongoose no longer accepts callback ------
/* 
const createProduct = async (req, res) => {
  const product = new Product(req.body);

  await product.save((err, doc) => {
    console.log({ err, doc })
    if (err) {
      res.status(400).json(doc);
    }
    else {
      res.status(201).json(doc);
    }
  });
};
 */

//create product by sending data from POSTMAN--

const createProduct = async (req, res) => {
  try {
    // Create a new product instance
    const product = new Product(req.body);

    // Save the product asynchronously using await
    const savedProduct = await product.save();

    // Send a success response with the saved product data
    res.status(201).json(savedProduct); // 201 for Created

  } catch (error) {
    console.error(error);
    //res.status(500).json({ message: "Error creating product" }); 
    res.status(500).json({ error });
  }
};

//--------------------------------------------------------------------

const getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products);
}
/* 
const getAllProducts = async (req, res) => {
  const products = await Product.find({price:{$gt:500}})
  res.json(products);
}
 */
const getProduct = async (req, res) => {

  const myid = req.params.id;
  const products = await Product.findById(myid)
  res.json(products);
}

//put
const replaceProduct = async (req, res) => {
  const id = req.params.id;
  
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    res.status(400).json(err)
  }
}

//patch
const updateProduct = async (req, res) => {
  const id = req.params.id;
  
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
    res.status(201).json(doc);
  }
  catch (err) {
    res.status(400).json(err)
  }
}

const deleteProduct = async (req, res) => {
   const id = req.params.id;
  
  try {
    const doc = await Product.findOneAndDelete({ _id: id })
    res.status(201).json(doc);
  }
  catch (err) {
    res.status(400).json(err)
  }
}

//
exports.deleteProduct = deleteProduct;
exports.createProduct = createProduct;
exports.replaceProduct = replaceProduct;
exports.updateProduct = updateProduct;
exports.getAllProducts = getAllProducts;
exports.getProduct = getProduct;