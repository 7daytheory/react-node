import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

app.get("/", (req,res) => {
    res.json("This is the backend");
})

app.get("/shoes", (req,res) => {
    const query = "SELECT * from shoes";
    db.query(query,(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/shoes", (req, res) => {
    const query = "INSERT INTO shoes (NULL, 'shoe', 'desc', 'price', 'img') VALUES (?)";
    const values = ["Adidas", "Description of Adidas shoe", 25, 'http://www.imageUrl.com'];

    db.query(query, [values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, () => {
    console.log("Connected Express");
});