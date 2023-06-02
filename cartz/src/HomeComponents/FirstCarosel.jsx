import { useEffect } from "react";
import Carousel from "../Pages/Carousel"
import pic1 from "./images/1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";
import pic5 from "./images/5.jpg";
import pic6 from "./images/6.jpg";
import pic7 from "./images/7.jpg"
import pic8 from "./images/8.jpg"
import pic9 from "./images/9.jpg"
import pic10 from "./images/10.jpg"




function FirstCarosel(){
    const data = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic7,
        pic8,
        pic9,
        pic10

    ];
    return <div>
        <Carousel data={data}/>
    </div>
}

export default FirstCarosel