import React, { useState, useEffect } from "react";
import "./App.css";
import "./css/global.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DetailPage from "./Pages/Detail/Detail";
import Header from "./Components/Header/Header";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
function App() {
  const [products, setProducts] = useState("");
  const [cart, setCart] = useState("");
  const [cartItemsTotal, setCartItemsTotal] = useState("")
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    async function getData() {
      const getApi = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Request-Headers": "Content-Type",
          "Access-Control-Allow-Credentials": true,
        },
      });
      const response = await getApi.json();
      setProducts(response);
    }
    getData();
  }, []);

  const addToCart = (id)=>{
    products.map((item, index)=>{
      if(item.id === id){
        setCart([...cart, item])
      }
    })
  }

  const removeFromCart = (id) =>{
    cart.map((item, index) => {
      setCart(cart.filter(item => item.id !== id))
    })
  }
  return (
    <div className="App">
      <Header cartLength = {cart.length}/>
      <main className="py-5">
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home products={products} click={addToCart}/>}
            ></Route>
            <Route
              exact
              path="/detail/:id"
              element={<DetailPage productItem={products} click={addToCart}/>}
            ></Route>
            <Route
              exact
              path="/products"
              element={<Products products={products} click={addToCart}/>}
            ></Route>
            <Route
              exact
              path="/cart"
              element={<Cart cartItems = {cart} removeItems = {removeFromCart}/>}
            ></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
