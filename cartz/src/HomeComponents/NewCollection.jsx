
import style from "./home.module.css"
import newCollection from "./images/newCollection.gif"
// import { mobileData } from "../Data/data";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
// import '@splidejs/react-splide/css/core';
  
  
function NewCollection ({data}){


    return <div className={style.newCollection}>
        <div>
            <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>
            <p style={{fontSize:"30px",fontWeight:"600"}}>New Collections</p>
            <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>
        </div>
        <div style={{backgroundImage:`url(${newCollection})`}}>

        </div>
        <div>
            {/* <div id="splide" className={style.splide}>
                <div className={style.splide__track}>
                    <ul className={style.splide__list}>
                        <li className={style.splide__slide}><img src="https://brandontran.com/images/cardboard-castle-10.jpg"/></li>
                        <li className={style.splide__slide}><img src="https://brandontran.com/images/cardboard-castle-5.jpg"/></li>
                        <li className={style.splide__slide}><img src="https://brandontran.com/images/cardboard-castle-4.jpg"/></li>
                        <li className={style.splide__slide}><img src="https://brandontran.com/images/cardboard-castle-3.jpg"/></li>
                    </ul>
                </div>
            </div> */}
            <Splide aria-label="My Favorite Images"
                options={ {
                    rewind: true,
                    gap   : '40px',
                    type   : 'loop',
                    perPage: 4,
                    perMove: 1,
                    pagination:false,
                  } }
                className={style.splide}
            >
             { data.length > 0 ?
                data?.map((e,i)=>
                <SplideSlide style={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"15px",border:"1px solid rgba(200,200,200,0.9)",cursor:"pointer"}}>
                    {/* <img width="70%" src={e.img} alt="Image 1"/> */}
                    <div key={i} style={{height:'400px',width:"100%"}}>
                        <div style={{backgroundImage:`url(${e.img})`,width:"100%",height:"70%",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderTopLeftRadius:"14px",borderTopRightRadius:"14px"}}>
                        </div>
                        <div >
                            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>
                                <p style={{fontWeight:"600",color:"gray",fontSize:"13px"}}>{e.brand}</p>
                                <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>                            
                            </div>
                            <p style={{fontSize:"18px",fontWeight:"600"}}>{e.product}</p>
                            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:'center',width:"70%",margin:"auto"}}>
                                <s style={{color:"red",fontSize:"12px"}}>₹{e.price}</s>
                                <p style={{color:"green",fontWeight:"600",fontSize:"18px"}}>₹{e.discountedPrice}</p>
                                <p style={{color:"gray",fontSize:"15px"}}>{e.discountPercentage}</p>
                            </div>
                        </div>
                    </div>
                </SplideSlide>
            ) : null
             }   
            </Splide>
        </div>
    </div>
}

export default NewCollection

// {
//     "img": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17091614/2022/2/18/779ac019-8b8c-48f7-9c5e-b3e2fe3004b01645166457327-Men-White-Casual-Shirt-5731645166456476-1.jpg",
//     "brand": "Roadster",
//     "product": "Men Cotton Casual Shirt",
//     "discountedPrice": "609",
//     "price": "1399",
//     "discountPercentage": "(790 OFF)"
// },