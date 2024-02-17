import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, Link, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NavbarAdmin from "../NavbarAdmin";
import './Admin.css'

const validationSchema = yup.object({
  username: yup.string().required("Enter your Username"),
  password: yup
    .string()
    .min(4, "Password must have at least 4 characters")
    .required("Password is required"),
});

function Admin() {
  const [show, setShow] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState(false);
  const [customerData, setCustomerData] = useState("");
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  const logOut = () => {
    fetch("http://localhost:5000/user/logout", {
      method: "POST",
    })
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.error(error));
  };


  const getAllCustomer = () => {
    fetch("http://localhost:5000/user/getAllCustomer", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((customerData) => {
        console.log(customerData, "customerData");
        setCustomerData(customerData.customerData);
      });
  };

  const getAllUser = () => {
    fetch("http://localhost:5000/user/getAllUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((userData) => {
        console.log(userData, "userData");
        setUserData(userData.userData);
      });
  };

  const deleteUser = (idNo, fullName) => {
    if (window.confirm(`Are you sure you want to delete ${fullName}`)) {
      fetch("http://localhost:5000/user/deleteUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          idNo: idNo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } 
  };
  useEffect (()=>{
    getAllUser();
    getAllCustomer();
  },[]);

  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        username: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        axios
          .post("http://localhost:5000/user/createUser", values)
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.user) {
              alert(data.message);
            } else {
              alert(data.message);
            }
            actions.setSubmitting(false);
          })
          .then((response) => {
            const data = response.data;
            console.log(data);
            if (data.user) {
              alert(data.message);
            } else {
              alert(data.message);
            }
            actions.setSubmitting(false);
          });
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        isSubmitting,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="container">
          <div>
            <NavbarAdmin />
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 20,
                marginLeft: 15,
                marginBottom: 5,
                backgroundColor:"rgb(125, 197, 141)",
                color: "black",
                fontSize:"large"
              }}
              onClick={() => setShow(!show)}
              variant="contained"
            >
              {show === true ? "^" : "+"} Add a User
            </Button>

            {show && (
              <>
                <div
                  className="form-container3"
                  style={{ marginTop:60,marginBottom: 20,marginLeft:300}}

                >
                  <h1>Add a User</h1>
                  <form autoComplete="off" onSubmit={handleSubmit} >
                    <label>Full Name</label>
                    <input
                      style={{ marginBottom: 5,marginLeft:30,width:220}}
                      id="fullName"
                      type="text"
                      placeholder="Enter your Full Name"
                      required
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.fullName && touched.fullName ? "error" : ""
                      }
                    />
                    <br/>
                    <ErrorMessage
                      name="fullName"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <label>Phone Number</label>
                    <input
                      style={{ marginBottom: 5,marginLeft:20,width:200}}
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter your Phone Number"
                      required
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phoneNumber && touched.phoneNumber ? "error" : ""
                      }
                    />
                    <br/>
                    <ErrorMessage
                      name="phoneNumber"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <label>Username</label>
                    <input
                      style={{ marginBottom: 5,marginLeft:30,width:220}}
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      required
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.username && touched.username ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="username"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <br />
                    <label>Password</label>
                    <input
                      style={{ marginBottom: 5,marginLeft:30,width:220}}
                      id="password"
                      type="password"
                      placeholder="Enter your Password"
                      required
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.password && touched.password ? "error" : ""
                      }
                    />
                    <ErrorMessage
                      name="password"
                      style={{ color: "red", fontSize: "small" }}
                      className="error-message"
                      component="span"
                    />
                    <br />
                    <div className="log">
                      <button type="submit" disabled={isSubmitting} style={{ marginBottom: 5,marginLeft:30,width:150}}>
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 15,
                marginLeft: 15,
                marginBottom: 5,
                backgroundColor:"rgb(125, 197, 141)",
                color: "black",
                fontSize:"large"
              }}
              onClick={() => setShowCustomer(!showCustomer)}
              variant="contained"
            >
              {showCustomer === true ? "^" : "↓"} See Customer Data
            </Button>
            {showCustomer && (
              <TableContainer
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  marginTop: 5,
                  marginBottom: 16,
                  boxShadow: "0px 0px 5px #ccc",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "rgb(125, 197, 141)" }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>Current-city</TableCell>
                      <TableCell>kebele</TableCell>
                      <TableCell>Area</TableCell>
                      <TableCell>Subcity</TableCell>
                      <TableCell>MartialStatus</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Registration Date</TableCell>
                      <TableCell>ParcelCode</TableCell>
                      <TableCell>Land-Level</TableCell>
                      <TableCell>Service Type</TableCell>
                      <TableCell>North Boundary</TableCell>
                      <TableCell>South Boundary</TableCell>
                      <TableCell>East Boundary</TableCell>
                      <TableCell>West Boundary</TableCell>
                      <TableCell>Tenure Type</TableCell>
                      <TableCell>Encumbrance</TableCell>
                      <TableCell>Occupation</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((i) => (
                      <TableRow key={i.idNo}>
                        <TableCell>{i.fullName}</TableCell>
                        <TableCell>{i.currentCity}</TableCell>
                        <TableCell>{i.kebele}</TableCell>
                        <TableCell>{i.area}</TableCell>
                        <TableCell>{i.subCity}</TableCell>
                        <TableCell>{i.martialStatus}</TableCell>
                        <TableCell>{i.gender}</TableCell>
                        <TableCell>{i.registrationDate}</TableCell>
                        <TableCell>{i.parcelCode}</TableCell>
                        <TableCell>{i.landLevel}</TableCell>
                        <TableCell>{i.serviceType}</TableCell>
                        <TableCell>{i.northBoundary}</TableCell>
                        <TableCell>{i.southBoundary}</TableCell>
                        <TableCell>{i.eastBoundary}</TableCell>
                        <TableCell>{i.westBoundary}</TableCell>
                        <TableCell>{i.tenureType}</TableCell>
                        <TableCell>{i.encumbrance}</TableCell>
                        <TableCell>{i.occupation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              sx={{
                marginRight: 10,
                marginTop: 10,
                marginLeft: 15,
                marginBottom: 5,
                backgroundColor:"rgb(125, 197, 141)",
                color: "black",
                fontSize:"large"
              }}
              onClick={() => setShowUser(!showUser)}
              variant="contained"
            >
              {showUser === true ? "^" : "↓"} See User Data
            </Button>
            {showUser && (
              <TableContainer
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  marginBottom: 16,
                  marginTop: 5,
                  boxShadow: "0px 0px 5px #ccc",
                }}
              >
                <Table>
                  <TableHead sx={{ backgroundColor: "rgb(125, 197, 141)" }}>
                    <TableRow>
                      <TableCell>FullName</TableCell>
                      <TableCell>Phone NO.</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell>{a.fullName}</TableCell>
                        <TableCell>{a.phoneNumber}</TableCell>
                        <TableCell>{a.username}</TableCell>
                        <TableCell>
                          <PersonRemoveIcon
                            onClick={() =>
                              deleteUser(
                                a.id,
                                a.fullName,
                                a.phoneNumber,
                                a.username
                              )
                            }
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>
          <div>
            <Button
              onClick={logOut}
              sx={{
                marginRight: 3,
                marginTop: 20,
                marginLeft: 15,
                marginBottom: 5,
                backgroundColor:"rgb(125, 197, 141)",
                color: "black",
                fontSize:"large"
              }}
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
}
export default Admin;
