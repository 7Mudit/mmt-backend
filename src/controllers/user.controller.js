const {
  hotelBookService,
  flightBookService,
  bookedHotelListService,
  bookedFlightListService,
} = require("../services/user.service.js");

async function bookHotel(req, res, next) {
  const { hotelName, hotelDescription, city, hotelPrice, username } = req.body;
  try {
    const { status, message, success, bookingDetails } = await hotelBookService(
      {
        hotelName,
        hotelDescription,
        city,
        hotelPrice,
        username,
      }
    );
    res.status(status).json({
      message,
      success,
      bookingDetails,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function bookFlight(req, res, next) {
  console.log("this is data : ",req.body);
  const { airlineName, from, to, duration, date, price, username } = req.body;
  try {
    const { status, message, success, bookingDetails } =
      await flightBookService({
        airlineName,
        from,
        to,
        duration,
        date,
        price,
        username,
      });
    res.status(status).json({
      message,
      success,
      bookingDetails,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function bookedHotelList(req, res, next) {
  const { username } = req.query;
  try {
    const { status, message, success, bookedHotelListData } =
      await bookedHotelListService({
        username,
      });
    res.status(status).json({
      message,
      success,
      bookedHotelListData,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function bookedFlightList(req, res, next) {
  const { username } = req.query;
  try {
    const { status, message, success, bookedFlightListData } =
      await bookedFlightListService({
        username,
      });
    res.status(status).json({
      message,
      success,
      bookedFlightListData,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

module.exports = { bookHotel, bookFlight, bookedHotelList, bookedFlightList };
