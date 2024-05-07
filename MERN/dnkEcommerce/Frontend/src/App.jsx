import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop,Product,  SingleProduct, ShopCategory, Cart, LoginSignup } from "./Pages";
import { Header, Footer } from "./Components"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory />} category="men" />
        <Route path="/women" element={<ShopCategory />} category="women"/>
        <Route path="/kids" element={<ShopCategory />} category="kids" />
        {/* product nested route */}
        <Route path="/product" element={< Product/>} >
        <Route path=":productId" element={<SingleProduct />} />
        </Route> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>            
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App