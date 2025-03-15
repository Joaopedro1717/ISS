const express = require("express");
const mysql = require("mysql")

const app = express();
const port = 3000;

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "positivo",
        database: "users"
    }
)

app.get("/", (req, res) => {
    const message = "Hello World";

    res.send(message);
})

app.get("/response_is_json", (req, res) => {
    res.json({
        name: "João",
        lastname: "Pedro",
        age: "20"
    })
})

app.get("/plus", (req, res) => {
    const numberOne = parseInt(req.query.numberOne)
    const numberTwo = parseInt(req.query.numberTwo)

    const result = numberOne + numberTwo

    res.json(
        {
            numberOne,
            numberTwo,
            result
        }
    )
})

app.get("/user", (req, res) => {
    const query = `SELECT * FROM user WHERE name = "${req.query.name}"`;

    connection.query(query, (err, result, fields) => {
        if (err) throw err;

        res.json(result);
    })
})



app.listen(port, () => console.log("api is up"));