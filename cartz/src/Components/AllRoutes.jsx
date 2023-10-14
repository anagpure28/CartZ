import React, { Suspense, lazy } from 'react';
import {Route, Routes} from "react-router-dom"
import About from '../Pages/About';
import Studio from '../Pages/Studio';
import {Contact} from '../Pages/Contact';
// import Home from '../Pages/Home';
// import Login from "../Pages/Login";
// import SingleProductPage from "../Pages/SingleProductPage";
// import NotFound from "../Pages/NotFound";
// import SignupCard from '../Pages/Signup';
// import KidProducts from "../Products/ProductPages/KidProducts"
// import MenProducts from "../Products/ProductPages/MenProducts"
// import WomenProducts from "../Products/ProductPages/WomenProducts"
// import CreditCard from '../Payment/CreditCard';
// import Cart from '../Pages/Cart';
// import GirlsProduct from '../Products/ProductPages/GirlsProduct';
// import BoysProduct from '../Products/ProductPages/BoysProduct';

import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Pages/Login'));
const SingleProductPage = lazy(() => import('../Pages/SingleProductPage'));
const NotFound = lazy(() => import('../Pages/NotFound'));
const SignupCard = lazy(() => import('../Pages/Signup'));
const GirlsProduct = lazy(() => import('../Products/ProductPages/GirlsProduct'));
const BoysProduct = lazy(() => import('../Products/ProductPages/BoysProduct'));
const MenProducts = lazy(() => import('../Products/ProductPages/MenProducts'));
const WomenProducts = lazy(() => import('../Products/ProductPages/WomenProducts'));
const CreditCard = lazy(() => import('../Payment/CreditCard'));
const Cart = lazy(() => import('../Pages/Cart'));

const AllRoutes = () => {
  return (
    <div style={{
      marginTop:"69px"
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carts" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:category/:id" element={<SingleProductPage />}></Route>
          <Route path="/signup" element={<SignupCard />}></Route>
          <Route path="/men" element={<MenProducts/>}></Route>
          <Route path="/women" element={<WomenProducts />}></Route>
          <Route path="/studio" element={<Studio />}></Route>
          <Route path="/girls" element={<GirlsProduct/>}></Route>
          <Route path="/boys" element={<BoysProduct/>}></Route>
          <Route path="/creditcard" element={<CreditCard/>}></Route>
          <Route
          path="/payment"
          element={
            <PrivateRoute>
            <CreditCard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}

export default AllRoutes