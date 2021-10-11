// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
  try {
    const { email, fullname, phoneNumber, address } =
      req.session.passport.user._doc;

    return res.json({ user: { email, fullname, phoneNumber, address } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route   /
Des     get the user data
Params  _id
Access  Public
Method  GET
*/
Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const user = await UserModel.findById(req.params._id);
      const { fullname } = user;
    
      return res.json({ user: { fullname } });
    } catch (error) {
      return res.status(500).json({ error: error.message });          
    }
});

/*
Route   /update
Des     Update the user data
Params  _userId
BODY    user data
Access  Public
Method  PUT
*/
Router.put("/update/:_userId", async (req, res) => {
    try {
      const { _userId } = req.params;
      const { userData } = req.body;
      const updateUserData = await UserModel.findByIdAndUpdate(
          userId,
          {
              $set: userData
          },
          {
              new: true
          }
      );
      return res.json({ user: updateUserData });
    } catch (error) {
      return res.status(500).json({ error: error.message });          
    }
});

export default Router;