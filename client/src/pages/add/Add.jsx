import React, { useState } from 'react'

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

  console.log(shoe);

  return (
    <div className="form">
      <h1>Add new shoe</h1>
        <input type="text" placeholder="Shoe name" name="name" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Description" name="desc" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Price" name="price" onChange={handleChange}/>
        <input type="text" placeholder="Shoe Image" name="image" onChange={handleChange}/>
    </div>
  )
}

export default Add