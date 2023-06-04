import styled from "styled-components";
import { SideBar } from "../../Components/SideBar";
import { AllProductList } from "../ProductList/AllProductList";

export const AllProducts = () => {
  return (
    <DIV>
      <div className="banner">
      </div>
      <div className="flex">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="allProductList">
          <AllProductList />
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
        margin-top: 40px;
        padding-right: 12px;
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
