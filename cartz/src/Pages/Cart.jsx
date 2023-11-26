import React, { useEffect, useState } from "react";
import style from "../CSS/Cart.module.css";
import CartProductCard from "../cartComponents/CartProductCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../cartComponents/CartProvider";
import { Button, Result } from 'antd';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const { removeItemFromCart } = useCart();
  const location = useLocation();
  // console.log(location)

  useEffect(() => {
    // Load cart data from localStorage when the component mounts
    const storedCartData = JSON.parse(localStorage.getItem("CartZ-cart")) || [];
    setCartData(storedCartData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  function totalMRP() {
    let total = 0;
    for (let i = 0; i <= cartData.length - 1; i++) {
      total += cartData[i].price * cartData[i].quantity;
    }
    return total;
  }

  function totalPrice() {
    let total = 0;
    for (let i = 0; i <= cartData.length - 1; i++) {
      total += cartData[i].discountedPrice * cartData[i].quantity;
    }
    return total;
  }

  function totalItems() {
    let total = 0;
    for (let i = 0; i <= cartData.length - 1; i++) {
      total += cartData[i].quantity;
    }
    return total;
  }

  function percentage() {
    return (totalPrice() * 5) / 100;
  }

  const HandleProceed = () => {
    navigate("/creditcard");
  };

  const Increment = (id, title) => {
    const updatedCartData = cartData.map((item) => {
      if (item.id === id && item.title === title) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
    updateLocalStorage(updatedCartData);
  };

  const Decrement = (id, title, quantity) => {
    if (quantity === 1) {
      return;
    }
    const updatedCartData = cartData.map((item) => {
      if (item.id === id && item.title === title) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
    updateLocalStorage(updatedCartData);
  };

  const RemoveItem = (id, title) => {
    const updatedCartData = cartData.filter(
      (item) => item.id !== id || item.title !== title
    );
    removeItemFromCart(id);
    setCartData(updatedCartData);
    updateLocalStorage(updatedCartData);
  };

  const updateLocalStorage = (data) => {
    localStorage.setItem("CartZ-cart", JSON.stringify(data));
  };

  return (
    <div id={style.cart}>
      <div id={style.items}>
        {cartData.length > 0 ? (
          cartData.map((el) => (
            <CartProductCard
              key={el.id} // Assuming el.id is a unique identifier
              {...el}
              increment={Increment}
              decrement={Decrement}
              remove={RemoveItem}
            />
          ))
        ) : (
          <>
            <Result
              status="404"
              title="Your Cart is currently empty!!"
              style={{fontWeight: "400"}}
              extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
            />
          </>
        )}
      </div>
      <div id={style.invoice}>
        <div id={style.totalSection}>
          <div id={style.totalSectionTOP}>
            <div>
              <p>Total MRP</p>
              <p>
                Sub Total{" "}
                <p
                  style={{
                    fontStyle: "italic",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  (Include all taxs)
                </p>
              </p>
              <p>Quantity</p>
              <p>Discount Coupon</p>
              <p>Shipping</p>
            </div>
            <div>
              <p>₹{totalPrice()}</p>
              <p>₹{totalMRP()}</p>
              <p>{totalItems()}</p>
              {totalPrice() > 5000 ? (
                <p>-₹{percentage()} (5% OFF)</p>
              ) : (
                <p>Above ₹5000</p>
              )}
              {totalPrice() > 5000 ? <p>-₹0</p> : <p>-₹49</p>}
            </div>
          </div>
          <div id={style.totalSectionBOTTOM}>
            <div>
              <p>Total Amount</p>
            </div>
            <div>
              {totalPrice() > 5000 ? (
                <p>₹{totalPrice() - percentage()}</p>
              ) : (
                <p>₹{totalPrice()}</p>
              )}
            </div>
          </div>
        </div>
        <div id={style.cuponSection}>
          <div>
            <p>Apply Cupoun</p>
          </div>
          <div>
            <input type="text" name="" id="" placeholder="e.g. CARTZF50" />
            <button>Apply</button>
          </div>
        </div>
        <div id={style.buttonSection}>
          <button onClick={HandleProceed}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
