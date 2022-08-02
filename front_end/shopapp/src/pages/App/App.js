import NavBar from "../../components/NavBar/NavBar";
import Women from "../../components/Women/Women";
import Men from "../../components/Men/Men";
import Kids from "../../components/Kids/Kids";
import ProductList from "../../components/ProductList/ProductList";
import Search from "../../components/Search/Search";
import "./App.css";
import ProductDetailsPage from "../../components/ProductDetailsPage/ProductDetailsPage";
import ProductDetailsPageW from "../../components/Women/ProductDetailsPageW";
import ProductDetailsPagee from "../../components/Men/ProductDetailsPagee";
import { useState } from "react";
import { Routes, Route , Navigate} from "react-router-dom";
// import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import Cart from "../Cart/Cart";
import Footer from "../../components/Footer/Footer";
import UserSettingPage from "../UserSettingPage/UserSettingPage";
import React from "react"
import {useEffect} from 'react'
import axios from 'axios'

import { userProfile } from '../../Utilities/api'
import { addToCart, deleteFromCart } from '../../Utilities/cart-api'

export default function App() {
  const [user, setUser] = useState();
  const [products, setProducts] = useState();
  const[product, setProduct] = useState();

  function componentDidMount() {
		//console.log('it mounted');
		let data;
		axios.get('http://127.0.0.1:8000/api/product/')
			.then((res) => {
				data = res.data;
				console.log(data);
               
				setProducts(data);
			})
			.catch((err) => {});

    // try to fetch user
    userProfile()
      .then(user => setUser(user))
      .catch(err => setUser(undefined));

    addToCart()
      .then(product => setProduct(user))
      .catch(err => setProduct(undefined));
    deleteFromCart()
      .then(product => setProduct(user))
      .catch(err => setProduct(undefined));
	}
	useEffect(() => {
		componentDidMount();
	}, []);

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar user={user} setUser={setUser} />}>
          <Route index element={<HomePage />} />
          <Route path='cart' element={<Cart user={user} products={products}/>} />
          <Route path="auth" element={<AuthPage setUser={setUser} />} />
          <Route path='women' element={<Women product={product}/>}  />  
          <Route path='men' element={<Men products={products}/>} />
          <Route path='kids' element={<Kids  products={products} />} />
          {/* <Route path='product' element={<ProductCard />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path='allproduct' element={<ProductList products={products}/>} /> 
          <Route path='search' element={<Search products={products}/>} />
          <Route path='kids/:id/' element={<ProductDetailsPage products={products}/>}/>
          <Route path='men/:id/' element={<ProductDetailsPagee products={products}/>}/>
          <Route path='women/:id/' element={<ProductDetailsPageW products={products}/>}/>
          <Route
              path="/settings"
              element={
                <UserSettingPage />
              }
            ></Route> 
          {/* <Footer /> */}
        </Route>
      </Routes>
      <Footer />
    </div>

  );
}