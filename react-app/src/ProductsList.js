import {useEffect,useState} from "react";
import ProductsData from "./data";
import Product from "./Product";
import axios from 'axios';

const ProductList = () => {

    //const [products,setProducts] = useState(ProductsData);
    const [products,setProducts] = useState([]);

    const getProduct = async ()=>{
        // const response = await axios.get('http://localhost:8070/products')
        const response = await axios.get('/products')
        console.log(response.data);

        setProducts(response.data);
    }

    const handleClick = async (id)=>{
        // const res = await axios.delete(`http://localhost:8070/products/${id}`);
        const res = await axios.delete(`/products/${id}`);
        console.log(res.data);

        if(res.data._id){
            setProducts(products.filter(p=>p._id!==res.data._id));
        }

    }

    useEffect(()=>{
        getProduct()
    },[])

    return(
        <>
            {products.map((product,index) =>(
                <Product {...product} key={index} handleClickFunction={handleClick}></Product>  //this line repeat many time As number of object in data.js
            ))}
        </>
    );
};

export default ProductList;