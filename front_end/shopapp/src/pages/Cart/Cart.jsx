
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { deleteFromCart, getCart } from "../../Utilities/cart-api";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const Cart = ({ product }) => {
    const [refreshCart, setRefreshCart] = useState(false)
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
    }, [refreshCart])
    

    async function handleDelete(e) {
       
         console.log(e.target.id)
       let productId = e.target.id
        
        await deleteFromCart(productId);
        setRefreshCart(!refreshCart)
    }


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
                        <Button buttonType='inverted' onClick={handleDelete} id={item.product.id}>Delete</Button>
                    </div>
                    <div className="dummy" />
                    <div className="column">
                        <h3>Subtotal:      ${item?.product?.price}
                            {/* {product.price} */}
                        </h3>
                        <h3>Delivery  $0.00</h3>
                        <h3>Total:      {item?.product?.price}  USD
                            {/* {product.price} */}
                        </h3>
                        <Button buttonType='inverted'>Checkout</Button>
                        <div className="dummy" />
                    </div>
                </div>))}
            </div>
            <div className="dummy" />
        </div>
    )
}
export default Cart