import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [shoe, setShoe] = useState({
    name: "",
    desc: "",
    price: null,
    image: ""
  });

  const handleChange = (e) => {
    setShoe((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      console.log(shoe);
      await axios.post("http://localhost:8800/shoes", shoe);
      navigate("/");
    } catch(err) {
      console.log("There has been an error : " + err);
    }
  }

  return (
    <div className="form">
      <h1>Add new shoe</h1>
        <input type="text" placeholder="Shoe name" name="name" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Description" name="desc" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Price" name="price" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Image" name="image" onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Add