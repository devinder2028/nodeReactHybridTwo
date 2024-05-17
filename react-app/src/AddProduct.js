import { useEffect, useState } from "react";
import ProductsData from "./data";
import "./App.css";
import axios from 'axios';

const AddProduct = () => {

  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const addProduct = async (product)=>{
    // const response = await axios.post('http://localhost:8070/products',product)
    const response = await axios.post('/products',product)
    console.log(response.data);

}

  const handleSubmit = (e) => {

      e.preventDefault();
      console.log(product);
      addProduct(product)

  }


  return (
    <>
    <div className="container">
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <fieldset>
          {/* Form Name */}
          <legend> Add Product</legend>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="title">
              Title
            </label>
            <div className="col-md-4">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="title"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="thumbnail">
              Thumbnail
            </label>
            <div className="col-md-4">
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                placeholder="thumbnail"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="price">
              Price
            </label>
            <div className="col-md-4">
              <input
                id="price"
                name="price"
                type="number"
                placeholder="price"
                className="form-control input-md"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="category">
              Category
            </label>
            <div className="col-md-4">
              <select
                id="category"
                name="category"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="smartphone">SmartPhone</option>
                <option value="laptops">Laptops</option>
              </select>
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="brand">
              Brand
            </label>
            <div className="col-md-4">
              <select
                id="brand"
                name="brand"
                className="form-control"
                onChange={handleChange}
              >
                <option value="">Choose</option>
                <option value="apple">Apple</option>
                <option value="samsung">SamSung</option>
              </select>
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="discountPercentage">
              Discount
            </label>
            <div className="col-md-4">
              <input
                id="discountPercentage"
                name="discountPercentage"
                type="number"
                placeholder="discountPercentage"
                className="form-control input-md"
                onChange={handleChange}
              />
              <span className="help-block">help</span>
            </div>
          </div>
          {/* Button */}
          <div className="form-group">
            <div className="col-md-4">
              <button id="singlebutton" name="singlebutton" className="btn btn-primary">Add</button>
            </div>
          </div>
        </fieldset>
      </form>
      </div>
    </>
  );
};

export default AddProduct;