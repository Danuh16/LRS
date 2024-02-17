import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";




function NavbarParcel() {
  
  return (
    <>
      <nav className="Navbar">
        <img alt="logo" src={Image} />
        <div className="nav-items">
          <Link to="/" >Home</Link>
          <Link to="/User">Dashboard</Link>
        </div>
      </nav>
    </>
  );
}
export default NavbarParcel;
