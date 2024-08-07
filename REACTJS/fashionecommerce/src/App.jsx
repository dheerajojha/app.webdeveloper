import React from 'react'
import { Home } from './Pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Header } from './Components'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App