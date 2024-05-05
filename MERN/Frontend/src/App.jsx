import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SingleProduct from './Pages/SingleProduct';
import { Header, Footer } from "./Components"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App