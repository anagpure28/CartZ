import style from "./home.module.css"
import pic1 from "./images/comingSoon.gif"
import pic2 from "./images/PC._CB616406874_.gif"
import pic3 from "./images/Lights_1500x300.jpg"
import Carousel from "../Pages/Carousel"

function UpcomingCategory(){

    const data=[
        pic1,
        pic2,
        pic3
    ]

    return <div className={style.UpcomingCategory}>
         <div>
            <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>
            <p style={{fontSize:"30px",fontWeight:"600"}}>Upcoming Categories</p>
            <div style={{width:"50px",border:"1px solid #2D6E7E",margin:"20px"}}></div>
        </div>
        <div>
            <Carousel data={data} name={"UpcomingCategory"}/>
        </div>
    </div>
}
export default UpcomingCategory