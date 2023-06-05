import React, { useState } from 'react'

const Add = () => {
  const [shoe, setShoe] = useState({
    name: "",
    desc: "",
    price: null,
    image: ""
  });

  return (
    <div className="form">
      <h1>Add new shoe</h1>
        <input type="text" placeholder="Shoe name" />
        <input type="text" placeholder="Shoe Description" />
        <input type="text" placeholder="Shoe Price" />
        <input type="text" placeholder="Shoe Image" />
    </div>
  )
}

export default Add