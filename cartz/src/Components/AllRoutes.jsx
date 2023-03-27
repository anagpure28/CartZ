import React from 'react';
import {Route, Routes} from "react-router-dom"
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import NotFound from "../Pages/NotFound";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default AllRoutes