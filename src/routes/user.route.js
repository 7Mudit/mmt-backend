const express = require("express");
const {
  bookHotel,
  bookFlight,
  bookedHotelList,
  bookedFlightList,
} = require("../controllers/user.controller.js");
const authenticateToken = require("../middlewares/authenticationMiddleware.js");

const userRouter = express.Router();

userRouter.post("/bookHotel", authenticateToken, bookHotel);
userRouter.post("/bookFlight", authenticateToken, bookFlight);
userRouter.get("/bookedHotelList/", authenticateToken, bookedHotelList);
userRouter.get("/bookedFlightList/", authenticateToken, bookedFlightList);

module.exports = userRouter;
