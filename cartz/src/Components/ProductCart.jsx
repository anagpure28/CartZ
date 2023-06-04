import { MdOutlineStar,MdOutlineStarHalf,MdOutlineStarOutline } from "react-icons/md";
import { CiShoppingTag } from "react-icons/ci";

import { useNavigate } from "react-router-dom";

const ProductCart = ({ratingsContainer,ratingsCount,img,brand,product,discountedPrice,price,discountPercentage})=>{

    const navigate = useNavigate();

    return <div 
        style={{
            height:"370px",
            borderRadius:"10px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
        
    >
        <div 
            style={{
                // border:"1px solid red",
                height:"100%",
                width:"100%",
                borderRadius:"10px",
                backgroundImage:`url(${img})`,
                backgroundPosition:"center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                paddingBottom:"0.5px"
            }}
        >

            <div style={{height:"69%",cursor:'pointer'}} onClick={()=>navigate("/product/:id")}>

            </div>
             <div 
                style={{
                    // border:"1px solid red",
                    height:"30%",
                    width:"98%",
                    borderBottomRightRadius:"10px",
                    borderBottomLeftRadius:"10px",
                    backgroundColor:"rgba(255,255,255,0.8)",
                    margin:"0px auto",
                    padding:"5px 10px",
                    color:"rgb(75,75,75)"
                }}
            >
                <p 
                    style={{
                        fontWeight:"600",
                        fontSize:'12px',
                        color:"rgb(255,111,97)",
                        display:"flex",
                        alignItems:"center",
                        gap:'5px'
                    }}
                >
                    <CiShoppingTag/> {brand}
                </p>
                <hr style={{border:"1px dashed rgb(255,111,97)",margin:"3px auto"}}/>
                <p 
                    style={{
                        fontWeight:"600",
                        fontSize:'14px',
                    }}
                >
                    {product.substring(0,32)}{product.length>32 ? "..." : ""}
                </p>
                {
                    ratingsContainer!=="" && ratingsCount!=="" ? 

                    <div style={{marginTop:'4px',display:"flex",alignItems:"center",gap:"5px",color:"rgb(255,111,97)"}}>
                    <p style={{fontWeight:"800",fontSize:"13px"}}>{ratingsContainer}</p>
                    <div style={{display:"flex",alignItems:"center",marginTop:"-1px",fontSize:"15px"}}>
                        {   
                            (ratingsContainer)===5 ?
                            <>
                                {new Array(ratingsContainer).fill().map(()=><MdOutlineStar/>)}
                            </> :
                            (ratingsContainer)===4 ?
                            <>
                                {new Array(ratingsContainer).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarOutline/>
                            </> :
                            (ratingsContainer)===3 ?
                            <>
                                {new Array(ratingsContainer).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> :
                            (ratingsContainer)===2 ?
                            <>
                                {new Array(ratingsContainer).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> :
                            (ratingsContainer)===1 ?
                            <>
                                {new Array(ratingsContainer).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> :
                            (+ratingsContainer.toString().trim().split(".")[0])===5 ?
                            <>
                                {new Array(+ratingsContainer.toString().trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                            </> :
                            (+ratingsContainer.toString().trim().split(".")[0])===4 ?
                            <>
                                {new Array(+ratingsContainer.toString().trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarHalf/>
                            </> : 
                            (+ratingsContainer.toString().trim().split(".")[0])===3 ?
                            <>
                                {new Array(+ratingsContainer.toString().trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarHalf/> 
                                <MdOutlineStarOutline/>
                            </> : 
                            (+ratingsContainer.toString().trim().split(".")[0])===2 ?
                            <>
                                {new Array(+ratingsContainer.toString().trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarHalf/> 
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> :
                            (+ratingsContainer.toString().trim().split(".")[0])===1 ?
                            <>
                                {new Array(+ratingsContainer.toString().trim().split(".")[0]).fill().map(()=><MdOutlineStar/>)}
                                <MdOutlineStarHalf/> 
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> :
                            <>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                                <MdOutlineStarOutline/>
                            </> 
                        }
                        </div>
                        <p style={{fontSize:"13px",fontWeight:"600"}}>({ratingsCount})</p>
                    </div>

                    :

                    <div style={{height:"24px"}}></div>
                }
                <div style={{display:'flex',alignItems:'center',justifyContent:"space-between"}}>
                    {
                        discountedPrice ? 

                        <div style={{display:'flex',alignItems:'center',gap:'8px',fontWeight:"600",}}>
                            <s style={{marginTop:"3px",color:"gray",fontSize:"11px"}}>{price}</s>
                            <p style={{marginTop:"3px",fontSize:"15px"}}>₹{discountedPrice}</p>
                            <p style={{marginTop:"3px",fontSize:"12px"}}>{discountPercentage}</p>
                        </div>

                        :

                        <div style={{display:'flex',alignItems:'center',marginLeft:"10px",gap:'10px',fontSize:"13px",fontWeight:"600",}}>
                            <p style={{marginTop:"3px",fontSize:"15px"}}>₹{price}</p>
                            
                        </div>
                    }
                    <button style={{fontSize:"12px",fontWeight:"600",backgroundColor:"rgb(255,111,97)",color:"white",borderRadius:"10px",padding:"5px 8px",cursor:"pointer"}} >Add To Cart</button>
                </div>
                
            </div>
        </div>
       
        
    </div>
}

export default ProductCart;