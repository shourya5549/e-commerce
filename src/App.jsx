import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import Login from './auth/Login'
import Signup from './auth/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/login' element={<Login />}></Route >
          <Route path='/signup' element={<Signup />}></Route >
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App