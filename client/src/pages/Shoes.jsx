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
    <div>shoes</div>
  )
}

export default Shoes