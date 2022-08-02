// import './ProductDetailsPage.css';
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { addToCart } from '../../Utilities/cart-api';


const ProductDetailsPageW = () => {
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
        <>
        <div className='row'>
        <div className='column'>
            <h1>Detail page</h1>
            <img src={product.image2} alt="" />
            </div>
        <div className="dummy" />
        <div className='column'>
            <h2>{product.brand}</h2>
            <br />
            <h3>{product.description}</h3>
            <br />
            <h3>${product.price}</h3>
            <br />
            <p>Category: {product.category}</p>
            
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
            <Link to={`/cart/`} onClick={handleSubmit}><Button buttonType='inverted'>Add to cart</Button></Link>
            <div className="dummy" />
            </div>
            </div>
            
        </>
        
    );
}

export default ProductDetailsPageW




// export default ProductDetailsPage