import { useEffect } from "react";
import "./Coupon.css"
import { useNavigate } from "react-router-dom";

function Coupon() {
  const navigate = useNavigate();

  useEffect(() => {
    const newCoupon = () => {
      const card = document.querySelector(".card");
      const triangle = document.querySelector(".triangle");
      card.classList.toggle("widen");
      triangle.classList.toggle("righttriangle");
    };

    const leftSide = document.querySelector(".left-side");
    leftSide.addEventListener("click", newCoupon);

    return () => {
      // Clean up the event listener when the component unmounts
      leftSide.removeEventListener("click", newCoupon);
    };
  }, []);

  const HandlePress = () => {
    navigate("/signup");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <span className="triangle"></span>
            <div className="flattext">
              <h2>FLAT $40 OFF</h2>
            </div>
          </div>
          <div className="right-side">
            <div className="upper-content">
              <div className="flat">
                <p>AVAIL FLAT</p>
                <h3>$40 OFF</h3>
                <h4>+ FREE DELIVERY</h4>
              </div>
              <img src="https://i.imgur.com/W4V3L6j.png" />
            </div>
            <div className="middle-content">
              <div className="coupon">
                <h4>Coupon code :</h4>
                <p>CARTZ40</p>
                <p>Applicable on your first order</p>
              </div>
              <button onClick={HandlePress}>Sign up now</button>
            </div>
            <hr />
            <div className="last">
              <div className="quality">
                <img src="https://imgur.com/a0TMZC7.jpg" />
                <p>Genuine Products</p>
              </div>
              <div className="quality">
                <img src="https://imgur.com/8IZhLGS.jpg" />
                <p>Try & Buy</p>
              </div>
              <div className="quality">
                <img src="https://imgur.com/TezkMX1.jpg" />
                <p>Easy Exchanges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
