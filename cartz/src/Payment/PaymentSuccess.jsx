import React from "react";
import Payment from "./Image/payment.png";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        width: "100%",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Payment} alt="payment" style={{width: "60%", height: "60%", marginTop: "10px"}} />
      <button
        onClick={HandleClick}
        style={{
          border: "2px solid green",
          padding: "8px 20px",
          borderRadius: "15px",
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "#656565",
          margin: "0px auto 25px"
        }}
      >
        Home Page
      </button>
    </div>
  );
};

export default PaymentSuccess;
