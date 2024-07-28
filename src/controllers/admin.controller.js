const {
  allBookedHotelsService,
  allBookedFlightsService,
} = require("../services/admin.service.js");

async function allBookedHotelsList(req, res, next) {
  try {
    const { status, message, success, allBookedHotelListData } =
      await allBookedHotelsService();
    res.status(status).json({
      message,
      success,
      allBookedHotelListData,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function allBookedFlightsList(req, res, next) {
  try {
    const { status, message, success, allBookedFlightsListData } =
      await allBookedFlightsService({});
    res.status(status).json({
      message,
      success,
      allBookedFlightsListData,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

module.exports = { allBookedHotelsList, allBookedFlightsList };
