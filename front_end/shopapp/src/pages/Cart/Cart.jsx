import Summary from "../../components/Summary/Summary";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { addToCart } from "../../Utilities/cart-api";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const Cart = ({product}) => {
const [cart, setCart]=useState()
// const {id} = useParams();
// const getCart = async () =>{
//     const { data } = await axios.get(`http://localhost:8000/api/cart/`)
//     console.log(data)
//     setCart(data)
// }

//  useEffect(()=> {
//     getCart();
//  }, [])


    return (
        <div>
        <h1> Shopping Bag</h1>
        <div className="user-setting">
        <img src="" alt="" />

        {/* <p>{product.brand}</p>
            <p>${product.description}</p>
            <p>{product.category}</p> */}
            {/* <h3>{product.quantati}</h3>
            <h3>{product.size}</h3> */}
        <Button buttonType='inverted' >Delete</Button>
        </div>
        <div className="user-setting">
            <h3>Subtotal
                 {/* {product.price} */}
            </h3>
            <h3>Delivery  $0.00</h3>
            <h3>Total    USD
                {/* {product.price} */}
            </h3>
        <Button buttonType='inverted'>Go To Checkout</Button>
        </div>
       
        </div>
    )
}
export default Cart