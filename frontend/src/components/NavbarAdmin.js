import React from "react";
import { useState } from "react";
import "./Navbar.css";
import SearchBar from "../components/Search.js";
import { Link } from "react-router-dom";





export default function NavbarAdmin() {
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState()

  const handleSearch = (searchTerm) => {
    fetch(
      "http://localhost:5000/createUser / search ? (term = $) : { searchTerm }"    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <nav className="Navbar">
        <img alt="" src={Image} />
        <div className="nav-items">
          <SearchBar onSearch={handleSearch} />
          <ul>
            {searchResults.map((user) => (
              <li key={user._id}>{user.fullName}</li>
            ))}
          </ul>
          <Link to="/">Home</Link>
          <Link to="/Admin">AdminDashboard</Link>
        </div>
      </nav>
    </div>
  );
}
