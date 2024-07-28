const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRouter = require("./src/routes/auth.route.js");
const userRouter = require("./src/routes/user.route.js");
const adminRouter = require("./src/routes/admin.route.js");
dotenv.config();

const server = express();
server.use(express.json());

server.use(cors());



const port = 8001;
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB IS CONNECTED");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error in connection to DB");
  });






server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);
server.use("/api/admin", adminRouter);


// server.get("/", (req, res) => {
//   console.log("Welcome to Express server!!");
//   res.send("Welcome!!");
// });

server.listen(port, () => {
  console.log("Express is running on port:", port);
});
