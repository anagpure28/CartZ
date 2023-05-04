import React from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { path: "/", title: "Home" },
  // { path: "/about", title: "About" },
  // { path: "/contact", title: "Contact" },
  { path: "/all-products", title: "AllProducts"},
  { path: "/signup", title: "Register" },
];

const Navbar = () => {
  const defaultLinkStyle = {
    textDecoration: "none",
    color: "rgb(150, 150, 150)",
  };
  const activeLinkStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "1px solid white",
    paddingBottom: "3px",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        top:"0",
        height:"70px",
        position:"fixed",
        width:"100%",
        zIndex: 3
      }}
    >
      <div style={{ width: "30%", fontSize: "30px", fontWeight: "bold" }}>
        <p><Link to={"/"}>CartZ</Link></p>
      </div>
      <div style={{ width: "30%" }}>
        <input
          type="search"
          placeholder="Search"
          style={{
            width: "60%",
            padding: "5px 10px",
            borderRadius: "5px",
            color: "black",
          }}
        />
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {links.map(({ path, title }) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeLinkStyle : defaultLinkStyle;
            }}
            key={path}
            to={path}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
