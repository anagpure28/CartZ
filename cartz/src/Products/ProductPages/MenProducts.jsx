import styled from "styled-components";
import { MenSideBar } from "../../Components/MenSideBar";
import { MenProductList } from "../ProductList/MenProductList";

export const MenProducts = () => {
  return (
    <DIV>
      <div className="banner">
      </div>
      <div className="flex">
        <div className="sidebar" data-aos="zoom-out-right">
          <MenSideBar />
        </div>
        <div className="allProductList" data-aos="zoom-out-left">
          <MenProductList />
        </div>
      </div>
    </DIV>
  );
};

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
`;
