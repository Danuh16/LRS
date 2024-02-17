//import Amhara_Logo from './Amhara_Logo.jpg';
import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Search.js";





function Navbar() {
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState()

  const handleSearch = (searchTerm) => {
    // Make an API call to fetch the search results
    fetch("http://localhost:5000/parcel/ search ? (term = $) : { searchTerm }" )
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  };

  const logOut = () => {
    fetch("http://localhost:5000/logout", {
      method: "POST",
    })
      .then(() => {
        setUser(null);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <nav className="Navbar">
        <img alt="logo" src={Image} />
        <div className="nav-items">
          <SearchBar onSearch={handleSearch}  />
          <ul>
            {searchResults.map((parcel) => (
              <li key={parcel._id}>{parcel.fullName}</li>
            ))}
          </ul>
          <Link to="/" >Home</Link>
          <Link to="/User">Dashboard</Link>
          <Link>
            <button
              onClick={logOut}
              style={{width:'100%',height:'40%',backgroundColor:'rgb(125, 197, 141)',fontSize:'large'}}
              variant="contained"
            >
              Log Out
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
