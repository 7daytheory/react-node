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
                    {shoe.img && <img src={shoe.img} alt="Shoe display" />}
                    <h1>{shoe.name}</h1>
                    <p>{shoe.desc}</p>
                    <span>{shoe.price}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Shoes