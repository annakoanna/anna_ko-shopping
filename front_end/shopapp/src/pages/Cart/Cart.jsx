import Summary from "../../components/Summary/Summary";
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";

import Button from "../../components/Button/Button";


import { useState, useEffect } from "react";

import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
const Cart = () => {
const [cart, setCart]=useState('')
// const {id} = useParams();
const getCart = async () =>{
    const { data } = await axios.get(`http://localhost:8000/api/cart/`)
    console.log(data)
    setCart(data)
}

 useEffect(()=> {
    getCart();
 }, [])


    return (
        <>
        <h1> My Shopping Bag</h1>
        <ShoppingItem />
        <Button buttonType='inverted' >Remove item</Button>
        <Button buttonType='inverted'>Go To Checkout</Button>
        <Summary />
        </>
    )
}
export default Cart