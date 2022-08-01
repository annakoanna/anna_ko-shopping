import './ProductDetailsPage.css';
import Button from "../Button/Button";
import { useState, useEffect } from "react";

import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const ProductDetailsPage = () => {
const [product, setProduct]=useState('')
const {id} = useParams();
const getSingleProduct = async () =>{
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`)
    console.log(data)
    setProduct(data)
}

 useEffect(()=> {
    getSingleProduct();
 }, [])


return (
     <>
         
            <div className="user-setting">
            <h1>Detail page</h1>
            <h2>{product.brand}</h2>
            <p>{product.description}</p>
            {/* <p>{product.name}</p> */}
            <h3>${product.price}</h3>
            {/* <p>{product.category}</p> */}
            {/* <p>{product.cloth_size}</p> */}
            <img src="{product.image}"alt="" />
            <p>{product.image}</p>
           <img src="{product.image}" alt="photo" />
        <div>
          <label className="dropdown" for='dropdown'>Select size</label>
          <select className='dropdown'>
            <option disabled value={product.size}>Select size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
           </select>
           </div>
            <br />
            <br />
            {/* <Link to={`/product/${index}`}>
                <img src={product.brand} />
            </Link> */} 
            <Button buttonType='inverted'>Add to cart</Button>
            <div className="dummy" />
            </div>
        
    </>
    );
}





export default ProductDetailsPage