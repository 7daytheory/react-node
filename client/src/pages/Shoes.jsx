import React, { useEffect, useState } from 'react'
import axios from "axios";

const Shoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8800/shoes")
                setShoes(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        <h1>Shoes</h1>
        <div className="shoes">
            {shoes.map(shoe => (
                <div className="shoe">
                    {shoe.shoes_img && <img src={shoe.shoes_img} alt="Shoe display" />}
                    <h2>{shoe.shoes_name}</h2>
                    <h3>{shoe.shoes_price}</h3>
                    <p>{shoe.shoes_desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shoes