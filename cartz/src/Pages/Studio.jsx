import diwaliOffer from "./Images/diwali.jpg";
import party from "./Images/Party.jpg";
import festival from "./Images/festival.jpg";
import shadi from "./Images/shadi.jpg";
import travel from "./Images/travel.jpg";
import customer from "./Images/customer.jpg";
import Coupon from "../Components/Coupon";
import { useEffect } from "react";

function Studio() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${diwaliOffer})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
        class="animate__animated animate__heartBeat animate__delay-0.5s"
        Isi 
        isii sis 
      ></div>
      <Coupon />
      <div
        style={{
          margin: "40px auto 20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="heading"
      >
        <div
          style={{
            width: "50px",
            border: "1px solid #2D6E7E",
            margin: "20px",
          }}
        ></div>
        <p style={{ fontSize: "30px", fontWeight: "600" }}>Special Events</p>
        <div
          style={{
            width: "50px",
            border: "1px solid #2D6E7E",
            margin: "20px",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          width: "80%",
          margin: "20px auto 20px 120px",
        }}
      >
        <div
          style={{
            backgroundClip: "gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            width: "650px",
            borderRadius: "15px",
            backgroundColor: "#B2DFDB",
            padding: "0px 20px 0px 15px",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src={festival}
              alt="Festival Special"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                border: "5px solid #009688",
              }}
            />
          </div>
          <div style={{ textAlign: "start", width: "70%" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#009688",
                marginBottom: "3px",
              }}
            >
              Festival Special
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              minus quasi ex vitae sequi aliquid veniam amet quaerat maxime. Ex
              mollitia fuga repellendus labore officia facilis autem culpa quasi
              minima.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundClip: "gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            width: "650px",
            borderRadius: "15px",
            backgroundColor: "#FFAB91",
            padding: "0px 20px 0px 15px",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src={shadi}
              alt="shadi Special"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                border: "5px solid #FF5722",
              }}
            />
          </div>
          <div style={{ textAlign: "start", width: "70%" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#FF5722",
                marginBottom: "3px",
              }}
            >
              Shadi Special
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              minus quasi ex vitae sequi aliquid veniam amet quaerat maxime. Ex
              mollitia fuga repellendus labore officia facilis autem culpa quasi
              minima.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundClip: "gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            width: "650px",
            borderRadius: "15px",
            backgroundColor: "#9FA8DA",
            padding: "0px 20px 0px 15px",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src={party}
              alt="Party Special"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                border: "5px solid #3F51B5",
              }}
            />
          </div>
          <div style={{ textAlign: "start", width: "70%" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#3F51B5",
                marginBottom: "3px",
              }}
            >
              Party Special
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              minus quasi ex vitae sequi aliquid veniam amet quaerat maxime. Ex
              mollitia fuga repellendus labore officia facilis autem culpa quasi
              minima.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundClip: "gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "200px",
            width: "650px",
            borderRadius: "15px",
            backgroundColor: "#B0BEC5",
            padding: "0px 20px 0px 15px",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              src={travel}
              alt="Travel Special"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "100%",
                border: "5px solid #607D8B",
              }}
            />
          </div>
          <div style={{ textAlign: "start", width: "70%" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#607D8B",
                marginBottom: "3px",
              }}
            >
              Travel Special
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              minus quasi ex vitae sequi aliquid veniam amet quaerat maxime. Ex
              mollitia fuga repellendus labore officia facilis autem culpa quasi
              minima.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            margin: "0px auto 20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="heading"
        >
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
          <p style={{ fontSize: "30px", fontWeight: "600" }}>
            Customer of the Day
          </p>
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%",
            margin: "20px auto",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            borderRadius: "15px",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${customer})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "50%",
              height: "450px",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
            }}
          ></div>
          <div
            style={{ width: "50%", textAlign: "start", padding: "0px 20px" }}
          >
            <p
              style={{ fontSize: "25px", fontWeight: "600", color: "#E91E63" }}
            >
              Introducing our Customer of the Day:{" "}
            </p>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "600",
                color: "#E91E63",
                margin: "0px 0px 40px 0px",
              }}
            >
              Mr. and Mrs. Johnson!
            </p>
            <p style={{ fontSize: "17px" }}>
              Meet Mr. and Mrs. Johnson, a stylish married couple who love our
              online store. Mr. Johnson is a gentleman who values great service,
              while Mrs. Johnson has a keen eye for fashion. Together, they
              enjoy exploring our products and surprising each other with
              beautiful gifts. Join us in celebrating them as our Customers of
              the Day!
            </p>
            <p style={{ fontSize: "17px" }}>
              As a couple, Mr. and Mrs. Johnson embody the essence of a strong
              and loving partnership. They appreciate the convenience of online
              shopping and enjoy discovering new products together. Their shared
              enthusiasm for exploring different categories on our website has
              made them an integral part of our valued customer community.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            margin: "50px auto 20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="heading"
        >
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
          <p style={{ fontSize: "30px", fontWeight: "600" }}>
            Our Production's
          </p>
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
        </div>
        <iframe
          width="1200"
          style={{ margin: " 20px auto", borderRadius: "15px" }}
          height="550"
          src="https://www.youtube.com/embed/RGX844RaUBI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <div
          style={{
            margin: "50px auto 20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="heading"
        >
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
          <p style={{ fontSize: "30px", fontWeight: "600" }}>
            Cart-Z Charitable Trust
          </p>
          <div
            style={{
              width: "50px",
              border: "1px solid #2D6E7E",
              margin: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
export default Studio;
