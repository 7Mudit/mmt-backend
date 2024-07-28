// const jwtSecret = require("../../index.js");
const jwt = require("jsonwebtoken");

// console.log("JWT Secret key:", jwtSecret);

function generateJWTAccessToken(email) {
  const payload = {
    email: email,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
  console.log("Access Token generated:", accessToken);

  return accessToken;
}

function generateJWTRefreshToken(email) {
  const payload = {
    email: email,
  };

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  console.log("Refresh Token generated:", refreshToken);

  return refreshToken;
}

module.exports = { generateJWTAccessToken, generateJWTRefreshToken };
