import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const Update = () => {
  const [shoe, setShoe] = useState({
    name: "",
    desc: "",
    price: null,
    image: "",
  });

  const [error, setError] = useState(false);

  const location = useLocation();

  const shoeId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/shoes/${shoeId}`, shoe);
            setShoe(res.data);
            console.log(shoe);
        } catch(err) {
            console.log(err.response.data);
            setError("There has been an error!");
        }
    }
    fetchData()
}, [])

  const handleClick = async (e) => {
    e.preventDefault();

    //Add axios call to get data from ID passed from link
  
    console.log("Form Clicked!");
  };

  return (
    <div className="form">
      <h1>Update shoe</h1>
      <input
        type="text"
        placeholder="Shoe name"
        name="name"
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
      {error && "Something went wrong!"}
      <Link to="/">See all shoes</Link>
    </div>
  );
};

export default Update