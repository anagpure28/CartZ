import styled from "styled-components";
import { WomenSideBar } from "../../Components/WomenSideBar";
import { WomenProductList } from "../ProductList/WomenProductList";

const WomenProducts = () => {
  return (
    <DIV>
      <div className="banner animate__animated animate__zoomInDown"></div>
      <div className="flex">
        <div className="sidebar" data-aos="zoom-out-right">
          <WomenSideBar />
        </div>
        <div className="allProductList">
          <WomenProductList />
        </div>
      </div>
    </DIV>
  );
};

export default WomenProducts;

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
      margin-left: 20px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }

@media screen and (min-width: 550px) and (max-width: 794px){
  .flex{
    display: flex;
  }
  .sidebar{
      width: 40%;
    }
    .allProductList{
      width: 50%;
      margin: 30px auto;
    }
  .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
}

@media screen and (min-width: 220px) and (max-width: 549px){
  .flex{
    display: flex;
    flex-direction: column;
  }
  .sidebar{
      width: 80%;
      margin: 30px auto 0px;
      border: none
    }
    .allProductList{
      width: 80%;
      margin: 30px auto;
    }
  .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
}
`;
