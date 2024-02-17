import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="landing">
      <div className="header">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a href="/">
          <i class="fa fa-Home fa-lg"></i>Home
        </a>
        <a href="/Login">
          <i class="fa fa-Signin fa-lg"></i>Sign In
        </a>
        <Link to="/Appointment">Make Appointment</Link>
      </div>
      <div className="h1">
        <h1>LAND REGISTRATION SYSTEM</h1>
      </div>
      <div className="form-container2" style={{ float: "left" }}>
        <h2>About Us</h2>
        <p>Land registration is any of various systems by which matters concerning ownership, possession, or other rights in land are formally recorded (usually with a government agency or department) to provide evidence of title, facilitate transactions, and prevent unlawful disposal. The information recorded and the protection provided by land registration varies widely by jurisdiction.</p>
      </div>
      <div className="form-container2" style={{ float: "left" }}>
        <h2>Address</h2>
        <p style={{ marginTop:'15px' }}>DebreBerhan,Behind Ayu Primary Hospital</p>
      </div>
    </div>
  );
}
