const {
  registerUserService,
  loginService,
} = require("../services/auth.service.js");

async function signUp(req, res, next) {
  const { username, email, password, contact } = req.body;
  try {
    const { status, message, success } = await registerUserService({
      username,
      email,
      password,
      contact,
    });
    console.log(status, message , success)
    res.status(200).json({
      message,
      success,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function userSignIn(req, res, next) {
  const { email, password } = req.body;
  try {
    const result = await loginService(
      { email, password, userType: "user" },
      next
    );
    if (result) {
      const { status, message, success, userData, accessToken, refreshToken } =
        result;
      res.status(status).json({
        message,
        success,
        userData,
        accessToken,
        refreshToken,
      });
    }
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function adminSignIn(req, res, next) {
  const { email, password } = req.body;
  try {
    const result = await loginService(
      { email, password, userType: "admin" },
      next
    );
    if (result) {
      const { status, message, success, userData, accessToken, refreshToken } =
        result;
      res.status(status).json({
        message,
        success,
        userData,
        accessToken,
        refreshToken,
      });
    }
  } catch (error) {
    res.status(error.statusCode).json({
      success: false,
      message: "Something went wrong - " + error.message,
    });
  }
}

async function signOut(req, res, next) {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User logged out successfully!!");
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp, userSignIn, adminSignIn, signOut };
