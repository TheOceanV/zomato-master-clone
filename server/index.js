// Env Variables
require("dotenv").config();

// Libraries
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
// import passport from "passport";

// import configs
// import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/image";
import Order from "./API/Orders";
import Review from "./API/Reviews";
import User from "./API/User";
import MailService from "./API/Mail";

// Database
import ConnectDB from "./database/connection";
import passport from "passport";

const zomato = express();

// middlewares applications
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
// zomato.use(passport.initialize());
// zomato.use(passport.session());

// passport config
// googleAuthConfig(passport);
routeConfig(passport);

// Application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Review);
zomato.use("/user", User);
zomato.use("/mail", MailService);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

// console.log(process.env.GOOGLE_CLIENT_ID);
zomato.listen(4000, () => 
   ConnectDB()
    .then(() => console.log("Server is running!"))
    .catch(() => console.log("Server is running but database connection failed")
    )
);
