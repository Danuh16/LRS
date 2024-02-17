import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import  "./parcel.css";
import NavbarParcel from "../NavbarParcel.js";

export default function Parcel() {
  const [inputData, setInputData] = useState({
    fullName: "",
    area:"",
    currentCity: "",
    subCity: "",
    kebele: "",
    martialStatus: "",
    gender: "",
    registrationDate: "",
    parcelCode: "",
    landLevel: "",
    serviceType: "",
    northBoundary: "",
    southBoundary: "",
    eastBoundary: "",
    westBoundary: "",
    tenureType: "",
    encumbrance: "",
    occupation: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefualt();

    axios
      .post("http://localhost:5000/user/parcel", inputData)
      .then((res) => {
        alert("Registered Successfully!");
        navigate("/User");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="parcel">
      <NavbarParcel/>
      <form onSubmit={handleSubmit} className="form-container">
      <div style={{display:"grid",marginLeft:'15%',marginTop:'3%'}}>
        <label style={{float:'left',marginLeft:'-60%',}}>
          Full Name:
          <input
            type="text"
            name="fullName"
            style={{width:'15%',height:'25px',marginLeft:'1%',marginTop: '10px'}}
            onChange={(e) =>
              setInputData({ ...inputData, fullName: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-61%'}}>
          Current City:
          <input
            type="text"
            name="currentCity"
            style={{width:'15%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, currentCity: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-59%'}}>
          Sub-City:
          <input
            type="text"
            name="subCity"
            style={{width:'15%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, subCity: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-58%'}}>
          Kebele:
          <input
            type="number"
            name="kebele"
            style={{width:'15%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, kebele: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-62%'}}>
          Marital Status:
          <select
            name="maritalStatus"
            style={{width:'15%',height:'25px',marginLeft:'1%',fontSize:'large',textAlign:'center'}}
            onChange={(e) =>
              setInputData({ ...inputData, martialStatus: e.target.value })
            }
          >
            <option selected disabled>
              click here
            </option>
            <option>Single</option>
            <option>Married</option>
          </select>
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-58%'}}>
          Gender:
          <select
            name="gender"
            style={{width:'15%',height:'25px',marginLeft:'1%',fontSize:'large',textAlign:'center'}}
            onChange={(e) =>
              setInputData({ ...inputData, gender: e.target.value })
            }
          >
            <option selected disabled>
              click here
            </option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-65%'}}>
          Registration Date:
          <input
            type="date"
            name="registrationDate"
            style={{width:'15%',height:'25px',marginLeft:'1%',fontSize:'large',textAlign:'center'}}
            onChange={(e) =>
              setInputData({ ...inputData, registrationDate: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-62%'}}>
          Parcel Code:
          <input
            type="text"
            name="parcelCode"
            style={{width:'15%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, parcelCode: e.target.value })
            }
          />
        </label>
        
        <br />
        <label style={{float:'left',marginLeft:'-61%'}}>
          Land Level:
          <input
            type="text"
            name="landLevel"
            style={{width:'15%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, landLevel: e.target.value })
            }
          />
        </label>
        </div>
        <div style={{display: 'grid', marginTop:'-30.5%',marginLeft:'40%'}}>
        <label style={{float:'left',marginLeft:'5%'}}>
          Area:
          <input
            type="text"
            name="area"
            style={{width:'32%',height:'25px',marginLeft:'1%', }}
            onChange={(e) =>
              setInputData({ ...inputData, area: e.target.value })
            }
          />
        </label>

        <br />
        <label style={{float:'left',marginLeft:'-2%'}}>
          Service Type:
          <input
            type="text"
            name="seviceType"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, serviceType: e.target.value })
            }
          />
        </label>
        <br/>

        <label style={{float:'left',marginLeft:'-3%'}}>
          North Boundary:
          <input
            type="text"
            name="northBoundary"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, northBoundary: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-3%'}}>
          South Boundary:
          <input
            type="text"
            name="southBoundary"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, southBoundary: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-3%'}}>
          East Boundary:
          <input
            type="text"
            name="eastBoundary"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, eastBoundary: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-3%'}}>
          West Boundary:
          <input
            type="text"
            name="westBoundary"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, westBoundary: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-1%'}}>
          Tenure Type:
          <input
            type="text"
            name="tenureType"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, tenureType: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-2%'}}>
          Encumbrance:
          <input
            type="text"
            name="encumbrance"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, encumbrance: e.target.value })
            }
          />
        </label>
        <br/>
        <label style={{float:'left',marginLeft:'-1%'}}>
          Occupation:
          <input
            type="text"
            name="occupation"
            style={{width:'30%',height:'25px',marginLeft:'1%'}}
            onChange={(e) =>
              setInputData({ ...inputData, occupation: e.target.value })
            }
          />
        </label>
        <br/>
        </div>

        <button className="btn btn-info" type="submit" style={{width:"200px",height:'40px', backgroundColor:'rgb(125, 197, 141)', alignItems:'center', marginLeft:'40%',marginTop:'3%'}}>
          Register
        </button>
      </form>
    </div>
  );
}
