import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        style={{width:'150%',height:'30px',marginLeft:'-83%',float:'left'}}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{width:'30%',height:'50%',backgroundColor:'rgb(125, 197, 141)',float:'right',marginTop:'1.5%',fontSize:'large'}}>Search</button>
    </div>
  );
};

export default SearchBar;