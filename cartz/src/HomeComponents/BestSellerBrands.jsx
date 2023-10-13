import style from "../HomeComponents/home.module.css";
import { BestSellerBrandsData } from "../Data/data";
function BestSellerBrands() {
  return (
    <div className={style.BestSeller}>
      <div>
        <div
          style={{
            width: "50px",
            border: "1px solid #2D6E7E",
            margin: "20px",
          }}
        ></div>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>
          Best Seller Brands
        </p>
        <div
          style={{
            width: "50px",
            border: "1px solid #2D6E7E",
            margin: "20px",
          }}
        ></div>
      </div>
      <div>
        {BestSellerBrandsData.map((e,i) => (
          <div key={i}
            style={{
              border: "0px solid red",
              height: "170px",
              width: "170px",
              margin: "auto",
              lineHeight: "15px",
              borderRadius: "50%",
              paddingTop: "20px",
              backgroundColor: e.bgColor,
              cursor: "pointer",
            }}
          >
            <img
              width="100px"
              height="100px"
              src={e.image}
              alt={e.name}
              style={{ margin: "auto" }}
            />
            <p style={{ color: "white", fontWeight: "500", marginTop: "5px" }}>
              {e.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        <button>See More »</button>
      </div>
    </div>
  );
}
export default BestSellerBrands;
