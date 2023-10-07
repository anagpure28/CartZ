import React, { useEffect, useState } from "react";
import style from "../CSS/Cart.module.css";
import CartProductCard from "../cartComponents/CartProductCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

let cartData = JSON.parse(localStorage.getItem("CartZ-cart")) || [];

const Cart = () => {
  const [data, setData] = useState(cartData);
  const navigate = useNavigate()

  function totalMRP() {
    let total = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      total += data[i].price * data[i].quantity;
    }
    return total;
  }

  function totalPrice() {
    let total = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      total += data[i].discountedPrice * data[i].quantity;
    }
    return total;
  }

  function totalItems() {
    let total = 0;
    for (let i = 0; i <= data.length - 1; i++) {
      total += data[i].quantity;
    }
    return total;
  }

  function percentage() {
    return (totalPrice() * 5) / 100;
  }

  function removeItem(id, title) {
    let newArr = data.filter((el, i) => {
      return el.id !== id && el.title !== title;
    });
    setData(newArr);
  }

  function decrement(id, title, quantity) {
    if (quantity === 1) {
      return;
    }
    let newArr = data.map((el, i) => {
      if (el.id == id && el.title == title) {
        return { ...el, quantity: el.quantity - 1 };
      } else {
        return el;
      }
    });
    setData(newArr);
  }

  const HandleProceed = () => {
    navigate("/creditcard")
  }

  function increment(id, title) {
    let newArr = data.map((el, i) => {
      if (el.id == id && el.title == title) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
    setData(newArr);
  }

  return (
    <div id={style.cart}>
      <div id={style.items}>
        {data.length > 0 ? (
          data?.map((el, i) => (
            <CartProductCard
              key={i}
              {...el}
              // increment={increment()}
              // decrement={decrement()}
              // removeItem={removeItem()}
              // quantity={quantity}
            />
          ))
        ) : (
          <>
            <p>No items in the cart</p>
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
              {totalPrice() > 5000 ? <p>-₹{percentage()} (5% OFF)</p> : <p>Above ₹5000</p>}
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
