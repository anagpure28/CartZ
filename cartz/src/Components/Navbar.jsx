import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {path:"/", title:"Home"},
  {path:"/about", title:"About"},
  {path:"/contact", title:"Contact"},
  {path:"/login", title:"Login"},
]

const Navbar = () => {


  const defaultLinkStyle = {
    textDecoration: "none",
    color: "rgb(150, 150, 150)"
  };
  const activeLinkStyle = {
    textDecoration: "none",
    color: "white",
    borderBottom: "1px solid white",
    paddingBottom: "3px"
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "black",
      // padding: "14px",
      color: "white",
      margin: "0"
    }}>
      <div style={{width: "30%"}}>
        <h1>CartZ</h1>
      </div>
      <div style={{width: "30%"}}>
        <input type="search" style={{width: "60%", padding: "8px", borderRadius: "5px"}}/>
      </div>
      <div style={{width: "40%", display: "flex", justifyContent:"space-evenly"}}>
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
  )
}

export default Navbar

