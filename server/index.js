// Env Variables
require("dotenv").config();

// Libraries
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

// Database
import ConnectDB from "./database/connection";

const zomato = express();

// middlewares applications
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

// Application routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

zomato.listen(4000, () => 
   ConnectDB()
    .then(() => console.log("Server is running!"))
    .catch(() => console.log("Server is running but database connection failed")
    )
);
