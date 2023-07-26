import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Carousel({data,name}) {
  return <div>
    <Splide 
      aria-label="My Favorite Images" 
      options={ {
        rewind: true,
        gap   : '40px',
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        pagination:true ,
        autoplay:true,
        speed:500,
        height:name==="UpcomingCategory" ? "300px" : "auto",
      } }
    >
      {data.map((e,i)=>{return <SplideSlide key={i+1} style={{cursor:"pointer"}}>
        <img
          src={e}
          alt=""
        />
      </SplideSlide>}
      )}
    </Splide>
  </div>
}