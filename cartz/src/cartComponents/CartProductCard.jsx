import { useEffect, useState } from "react";
import style from "../cartComponents/CartProductCard.module.css";
import { MdDeleteForever } from "react-icons/md";

// {
//   "id": 2,
//   "category": "jackets",
//   "ratingsContainer": "4.1",
//   "ratingsCount": "5.4k",
//   "separator": "|",
//   "base href": "https://www.myntra.com/jackets/hrx-by-hrithik-roshan/hrx-by-hrithik-roshan-men-olive-green-solid-active-bomber-jacket/4453297/buy",
//   "img": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg",
//   "brand": "HIGHLANDER",
//   "title": "Men Active Bomber Jacket",
//   "sizeInventoryPresent": "L",
//   "discountedPrice": "1199",
//   "price": 3999,
//   "discountPercentage": "(70% OFF)",
//   "xcelerator-plpXceleratorImageTag": ""
//   },

let cart = JSON.parse(localStorage.getItem("CartZ-cart")) || [];

const CartProductCard = ({
  id,
  img,
  title,
  price,
  discountPercentage,
  discountedPrice,
  sizeInventoryPresent,
  brand,
  category,
  quantity,
  increment,
  decrement,
  remove,
}) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("CartZ-cart")) || [];
    setCart(cart);
  }, []);

  return (
    <div id={style.card}>
      <div id={style.image} style={{ backgroundImage: `url(${img})` }}></div>
      <div id={style.description}>
        <p id={style.title}>{title}</p>
        <div id={style.subhead}>
          <p id={style.brand}>{brand}</p>|<p id={style.category}>{category}</p>
        </div>
      </div>
      <div id={style.size}>
        <p>{sizeInventoryPresent}</p>
      </div>
      <div id={style.pricing}>
        <strike>₹{price}</strike>
        <p>₹{discountedPrice}</p>
        <p>{discountPercentage}</p>
      </div>
      <div id={style.quantity}>
        <button onClick={() => decrement(id, title, quantity)}>-</button>
        <button
          style={{
            margin: "0 4px 0",
            fontSize: "1.2rem",
            backgroundColor: "transparent",
            border: "1px solid black",
          }}
        >
          {quantity}
        </button>
        <button onClick={() => increment(id, title)}>+</button>
      </div>
      <div id={style.remove}>
        <button onClick={() => remove(id, title)}>
          <MdDeleteForever fontSize={25} color="red" />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
