const express = require("express");
require('dotenv').config();
const cors = require("cors");
const app = express();

app.use(
    cors({
      origin: [
        "http://localhost:5173",
      ],
      credentials: true,
    })
  );
  app.use(express.json());


//   initial server start
app.get("/", (req, res) => {
    res.status(200)
    .json( {message: "server is running", 
        app: "Byte Bazaar"
    })
})

  // handle error for unknown routes
app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server`,
    });
  });

  module.exports = app;