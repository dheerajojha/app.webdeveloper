import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop,Product,ProductDetail, ShopCategory, Cart, LoginSignup } from "./Pages";
import { Header, Footer } from "./Components"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory />} category="men" banner="https://images.yourstory.com/cs/21/0a385fc0-3e60-11e9-99df-3d1594bbde2c/Tooz_Retail_Store_image1554380707302.JPG?fm=png&auto=format&w=800&blur=500" />
        <Route path="/women" element={<ShopCategory />} category="women" banner="https://366e203a.rocketcdn.me/wp-content/uploads/2019/11/woman-shopping.jpg"/>
        <Route path="/kids" element={<ShopCategory />} category="kids" banner="https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19719.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1711843200&semt=ais" />
        {/* product nested route */}
        <Route path="/product" element={<Product/>} >
        <Route path=":productId" element={<ProductDetail />} />
        </Route> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>            
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App