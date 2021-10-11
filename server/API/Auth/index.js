// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

// Models
import { UserModel } from "../../database/user";

// validation
import { ValidateSignup, ValidateSignin } from "../../Validation/auth";

/*
Route   /signup
Des     Register New User
Params  None
Access  Public
Method  POST
*/
Router.post("/signup", async (req, res) => {
    try { 
     await ValidateSignup(req.body.credentials); 

     await UserModel.findByEmailAndPhone(req.body.credentials);
     const newUser = await UserModel.create(req.body.credentials);
     const token = newUser.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json ({ error: error.message });
    }
});

/*
Route   /signin
Des     Signin with email and password
Params  None
Access  Public
Method  POST
*/
Router.post("/signin", async (req, res) => {
  try { 
   await ValidateSignin(req.body.credentials); 

   const user = await UserModel.findByEmailAndPassword(req.body.credentials);

   const token = user.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json ({ error: error.message });
  }
});

// /*
// Route   /google
// Des     Google Signin
// Params  None
// Access  Public
// Method  GET
// */
// Router.get(
//   "/google", 
//  passport.authenticate("google", { 
//    scope: [
//     "https://www.googleapis.com/auth/userinfo.profile",
//     "https://www.googleapis.com/auth/userinfo.email",
//     ], 
//   })
//  );

// // /*
// // Route   /google/callback
// // Des     Google Signin Callback
// // Params  None
// // Access  Public
// // Method  GET
// // */
// Router.get(
//   "/google/callback", 
//   passport.authenticate("google", { failureRedirect: "/" }),
//   (req, res) => {
  // return res.redirect(
  //   `http://localhost:3000/google/${req.session.passport.user.token}`
  // )//   }

export default Router;