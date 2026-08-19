const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food_delivery"
});


db.connect((err) => {
    if (err) {
        console.log("Database connection failed: " + err);
    } else {
        console.log("Database connected successfully!");
    }
});