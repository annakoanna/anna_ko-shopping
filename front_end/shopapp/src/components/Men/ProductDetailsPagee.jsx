// import './ProductDetailsPage.css';
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToCart } from '../../Utilities/cart-api';


const ProductDetailsPagee = () => {
    const [product, setProduct] = useState('')
    const { id } = useParams();
    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/product/${id}`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getSingleProduct();
    }, [])

    async function handleSubmit() {
        const productData = {
            product_id: id,
            quantity: 1 // default to 1 for now.
        }
        await addToCart(productData);
    }

    return (
        <div className="user-setting" >
            <h1>Detail page</h1>
            <h2>{product.brand}</h2>
            <h3>{product.description}</h3>
            <h3>${product.price}</h3>
            <p>Category: {product.category}</p>
            {/* <p>{product.cloth_size}</p> */}
            <p>{product.image}</p>

            
            
            <br />

            {/* <button
                name="Add to cart"
                className="product__btn"
                onClick={handleSubmit}
            >
                Quick add
            </button> */}
            
            <Link to={`/cart/`}><Button onSubmit={handleSubmit} onClick={handleSubmit} buttonType='inverted'>Add to cart</Button></Link>
        </div>
    );
}

export default ProductDetailsPagee

