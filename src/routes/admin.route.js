const express = require("express");
const {
  allBookedHotelsList,
  allBookedFlightsList,
} = require("../controllers/admin.controller.js");
const authenticateToken = require("../middlewares/authenticationMiddleware.js");

const adminRouter = express.Router();

adminRouter.get("/allBookedHotelsList", authenticateToken, allBookedHotelsList);
adminRouter.get(
  "/allBookedFlightsList",
  authenticateToken,
  allBookedFlightsList
);

module.exports = adminRouter;
