import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'animate.css'

const Search = ({ onSubmit }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value.replace(/ +/g, '');
    // console.log(value);
    setSearchKeyword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchKeyword);
  };

  return (
    <div className="search-container">
      <h1 className="animate__animated animate__flipInX">Search on GitHub</h1>
      <form onSubmit={handleSubmit}>
        <input className="search-input" type="text" placeholder="Search...." onChange={handleChange} />
        <Button className="search-button" onClick={handleSubmit}>Search</Button>
      </form>
    </div>
  );
};

export default Search;
