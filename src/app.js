const express = require("express");
require('dotenv').config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(
    cors({
      origin: [
        "http://localhost:5173",
      ],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());

  // import route
  const authRouter = require("./routes/authRouter");
  const userRouter = require("./routes/userRoutes");

//   initial server start
app.get("/", (req, res) => {
    res.status(200)
    .json( {message: "server is running", 
        app: "Byte Bazaar"
    })
})

// routes mounting

app.use("/jwt/access_token", authRouter),
app.use("/users", userRouter),
  // handle error for unknown routes
app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server`,
    });
  });

  module.exports = app;