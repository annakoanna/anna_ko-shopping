import Summary from "../../components/Summary/Summary";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { getCart } from "../../Utilities/cart-api";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const Cart = ({ product }) => {
    const [cart, setCart] = useState()
    const fetchCartItems = async () => {
        const response = await getCart();
        console.log(response)
        setCart(response)
    };

    // const getCart = async () =>{
    //     const { data } = await axios.get(`http://localhost:8000/api/cart/`)
    //     console.log(data)
    //     setCart(data)
    // }

    useEffect(() => {
        fetchCartItems();
    }, [])


    return (
        <div>
            <div className="user-setting">



                <h1> My Shopping Bag</h1>
                {cart?.map(item => (<div className="row">
                    <div className="column">
                        <img src={item?.product?.image2} alt="" />
                        <h2>{item?.product?.brand}</h2>
                        <h3>Size: {item?.product?.size}</h3>
                        <h3>Quantity: {item?.quantity}</h3>
                        <h3>Description: {item?.product?.description}</h3>
                        <Button buttonType='inverted' >Delete</Button>
                    </div>
                    <div className="column">
                        <h3>Subtotal:      ${item?.product?.price}
                            {/* {product.price} */}
                        </h3>
                        <h3>Delivery  $0.00</h3>
                        <h3>Total:      {item?.product?.price}  USD
                            {/* {product.price} */}
                        </h3>
                        <Button buttonType='inverted'>Go To Checkout</Button>
                        <div className="dummy" />
                    </div>
                    <div className="dummy" />
                </div>))}
            </div>
            <div className="dummy" />
        </div>
    )
}
export default Cart