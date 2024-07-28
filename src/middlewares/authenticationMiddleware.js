const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  console.log("token:", token);
  if (!token) return res.sendStatus(401);

  decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log("User authenticated successfully!!");
    next();
  });
};

module.exports = authenticateToken;
