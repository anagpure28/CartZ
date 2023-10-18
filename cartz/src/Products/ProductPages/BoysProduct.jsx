import styled from "styled-components";
import { BoysProductList } from "../ProductList/BoysProductList";
import { BoysSideBar } from "../../Components/BoysSideBar";

const BoysProduct = () => {
  return (
    <DIV>
      <div className="banner animate__animated animate__zoomInDown">
      </div>
      <div className="flex">
        <div className="sidebar" data-aos="zoom-out-right">
          <BoysSideBar />
        </div>
        <div className="allProductList" data-aos="zoom-out-left">
          <BoysProductList />
        </div>
      </div>
    </DIV>
  );
};

export default BoysProduct;

const DIV = styled.div`
    .flex{
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
    .sidebar{
        width: 20%;
        margin: 40px 0px 0 0;
        padding-right: 30px;
        border-right: 1px solid black;
    }
    .allProductList{
        width: 78%;
        margin-top: 40px;
        /* border: 1px solid black; */
    }
    .banner{
        width: 95%;
        height: 350px;
        margin: auto;
        margin-top: 62px;
        background-image: url("https://marketplace.canva.com/EAFWt8Wq208/1/0/1600w/canva-grey-minimalist-special-offer-banner-landscape-tVz4E4KVLgk.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
    }
    @media screen and (min-width: 795px) and (max-width: 1075px) {
    .sidebar{
      width: 30%;
    }
    .allProductList{
      width: 70%;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
  @media screen and (max-width: 795px) {
    .sidebar{
      width: 30%;
    }
    .allProductList{
      width: 70%;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
  }
`;