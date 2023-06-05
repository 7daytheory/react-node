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
        if(err) {
            console.log(err)
        } else {
        console.log(data);
        }
    })
})

app.listen(8800, () => {
    console.log("Connected Express");
});