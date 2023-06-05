import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Shoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/shoes", shoes);
                setShoes(res.data);
            } catch(err) {
                console.log(err.response.data);
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        <h1>Shoes</h1>
        <div className="shoes">
            {shoes.map(shoe => (
                <div className="shoe" key={shoe.shoes_id}>
                    {shoe.shoes_img && <img src={shoe.shoes_img} alt="Shoe display" />}
                    <h2>{shoe.shoes_name}</h2>
                    <h3>{shoe.shoes_price}</h3>
                    <p>{shoe.shoes_desc}</p>
                </div>
            ))}
        </div>
        <button className="addBtn"><Link to="/add">Add new shoe</Link></button>
    </div>
  )
}

export default Shoes