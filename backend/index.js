import express from "express"
import mysql from "mysql"

const app = express();

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
    const query = "INSERT INTO shoes (`shoes_name`, `shoes_desc`, `shoes_price`) VALUES (?)";
    const values = ['Adidas', 'Descriptin test', 25];

    db.query(query, [values], (err,data) => {
        if(err) return res.json(err);
        return res.json("New Shoe has been added");
    })
})

app.listen(8800, () => {
    console.log("Connected Express");
});