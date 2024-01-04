import {Express, Request, Response} from "express";
import helmet from "helmet";

const express = require("express");
const dotenv = require("dotenv").config();

const app: Express = express();

const PORT = process.env.PORT || 7000;

const cors = require("cors");

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

app.use("/api", require("./routes/Routes"));

try {   
    const server = app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!!!`);
    });
} catch (error) {
    console.log("Error connecting to server!!!", error);
}


