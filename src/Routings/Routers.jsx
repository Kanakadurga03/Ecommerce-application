import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Cart from '../Component/Cart'
import AllProducts from '../Component/AllProducts'
import ProductDetails from "../Component/ProductDetails";

const Routers = () => {
  return (
    <>
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </>
    
  )
}

export default Routers