import styled from "styled-components";
import { MenSideBar } from "../../Components/MenSideBar";
import { AllProductList } from "../ProductList/AllProductList";
import { useEffect, useState } from "react";

export const AllProducts = () => {
  // const [img, setImg] = useState("");
  // const [imagesArr, setImagesArr] = useState(Math.floor(Math.random() * arr.length));

  // const arr = [
  //   {
  //     id: 1,
  //     img: "https://t3.ftcdn.net/jpg/03/16/37/64/360_F_316376413_nYL2jpLONPQPOsy31DE86n7FPpSxPIi3.jpg",
  //   },
  //   {
  //     id: 2,
  //     img: "https://i.pinimg.com/originals/14/d1/6e/14d16e8d4a49f00a9e94c2d838dd09ad.jpg",
  //   },
  //   {
  //     id: 3,
  //     img: "https://www.shutterstock.com/shutterstock/photos/2150286415/display_1500/stock-vector-mega-sale-special-offer-neon-off-sale-banner-sign-board-promotion-vector-illustration-2150286415.jpg",
  //   },
  //   {
  //     id: 4,
  //     img: "https://i.ytimg.com/vi/MoGiagwDnn0/maxresdefault.jpg",
  //   },
  //   {
  //     id: 5,
  //     img: "https://i.ytimg.com/vi/eCGodTBqmjI/maxresdefault.jpg",
  //   },

  //   // ,
  //   // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4QXq2IkkbHwia1jT-SdPWFvXCLXOjCgM1g&usqp=CAU",
  //   // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN682fKdVWy37YaAK3W5VOFr2BNouYvrU93A&usqp=CAU"
  // ];

  // console.log(img)
  // const changeImages = () => {
  //   const randomNumber = Math.floor(Math.random() * arr.length);
  //   setImagesArr(randomNumber)
  //   console.log(randomNumber)
  // }
  
  // let num = Math.floor(Math.random() * arr.length);
  // console.log(num);
  // useEffect(() => {
    // changeImages()
    // arr.map((e,i)=>{
    //   if(i===imagesArr){
    //     setImg(e)
    //    console.log(i,"-----------",imagesArr)
    //   }
    // })

  //   for (let i = 0; i < arr.length; i++) {
  //     if (num == arr[i].id) {
  //       setImg(arr[i].img);
  //     } else {
  //       setImg(
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN682fKdVWy37YaAK3W5VOFr2BNouYvrU93A&usqp=CAU"
  //       );
  //     }
  //   }
  // }, []);

  return (
    <DIV>
      {/* style={{ backgroundImage: `url(${img})` }} */}
      <div className="banner" >
        {/* <img src={img} alt="" /> */}
      </div>
      <div className="flex">
        <div className="sidebar" data-aos="zoom-out-right">
          <MenSideBar />
        </div>
        <div className="allProductList" data-aos="zoom-out-left">
          <AllProductList />
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .flex {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .sidebar {
    width: 20%;
    margin-top: 40px;
    padding-right: 12px;
    border-right: 1px solid black;
  }
  .allProductList {
    width: 78%;
    margin-top: 40px;
    /* border: 1px solid black; */
  }
  .banner {
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
