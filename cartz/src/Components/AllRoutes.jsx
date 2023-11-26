import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../Pages/Home"));
const Login = lazy(() => import("../Pages/Login"));
const About = lazy(() => import("../Pages/About"));
const Studio = lazy(() => import("../Pages/Studio"));
const Contact = lazy(() => import("../Pages/Contact"));
const SingleProductPage = lazy(() => import("../Pages/SingleProductPage"));
const NotFound = lazy(() => import("../Pages/NotFound"));
const SignupCard = lazy(() => import("../Pages/Signup"));
const GirlsProduct = lazy(() => import("../Products/ProductPages/GirlsProduct"));
const BoysProduct = lazy(() => import("../Products/ProductPages/BoysProduct"));
const MenProducts = lazy(() => import("../Products/ProductPages/MenProducts"));
const WomenProducts = lazy(() => import("../Products/ProductPages/WomenProducts"));
const CreditCard = lazy(() => import("../Payment/CreditCard"));
const Cart = lazy(() => import("../Pages/Cart"));
const PaymentSuccess = lazy(() => import("../Payment/PaymentSuccess"));

const AllRoutes = () => {
  return (
    <div
      style={{
        marginTop: "69px",
      }}
    >
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: '50px',
              fontWeight: 'bold'
            }}
          >
            Loading....
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:category/:id" element={<SingleProductPage />}></Route>
          <Route path="/signup" element={<SignupCard />}></Route>
          <Route path="/men" element={<MenProducts />}></Route>
          <Route path="/women" element={<WomenProducts />}></Route>
          <Route path="/studio" element={<Studio />}></Route>
          <Route path="/girls" element={<GirlsProduct />}></Route>
          <Route path="/boys" element={<BoysProduct />}></Route>
          {/* <Route path="/creditcard" element={<CreditCard />}></Route> */}
          {/* <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route> */}
          {/* <Route path="/carts" element={<Cart />}></Route> */}
          <Route
            path="/creditcard"
            element={
              <PrivateRoute>
                <CreditCard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/carts"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/paymentsuccess"
            element={
              <PrivateRoute>
                <PaymentSuccess />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default AllRoutes;
