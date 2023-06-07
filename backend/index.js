import express from "express"
import mysql from "mysql"
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));


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
    const query = "INSERT INTO shoes ('shoes_name', 'shoes_desc', 'shoes_price', 'shoes_img') VALUES (?)";
    const values = [
        req.body.name,
        req.body.desc,
        req.body.price,
        req.body.image
    ]


    db.query(query, [values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/shoes/:id", (req, res) => {
    const id = req.params.id;
    const q = `SELECT * FROM shoes WHERE shoes_id = ${id}`;
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

app.listen(8800, () => {
    console.log("Connected Express");
});