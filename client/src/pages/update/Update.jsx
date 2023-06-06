import React from 'react'
import { Link } from 'react-router-dom';

const handleClick = async (e) => {
  e.preventDefault();

  console.log("Form Clicked!");
};

const Update = () => {
  return (
    <div className="form">
      <h1>Update shoe</h1>
      <input
        type="text"
        placeholder="Shoe name"
        name="title"
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Shoe Description"
        name="desc"
      />
      <input
        type="number"
        placeholder="Shoe price"
        name="price"
      />
      <input
        type="text"
        placeholder="Shoe Image"
        name="image"
      />
      <button onClick={handleClick}>Update</button>
      <Link to="/">See all shoes</Link>
    </div>
  );
};

export default Update