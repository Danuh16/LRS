import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavbarParcel from "../NavbarParcel.js";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getAllCustomers/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  function handleSubmit(e) {
    e.preventDefualt();
    axios
      .put("http://localhost:5000/getAllCustomers/" + id, data)
      .then((res) => {
        alert("Updated Successfully!");
        navigate("/User");
      });
  }
  return (
    <div className="parcel">
    <NavbarParcel />
    <form onSubmit={handleSubmit} className="form-container">
    <div style={{display:"grid",marginLeft:'15%',marginTop:'3%'}}>
      <label style={{float:'left',marginLeft:'-60%',}}>
        Full Name:
        <input
          type="text"
          name="fullName"
          style={{width:'15%',height:'25px',marginLeft:'1%',marginTop: '10px'}}
    
        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-61%'}}>
        Current City:
        <input
          type="text"
          name="currentCity"
          style={{width:'15%',height:'25px',marginLeft:'1%'}}
          
        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-59%'}}>
        Sub-City:
        <input
          type="text"
          name="subCity"
          style={{width:'15%',height:'25px',marginLeft:'1%'}}
  
        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-58%'}}>
        Kebele:
        <input
          type="number"
          name="kebele"
          style={{width:'15%',height:'25px',marginLeft:'1%'}}

        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-62%'}}>
        Marital Status:
        <select
          name="maritalStatus"
          style={{width:'15%',height:'25px',marginLeft:'1%',fontSize:'large',textAlign:'center'}}
          on
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
          onCha
        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-62%'}}>
        Parcel Code:
        <input
          type="text"
          name="parcelCode"
          style={{width:'15%',height:'25px',marginLeft:'1%'}}
        
        />
      </label>
      
      <br />
      <label style={{float:'left',marginLeft:'-61%'}}>
        Land Level:
        <input
          type="text"
          name="landLevel"
          style={{width:'15%',height:'25px',marginLeft:'1%'}}
      
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
        />
      </label>

      <br />
      <label style={{float:'left',marginLeft:'-2%'}}>
        Service Type:
        <input
          type="text"
          name="seviceType"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          
        />
      </label>
      <br/>

      <label style={{float:'left',marginLeft:'-3%'}}>
        North Boundary:
        <input
          type="text"
          name="northBoundary"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          on
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-3%'}}>
        South Boundary:
        <input
          type="text"
          name="southBoundary"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          on
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-3%'}}>
        East Boundary:
        <input
          type="text"
          name="eastBoundary"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          o
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-3%'}}>
        West Boundary:
        <input
          type="text"
          name="westBoundary"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          o
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-1%'}}>
        Tenure Type:
        <input
          type="text"
          name="tenureType"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
        
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-2%'}}>
        Encumbrance:
        <input
          type="text"
          name="encumbrance"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
          
        />
      </label>
      <br/>
      <label style={{float:'left',marginLeft:'-1%'}}>
        Occupation:
        <input
          type="text"
          name="occupation"
          style={{width:'30%',height:'25px',marginLeft:'1%'}}
        
        />
      </label>
      <br/>
      </div>

      <button className="btn btn-info" type="submit" style={{width:"200px",height:'40px', backgroundColor:'rgb(125, 197, 141)', alignItems:'center', marginLeft:'40%',marginTop:'3%'}}>
        Update
      </button>
    </form>
  </div>
  );
}
