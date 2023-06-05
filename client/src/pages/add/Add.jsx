import React, { useState } from 'react'
import axios from 'axios'

const Add = () => {
  const [shoe, setShoe] = useState({
    shoeName: "",
    desc: "",
    price: null,
    image: ""
  });

  const handleChange = (e) => {
    setShoe((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost/shoes", shoe);
    } catch(err) {
      console.log("There has been an error : " + err);
    }
  }

  console.log(shoe);

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