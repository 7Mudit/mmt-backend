const Hotel = require("../models/Hotel.model.js");
const Flight = require("../models/Flight.model.js");
const { CustomException } = require("../utils/customExceptions.js");

async function allBookedHotelsService() {
  try {
    const allBookedHotelListData = await Hotel.find({});

    return {
      success: true,
      status: 200,
      message: "Successfully fetched all booked Hotel's by all user's!!",
      allBookedHotelListData: allBookedHotelListData,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

async function allBookedFlightsService() {
  try {
    const allBookedFlightsListData = await Flight.find({});

    return {
      success: true,
      status: 200,
      message: "Successfully fetched all booked Flight's by all user's!!",
      allBookedFlightsListData: allBookedFlightsListData,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

module.exports = {
  allBookedHotelsService,
  allBookedFlightsService,
};
