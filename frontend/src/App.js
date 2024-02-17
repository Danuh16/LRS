import React from "react";
import Login from "../src/components/pages/Login";
import Home from "../src/components/pages/Home";
import Parcel from "../src/components/pages/Parcel";
import Edit from "../src/components/pages/Edit";
import User from "../src/components/pages/User";
import Admin from "../src/components/pages/Admin";
import Appointment from "./components/Appointment";

import { Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="create" element={<Parcel />} />
        <Route path="update/:id" element={<Edit />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}
