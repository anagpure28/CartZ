import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "../cartComponents/CartProvider";

const ProductCard = ({
  ratingsContainer,
  ratingsCount,
  img,
  brand,
  title,
  discountedPrice,
  price,
  discountPercentage,
  id,
  category,
  detail,
}) => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { addItemToCart } = useCart()

  const cartButton = () => {
    let cartData = JSON.parse(localStorage.getItem("CartZ-cart")) || [];
    let duplicateData = false;
    cartData.forEach((el,i)=> {
      if(el.id === id && el.category === category){
        duplicateData = true;
      }
    })
    if(duplicateData){
      messageApi.info('Product is already present in the Cart');
      return;
    }
    let newCard = [...cartData, {...detail, quantity: 1}];
    addItemToCart(newCard)
    localStorage.setItem("CartZ-cart", JSON.stringify(newCard))
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 1.5,
      })
      .then(() => message.success('Product Added to Cart', 2.5))
  };

  return (
    <div
      style={{
        height: "370px",
        borderRadius: "10px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
      key={id}
    >
      {contextHolder}
      <div
        style={{
          // border:"1px solid red",
          height: "100%",
          width: "100%",
          borderRadius: "10px",
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "0.5px",
        }}
      >
        <div
          style={{ height: "69%", cursor: "pointer" }}
          onClick={() => navigate(`${id}`)}
        ></div>
        <div
          style={{
            // border:"1px solid red",
            height: "30%",
            width: "98%",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.8)",
            margin: "0px auto",
            padding: "5px 10px",
            color: "rgb(75,75,75)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontWeight: "600",
                fontSize: "12px",
                color: "#2D6E7E",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <CiShoppingTag /> {brand}
            </p>
            <p
              style={{
                fontWeight: "600",
                fontSize: "12px",
                color: "gray",
              }}
            >
              {category}
            </p>
          </div>
          <hr
            style={{ border: "1px dashed #2D6E7E", margin: "3px auto" }}
          />
          <p
            style={{
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {title.substring(0, 30)}
            {title.length > 30 ? "..." : ""}
          </p>

          {ratingsContainer !== "" && ratingsCount !== "" ? (
            <div
              style={{
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#2D6E7E",
              }}
            >
              <p style={{ fontWeight: "800", fontSize: "13px" }}>
                {ratingsContainer}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-5px",
                  fontSize: "15px",
                }}
              >
                {ratingsContainer === 5 ? (
                  <>
                    {new Array(ratingsContainer).fill().map(() => (
                      <MdOutlineStar />
                    ))}
                  </>
                ) : ratingsContainer === 4 ? (
                  <>
                    {new Array(ratingsContainer).fill().map(() => (
                      <MdOutlineStar />
                    ))}
                    <MdOutlineStarOutline />
                  </>
                ) : ratingsContainer === 3 ? (
                  <>
                    {new Array(ratingsContainer).fill().map(() => (
                      <MdOutlineStar />
                    ))}
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                ) : ratingsContainer === 2 ? (
                  <>
                    {new Array(ratingsContainer).fill().map(() => (
                      <MdOutlineStar />
                    ))}
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                ) : ratingsContainer === 1 ? (
                  <>
                    {new Array(ratingsContainer).fill().map(() => (
                      <MdOutlineStar />
                    ))}
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                ) : +ratingsContainer.toString().trim().split(".")[0] === 5 ? (
                  <>
                    {new Array(
                      +ratingsContainer.toString().trim().split(".")[0]
                    )
                      .fill()
                      .map(() => (
                        <MdOutlineStar />
                      ))}
                  </>
                ) : +ratingsContainer.toString().trim().split(".")[0] === 4 ? (
                  <>
                    {new Array(
                      +ratingsContainer.toString().trim().split(".")[0]
                    )
                      .fill()
                      .map(() => (
                        <MdOutlineStar />
                      ))}
                    <MdOutlineStarHalf />
                  </>
                ) : +ratingsContainer.toString().trim().split(".")[0] === 3 ? (
                  <>
                    {new Array(
                      +ratingsContainer.toString().trim().split(".")[0]
                    )
                      .fill()
                      .map(() => (
                        <MdOutlineStar />
                      ))}
                    <MdOutlineStarHalf />
                    <MdOutlineStarOutline />
                  </>
                ) : +ratingsContainer.toString().trim().split(".")[0] === 2 ? (
                  <>
                    {new Array(
                      +ratingsContainer.toString().trim().split(".")[0]
                    )
                      .fill()
                      .map(() => (
                        <MdOutlineStar />
                      ))}
                    <MdOutlineStarHalf />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                ) : +ratingsContainer.toString().trim().split(".")[0] === 1 ? (
                  <>
                    {new Array(
                      +ratingsContainer.toString().trim().split(".")[0]
                    )
                      .fill()
                      .map(() => (
                        <MdOutlineStar />
                      ))}
                    <MdOutlineStarHalf />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                ) : (
                  <>
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                    <MdOutlineStarOutline />
                  </>
                )}
              </div>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                ({ratingsCount})
              </p>
            </div>
          ) : (
            <div style={{ height: "24px" }}></div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {discountedPrice ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "600",
                }}
              >
                <s
                  style={{ marginTop: "3px", color: "gray", fontSize: "11px" }}
                >
                  {price}
                </s>
                <p style={{ marginTop: "3px", fontSize: "15px" }}>
                  ₹{discountedPrice}
                </p>
                <p style={{ marginTop: "3px", fontSize: "12px" }}>
                  {discountPercentage}
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                  gap: "10px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                <p style={{ marginTop: "3px", fontSize: "15px" }}>₹{price}</p>
              </div>
            )}
            <button
                id={id}
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#2D6E7E",
                  borderRadius: "8px",
                  padding: "5px 8px",
                  cursor: "pointer",
                  border:"2px solid #2D6E7E",
                  borderBottom:"3px solid",
                  borderRight:"3px solid",
                  marginTop:"-3px",
                }}
                onClick={cartButton}
              >
                Add To Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
