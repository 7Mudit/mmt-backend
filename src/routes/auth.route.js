const express = require("express");
const {
  signOut,
  userSignIn,
  adminSignIn,
  signUp,
} = require("../controllers/auth.controller.js");

const authRouter = express.Router();

authRouter.post("/register", signUp);
authRouter.post("/userLogin", userSignIn);
authRouter.post("/adminLogin", adminSignIn);
authRouter.get("/logout", signOut);

module.exports = authRouter;
