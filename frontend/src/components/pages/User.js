import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar.js";
import axios from "axios";
import "./User.css";

export default function User() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:5000/user/getAllCustomers").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div className="cont">
      <Navbar />
      <div className="table-wrapper">
        <div className="text-end">
          <button  style={{width:'10%',height:'50%',backgroundColor:'rgb(125, 197, 141)',fontSize:'large'}}>
            <Link to="/create" className="btn" style={{color:'black'}}>
              Register parcel
            </Link>
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))}
              <th>Fullname</th>
              <th>Current City</th>
              <th>Subcity</th>
              <th>Kebele</th>
              <th>Area</th>
              <th>Martial Status</th>
              <th>Gender</th>
              <th>Service Type</th>
              <th>Registration Date</th>
              <th>Land Level</th>
              <th>North Boundary</th>
              <th>South Boundary</th>
              <th>East Boundary</th>
              <th>West Boundary</th>
              <th>Parcel Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item}>
                <td>{item.fulName}</td>
                <td>{item.city}</td>
                <td>{item.kebele}</td>
                <td>
                  <Link
                    to={`/update/${item.id}`}
                    className="btn btn-sm btn-success"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(item.id)}
                    className="btn btn-sm ms-1 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  function handleSubmit(id) {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      axios
        .delete("http://localhost:5000/user/getAllCustomers/" + id)
        .then((res) => {
          alert("Data has deleted");
          navigate("/user");
        })
        .catch((err) => console.log(err));
    }
  }
}
