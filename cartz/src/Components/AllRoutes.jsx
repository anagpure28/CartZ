import React from 'react';
import {Route, Routes} from "react-router-dom"
import About from '../Pages/About';
import Studio from '../Pages/Studio';
import {Contact} from '../Pages/Contact';
import Home from '../Pages/Home';
import Login from "../Pages/Login";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import NotFound from "../Pages/NotFound";
import SignupCard from '../Pages/Signup';
import {AllProducts} from "../Products/ProductPages/AllProducts"
import KidProducts from "../Products/ProductPages/KidProducts"
import {MenProducts} from "../Products/ProductPages/MenProducts"
import {WomenProducts} from "../Products/ProductPages/WomenProducts"
// import Payment from '../Pages/Payment';
// import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <div style={{
      marginTop:"59px"
    }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/product/:id" element={<SingleProductPage />}></Route>
          <Route path="/signup" element={<SignupCard />}></Route>
          <Route path="/all-products" element={<AllProducts />}></Route>
          <Route path="/men" element={<MenProducts/>}></Route>
          <Route path="/women" element={<WomenProducts />}></Route>
          <Route path="/studio" element={<Studio />}></Route>
          <Route path="/kids" element={<KidProducts/>}></Route>
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
    </div>
  )
}

export default AllRoutes