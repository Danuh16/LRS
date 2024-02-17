import React, {useState} from "react";
import "./login.css";
import Admin from "../pages/Admin";
import User from "../pages/User"
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";
export default function Login() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [credentialError, setCredentialError] = useState('');
  const [error,setError]=useState();

    const navigate = useNavigate();
  const handlesubmit = async(e) => {
    e.preventDefault();
    console.log("logged")
//const navigate = useNavigate();
    let resFromAPI = {};
    let statusCode ;
    await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then((response) => {
      resFromAPI = response.json();
      statusCode = response.status;
      return resFromAPI;
    })
    .then((data) => {
      console.log("status code:",statusCode,data);
      if(statusCode == 200){
        setCredentialError("")
        //alert(data.message)
        console.log("response from back:",resFromAPI);
        //setUser({ username, role: data.role });
        console.log("@#$1234Danu*")
        if(data.user.role == "admin"){
          console.log("reached here ; it's an admin");
          navigate("/admin");
        }else if(data.user.role == "user") {
          navigate("/user")
        }else{
          setError("Invalid role");
        }
      }else{
        setError(data.message)
      }
    })
    .catch((error) => console.error(error));
}

  return (
    <div className="login">
      <form onSubmit={handlesubmit}>
        <div className="header">
          <a href="/">Home </a>
        </div>
        <div className="form-container1">
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>{setUsername(e.target.value);console.log(e.target.value)} }
            required
          />
          <br />
          <label style={{ marginTop: "5%" }}>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
          <br />
          <button onClick={handlesubmit}>Login</button>
          <a href="/Admin">user</a>
        </div>
      </form>
    </div>
  );
}
