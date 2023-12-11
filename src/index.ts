import {Express, Request, Response} from "express";

const express = require("express");
const dotenv = require("dotenv").config();

const app: Express = express();

const PORT = process.env.PORT || 5000;


const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.options("*", cors());
app.use(express.json());

app.use("/api", require("./routes/Routes"));

try{
    app.listen(PORT, () =>{
        console.log(`Server is running on port ${PORT}!!!`);
    })
}catch(error: any){
    console.log("Error connecting to server!!!", error);
}

