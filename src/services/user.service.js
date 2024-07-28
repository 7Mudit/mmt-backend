const Hotel = require("../models/Hotel.model.js");
const Flight = require("../models/Flight.model.js");
const { CustomException } = require("../utils/customExceptions.js");

async function hotelBookService(data) {
  const { hotelName, hotelDescription, city, hotelPrice, username } = data;
  try {
    if (!hotelName || !hotelDescription || !city || !hotelPrice || !username) {
      throw new CustomException(400, "All fields are required");
    }
    const newHotelBooking = new Hotel({
      name: hotelName,
      description: hotelDescription,
      city: city,
      price: hotelPrice,
      userRef: username,
    });

    await newHotelBooking.save();

    return {
      success: true,
      status: 200,
      message: "Hotel booked successfully!!",
      bookingDetails: newHotelBooking,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

async function flightBookService(data) {
  const { airlineName, from, to, duration, date, price, username } = data;

  try {
    if (
      !airlineName ||
      !from ||
      !to ||
      !duration ||
      !date ||
      !price ||
      !username
    ) {
      throw new CustomException(400, "All fields are required");
    }
    const newFlightBooking = new Flight({
      airline: airlineName,
      from: from,
      to: to,
      duration: duration,
      date: date,
      price: price,
      userRef: username,
    });

    await newFlightBooking.save();

    return {
      success: true,
      status: 200,
      message: "Flight booked successfully!!",
      bookingDetails: newFlightBooking,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

async function bookedHotelListService(data) {
  const { username } = data;
  try {
    if (!username) {
      throw new CustomException(400, "Please provide 'username'");
    }
    const bookedHotelListData = await Hotel.find({ userRef: username });

    return {
      success: true,
      status: 200,
      message: "Successfully fetched booked Hotel's by a user!!",
      bookedHotelListData: bookedHotelListData,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

async function bookedFlightListService(data) {
  const { username } = data;
  try {
    if (!username) {
      throw new CustomException(400, "Please provide 'username'");
    }
    const bookedFlightListData = await Flight.find({ userRef: username });

    return {
      success: true,
      status: 200,
      message: "Successfully fetched booked Flight's by a user!!",
      bookedFlightListData: bookedFlightListData,
    };
  } catch (error) {
    throw new CustomException(error.statusCode, error.message);
  }
}

module.exports = {
  hotelBookService,
  flightBookService,
  bookedHotelListService,
  bookedFlightListService,
};
