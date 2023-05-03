import React from 'react';
import {Route, Routes} from "react-router-dom"
import About from '../Pages/About';
import {Contact} from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import NotFound from "../Pages/NotFound";
import SignupCard from '../Pages/Signup';
import {AllProducts} from "..//Products/ProductPages/AllProducts"
// import Payment from '../Pages/Payment';
// import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/product/:id" element={<SingleProductPage />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
        {/* <Route
        path="/payment"
        element={
          <PrivateRoute>
          <Payment />
          </PrivateRoute>
        }
      ></Route> */}
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default AllRoutes