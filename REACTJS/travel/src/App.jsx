import React from 'react'
import Home from './Pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './Components'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App