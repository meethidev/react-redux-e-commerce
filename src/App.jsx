import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import CartButton from './components/CartButton'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div className='relative h-screen'>
      <Router>
      <Navbar />
      <Routes>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <CartButton />
      <ToastContainer/>
      <Footer/>
      </Router>
    </div>
  )
}

export default App
