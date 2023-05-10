import men from "./men.jpg"
import women from "./women.jpg"
import kids from "./kids.jpg"
import accessories from "./accessories.jpg"

function LimitedOffers(){

    const data = [
        {
            img:men,
            title:"Men's",
            offer:"Upto 70% off",
            id:1
        },
        {
            img:women,
            title:"Women's",
            offer:"Upto 75% off",
            id:2
        },
        {
            img:kids,
            title:"Kid's",
            offer:"Upto 88% off",
            id:3
        },
        {
            img:accessories,
            title:"Accessories's",
            offer:"Upto 48% off",
            id:4
        },
        
    ]

    return <div style={{width:"85%",margin:"50px auto"}}>
        <div 
            style={{
                margin:"5px auto 40px auto",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}
            className="heading"
        >
            <div style={{width:"50px",border:"1px solid rgb(255, 111, 97)",margin:"20px"}}></div>
            <p style={{fontSize:"30px",fontWeight:"600"}}>Limited Offer's</p>
            <div style={{width:"50px",border:"1px solid rgb(255, 111, 97)",margin:"20px"}}></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"50px"}}>
            {data.map((e)=>
            <div 
                key={e.id}
                style={{
                    // border:"1px solid red",
                    height:"350px",
                    backgroundImage:`url(${e.img})`,
                    backgroundSize:"cover",
                    backgroundRepeat:"no-repeat",
                    borderRadius:"20px",
                    display:"flex",
                    alignItems:"flex-end",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    cursor:'pointer'
                }}
            >
                <div style={{
                    width:"100%",
                    height:"65px",
                    backgroundColor:"white",
                    borderRadius:"2px 2px 20px 20px",
                    margin:"4px"
                }}>
                    <p style={{fontSize:"20px",fontWeight:"700"}}>{e.title}</p>
                    <div style={{width:"70%",border:"1px solid rgb(255, 111, 97)",margin:"3px auto"}}></div>
                    <p style={{fontSize:"15px",fontWeight:"700"}}>{e.offer}</p>

                </div>
            </div>)}
        </div>
        
    </div>
}

export default LimitedOffers;