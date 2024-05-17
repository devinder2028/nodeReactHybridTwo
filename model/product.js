const mongoose = require('mongoose');

// we cannot create model dirctly. First create SCHEMA than 
//we create model from schema-- like abstractions  - in oops

//schema  ----------------

const { Schema } = mongoose;


const productSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    //title:{type:String,unique:true}
    description: {type: String},
    // description: {type: String,required:true},
    price: Number,
    discountPercentage: {type: Number,min:0,max:[50,'wrong discount']},
    rating: {type: Number,min:0,max:5,default:0},
    brand: {type: String,required:true},  //validators
    category: {type: String},
    thumbnail: {type: String},
    images:[String]    // array of strings
  });
  
  //------------  MODEL  ------create model from schema  ---------

                        //name of collection (table) singular
const Product = mongoose.model('Product',productSchema)
                                        // name of schema
exports.Product = Product;  